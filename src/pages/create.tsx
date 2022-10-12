import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import { Form, Formik } from 'formik';
import { createSchema, initialValue, Unit } from 'components/pages/create/form';
import axios from 'axios';
import { Link } from 'components/atoms/link';
import { Text } from 'components/atoms/text';
import { Icon } from 'components/atoms/icon';
import { Heading } from 'components/molecules/heading';
import { Fieldrow } from 'components/molecules/fieldrow';
import { TextFieldFormik } from 'components/atoms/textfield';
import { FileInputcreate } from 'components/atoms/fileinputcreate';
import { Textarea } from 'components/atoms/textarea';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'components/atoms/button';
import { Reviewcard } from 'components/organisms/reviewbox';
import { navigate } from 'gatsby-link';
import { Modal } from 'components/organisms/modal';
import { ModalHeader } from 'components/molecules/modalHeader';
import { StepItem } from 'components/molecules/stepItem';
import { Steps } from 'components/organisms/steps';
import { useWallet } from 'use-wallet';
import { useDispatch, useSelector } from 'react-redux';
import { createNFT, createTokenURI, getCreateStore, resetStore, sellCreateNFT, approveCreateNFT } from 'store/createNFT';
import { Select } from 'components/atoms/select';
import { commonStart } from 'store/common';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import { amountReceived, amountDollarBNBrevieved,amountDollarCONTrecieved,amountDollarBUSDrecieved } from 'util/amount';
import { MultiSelect } from 'components/atoms/multiselect';
import { useTranslation } from "react-i18next";
import { Modalconvert } from 'components/organisms/modalconvert';

export const Create: React.FC = () => {
  const wallet = useWallet();
  const [reg, regSet] = useState(Array);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currentStep, tokenURI } = useSelector(getCreateStore);
  const [modalOpenConvert, setModalOpenConvert] = useState(false);
  const CreateSteps = [
    {
      description: 'Call contract method',
      title: 'Upload files and Mint token',
      handleClick: () => {
        dispatch(tokenURI ? createNFT.started({}) : createTokenURI.started({}));
      },
    },
    {
      description: 'Approve perfoming transactions with your wallet',
      title: 'Approve',
      handleClick: () => {
        dispatch(approveCreateNFT.started({}));
      },
    },
    {
      description: 'Sign sell order using your wallet',
      title: 'Sign sell order',
      handleClick: () => {
        dispatch(sellCreateNFT.started({}));
      },
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  
  const Get_categories = async () => {
    const categories = await axios.get(`${process.env.ADDRESS_API}/category`);
    regSet(categories.data.category);
  };

  useEffect (() =>{
    Get_categories()
    },[]
  );
  useEffect(() => {
    currentStep.number === CreateSteps.length &&
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep.number]);

  useEffect(() => {
    if (!modalOpen) {
      dispatch(resetStore());
      currentStep.number === CreateSteps.length && navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, modalOpen]);

  useEffect(() => {
    if (!modalOpenConvert) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenConvert]);
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="p-create">
      <Layout title="Create NFT">
        <Section className="p-create_main">
          <Heading>{t("create.CreateNFT")}</Heading>
          <Formik
            initialValues={initialValue}
            validationSchema={createSchema}
            onSubmit={values => {
              dispatch(commonStart({ nextAction: createTokenURI.started({ data: values }) }));
              setModalOpen(true);
            }}
            validateOnMount
          >
            {({ values, isValid, setTouched, touched }) => {
              const previewSrc = URL && values.file ? URL.createObjectURL(values.file) : '';
              const previewType = values.file && values.file.type;
              const addresspush ={"address": wallet.account}
              return (
                <Form className="p-create_form">
                  <div className="p-create_inputs">
                    <Fieldrow fieldName={t("create.Uploadfile")} name="file">
                      <FileInputcreate
                        name="file"
                        label={t("create.type")}
                        maxsize={t("create.maxsize")}
                        setTouched={() => !touched.file && setTouched({ ...touched, file: true })}
                      />
                    </Fieldrow>
                    <Text> &gt;&nbsp;{t("create.nonPreview")}
                    <Button handleClick={() => setModalOpenConvert(true)}  modifiers="inline">&nbsp;Click!</Button></Text>
                    
                    <Text> &gt;&nbsp;{t("create.over100mb")}
                    <Button handleClick={() => setModalOpenConvert(true)}  modifiers="inline">&nbsp;Click!</Button></Text>
                    <Fieldrow
                      className="p-create_instantsale"
                      fieldName={t("create.Instantsaleprice")}
                      lead={t("create.Enterprice")}
                      caption={[
                        `${t("create.Youwillreceive")} ${amountReceived(values.instantsaleprice)} ${Unit[values.unit]} (～$${
                          values.unit == 0
                            ? amountDollarBNBrevieved(values.instantsaleprice)
                            :
                          values.unit == 1 ?
                          amountDollarBUSDrecieved(values.instantsaleprice)
                            :
                          amountDollarCONTrecieved(values.instantsaleprice)
                          })`,
                      ]}
                      captionfee
                      isCaptionForInput
                      name="instantsaleprice"
                    >
                      <TextFieldFormik name="instantsaleprice" placeholder="Enter price for one piecee" type="number" />
                      <Select name="unit">
                        {Unit.map((u, idx) => (
                          <option value={idx} key={u}>
                            {u}
                          </option>
                        ))}
                      </Select>
                    </Fieldrow>
                    <Fieldrow fieldName={t("create.Category")} name="categories">
                      {typeof window !== `undefined` && (
                        <MultiSelect
                          options={reg}
                          selectedValues={values.categories}
                          name="categories"
                          onBlur={() => !touched.categories && setTouched({ ...touched, categories: true })}
                        />
                      )}
                    </Fieldrow>
                    <Fieldrow  fieldName={t("create.Name")} name="name">
                      <TextFieldFormik  name="name" placeholder={t("create.itemName")} />
                    </Fieldrow>
                    <Fieldrow fieldName={t("create.Description")} isOptional className="p-create_description">
                      <Textarea name="description" placeholder={t("create.itemName")} maxLength={500} />
                    </Fieldrow>
                  </div>
                  <div className="p-create_review">
                    <div className="p-create_reviewcontent">
                      <div className="p-create_reviewbox">
                      <Button modifiers="review">
                      <Icon iconName='playpink' modifiers="mini" />
                        &nbsp;{t("create.Review")}</Button>
                        <Reviewcard
                          title={values.name || ''}
                          price={values.instantsaleprice || 0}
                          unit={Unit[values.unit]}
                          src={previewSrc}
                          mediaType={previewType}
                          alt=""
                          isPreview
                        />
                        </div>
                        <div className="p-create_reviewcheckbox"></div>
                        <FormControlLabel
                        control={
                          <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label={<div>{(t("create.legal"))}<Link href={"/termofservice"}>&nbsp;(Term of service)</Link></div>}
                        labelPlacement="end"
                      />
                      <div className="p-create_reviewcheckbox">
                        <ButtonContainer>
                          <Button type="button" modifiers="bid" anchor={{ href: '/' }}>
                          {t("create.Back")}
                          </Button>
                          <Button type="submit" disabled={!isValid || !state.checkedB} modifiers="buy">
                          {t("create.CreateNFT")}
                          </Button>
                        </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Section>
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
      </Layout>
      <Modal modifiers="noticeCreate" isOpen={modalOpenConvert} handleClose={() => setModalOpenConvert(false)}>
        <ModalHeader title="" handleClose={() => setModalOpenConvert(false)} />
        <Modalconvert />
      </Modal>
    </div>
  );
};

export default hot(Create);
