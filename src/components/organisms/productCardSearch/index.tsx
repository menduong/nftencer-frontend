import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { Text } from 'components/atoms/text';
import { Image, ImageProps } from 'components/atoms/image';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/atoms/link';
import { Modalshare } from 'components/organisms/modalshare';
import { UserType, VideoType, VideoTypes } from 'lib/constants';
import { Button } from 'components/atoms/button';
import { Video } from 'components/molecules/video';
import { Tooltip } from 'components/molecules/tooltip';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import { createSchemaData, initialValueData, Unit } from 'components/pages/create/form';
import { StepItem } from 'components/molecules/stepItem';
import { Steps } from 'components/organisms/steps';
import { Form, Formik } from 'formik';
import { Modal } from 'components/organisms/modal';
import { approveNFT,createTokenResellURI, getCreateStore, sellNFT } from 'store/createNFT';
import { Select } from 'components/atoms/select';
import { ModalHeader } from 'components/molecules/modalHeader';
import { useDispatch, useSelector } from 'react-redux';
import { Fieldrow } from 'components/molecules/fieldrow';
import { TextFieldFormik } from 'components/atoms/textfield';
import { resetStore } from 'store/createNFT';
import { commonStart, tokenID } from 'store/common';
import { amountReceived, amountReceivedDollar } from 'util/amount';
import { useTranslation } from "react-i18next";

type Modifier = 'foo' | 'bar';

export type User = { src: string; alt: string; type: UserType; name: string };
export interface ProductProps extends Omit<ImageProps, 'modifiers'> {
  modifiers?: Modifier | Modifier[];
  title: string;
  price?: number;
  bidPrice?: string | number;
  userList?: User[];
  amount?: number;
  collection?: string;
  totallike?: any;
  tokenowner?: any;
  optionres?:any ;
  isPreview?: boolean;
  view?: number;
  tokenid?:any;
  id?: string | number;
  mediaType?: 'gif' | 'png' | 'image' | VideoType;
  unit?: string;
  url?: any;
}


export const ProductCardSearch: React.FC<ProductProps> = props => {
  const { t } = useTranslation();
  const [like, setLike] = useState({ isLike: false, amount: props.amount });
  const productLink = `/view?id=${props.id}`;
  const dispatch = useDispatch();
  const [ModalOpendelete, setModalOpendelete] = useState(false);
  const [ModalResell, setModalResell] = useState(false);
  const { currentStep, tokenURI } = useSelector(getCreateStore);
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const CreateSteps = [
    {
      description: 'Approve perfoming transactions with your wallet',
      title: 'Approve',
      handleClick: () => {
        dispatch(approveNFT.started({}));
      },
    },
    {
      description: 'Sign sell order using your wallet',
      title: 'Sign sell order',
      handleClick: () => {
        dispatch(sellNFT.started({}));
      },
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    currentStep.number === CreateSteps.length &&
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep.number]);

  useEffect (() => {
    dispatch(tokenID({tokenid:props.tokenid || ''}));
  },[]
  );

  useEffect(() => {
    if (!modalOpenShare) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenShare]);
  useEffect(() => {
    if (!ModalOpendelete) {
      dispatch(resetStore());
    }

  }, [dispatch, ModalOpendelete]);
  return (
    <article className={mapModifiers('o-productcardMyItem', props.modifiers, props.isPreview && 'preview')}>
      {props.isPreview ? (
        <ProductPreview {...props} />
      ) : (
          <>
            <Link href={productLink}>
              <div className="o-productcard_media">
                {VideoTypes.includes(props.mediaType || '') ? (
                  <Video fill={true} src={props.src} />
                ) : (
                    <Image src={props.src} alt={props.alt} />
                  )}
                <span className="o-productcard_view"><Icon iconName='play' />{props.view}</span>

              </div>
            </Link>
            <button onClick={() => setLike({
              isLike: !like.isLike,
              amount: !like.isLike && typeof props.amount === 'number' ? props.amount + 1 : props.amount,
            })} className="o-productcard_like">{props.totallike}&nbsp;&nbsp;
              <Icon iconName={like.isLike ? 'heartred' : 'heartoutline'} />
            </button>
            <Button handleClick={() => setModalOpenShare(true)} modifiers={['iconshare']}><Icon modifiers={['tiny']} iconName='sharelink' /></Button>
            <Modal modifiers={['price']} isOpen={ModalResell} handleClose={() => setModalResell(false)}>
              <ModalHeader title="Resell this NFT" handleClose={() => setModalResell(false)} />
              <Formik
                initialValues={initialValueData}
                validationSchema={createSchemaData}
                onSubmit={values => {
                  setModalResell(false);
                  setModalOpen(true);
                  dispatch(commonStart({ nextAction: createTokenResellURI.started({ datas: values,uid:props.id, tokenid:props.tokenid }) }));
                }}
                validateOnMount
              >
                {({ values }) => {
                  return (
                    <Form className="p-create_form">
                      <div className="p-create_inputssub">
                        <Fieldrow
                          className="p-create_instantsale"
                          caption={[
                            `You will receive ${
                            values.unit === 0
                              ? amountReceived(values.instantsaleprice).toFixed(2)
                              : amountReceived(values.instantsaleprice)
                            }${Unit[values.unit]}（～$${amountReceivedDollar(values.instantsaleprice)}）`,
                          ]}
                          captionfee
                          isCaptionForInput
                          name="instantsaleprice"
                        >
                          <TextFieldFormik modifiers="price" name="instantsaleprice" placeholder="Enter price for one piece" type="number" />
                          <Select name="unit">
                            {Unit.map((u, idx) => (
                              <option value={idx} key={u}>
                                {u}
                              </option>
                            ))}
                          </Select>
                        </Fieldrow>
                        <ButtonContainer>
                          <Button type="submit" modifiers="resell">
                            Create
                          </Button>
                        </ButtonContainer>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </Modal>
            <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)}>
              <ModalHeader title="FOLLOW STEPS" handleClose={() => setModalOpen(false)} />
              <Steps>
                {CreateSteps.map((step, idx) => {
                  const iconName =
                    currentStep.number > idx
                      ? 'tick-success'
                      : currentStep.number === idx
                      ? currentStep.status
                      : 'tick-step';
                  return <StepItem key={idx} iconName={iconName} {...step} handleClick={step.handleClick} />;
                })}
              </Steps>
              <Text> After processing , popup is automatically closed. Wait for a moment. </Text>
            </Modal>
            <Modal isOpen={modalOpenShare} handleClose={() => setModalOpenShare(false)}>
              <ModalHeader title="Share this NFT" handleClose={() => setModalOpenShare(false)} />
              <Modalshare link={productLink} />
            </Modal>
            <div className="o-productcard_info">
              <div className="o-productcardMyItem_heading">
                <div className="o-productcardMyItem_lead">
                  <Link href={productLink}>
                    <Heading type="h4" title={props.title}>
                      {props.title}
                    </Heading>
                  </Link>
                </div>
              </div>
              <div className="o-productcardMyItem_bmp">
                <div className="o-productcardMyItem_price">
                  <Text modifiers={['black']} inline unit={props.unit}>
                    {props.price}
                  </Text>
                </div>
              </div>
            </div>
            <Tooltip />
          </>
        )}
    </article>
  );
};

const ProductPreview: React.FC<ProductProps> = props => {
  return (
    <>
      <div className="o-productcardMyItem_media">
        {(props.src &&
          (VideoTypes.includes(props.mediaType || '') ? (
            <Video key={props.src} src={props.src} />
          ) : (
              <Image src={props.src} alt={props.alt} />
            ))) || (
            <Text size="14" modifiers="lightgray">
              Media Review22
            </Text>
          )}

      </div>
      <div className="o-productcardMyItem_info">
        <div className="o-productcardMyItem_heading">
          <div className="o-productcardMyItem_lead">
            <Heading type="h4" title={props.title}>
              {props.title || (
                <Text size="14" inline modifiers="lightgray">
                  [Name]
                </Text>
              )}
            </Heading>
            <Text modifiers={['gray', 'bold']} size="12" inline>
              {props.collection}
            </Text>
          </div>
        </div>
        <div className="o-productcardMyItem_bmp">
          <div className="o-productcardMyItem_price">
            <Text modifiers={['blue', 'bold']} inline unit={props.unit}>
              {props.price}
            </Text>
            <Text modifiers={['gray']} size="14" inline>
              1 of 1
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default hot(ProductCardSearch);
