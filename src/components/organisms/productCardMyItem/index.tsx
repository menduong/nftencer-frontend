import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { Text } from 'components/atoms/text';
import { Image, ImageProps } from 'components/atoms/image';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/atoms/link';
import { useWallet } from 'use-wallet';
import { Modalshare } from 'components/organisms/modalshare';
import { UserType, VideoType, VideoTypes } from 'lib/constants';
import { Button } from 'components/atoms/button';
import { Video } from 'components/molecules/video';
import { Tooltip } from 'components/molecules/tooltip';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import {
  createSchemaData,
  initialValueData,
  UnitSell,
} from "components/pages/create/form";
import { StepItem } from "components/molecules/stepItem";
import { Steps } from "components/organisms/steps";
import { Form, Formik } from "formik";
import { Modal } from "components/organisms/modal";
import { Select } from "components/atoms/select";
import { ModalHeader } from "components/molecules/modalHeader";
import { useDispatch, useSelector } from "react-redux";
import { Fieldrow } from "components/molecules/fieldrow";
import { TextFieldFormik } from "components/atoms/textfield";
import { resetStore } from "store/createNFT";
import { commonStart, tokenID } from "store/common";
import {
  amountReceived,
  amountDollarBNBrevieved,
  amountDollarCONTrecieved,
  amountDollarBUSDrecieved,
} from "util/amount";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  resellNFT,
  getCreateStore,
  ApprovesellNFT,
  CreateNFT,
  CancelNFT1155,
} from "store/sellNFT";
import { NFTContract_StorageAddrress } from "lib/smartContract";
import {
  Select as Selected,
  MenuItem as MenuItemSelect,
  FormControl,
} from "@material-ui/core";

type Modifier = "foo" | "bar";

export type User = { src: string; alt: string; type: UserType; name: string };
export interface ProductProps extends Omit<ImageProps, "modifiers"> {
  modifiers?: Modifier | Modifier[];
  title: string;
  price?: number;
  bidPrice?: string | number;
  userList?: User[];
  amount?: number;
  collection?: string;
  totallike?: any;
  tokenowner?: any;
  optionres?: any;
  isPreview?: boolean;
  view?: number;
  tokenid?: any;
  id?: string | number;
  mediaType?: "gif" | "png" | "image" | VideoType;
  unit?: string;
  url?: any;
  initialItem?: () => void;
}

export const ProductcardMyItem: React.FC<ProductProps> = (props) => {
  const { t } = useTranslation();
  const [like, setLike] = useState({ isLike: false, amount: props.amount });
  const productLink = `/view?id=${props.id}`;
  const dispatch = useDispatch();
  const [ModalOpendelete, setModalOpendelete] = useState(false);
  const serviceFee = Number(process.env.SERVICE_FEE);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const wallet = useWallet();
  const [ModalResell, setModalResell] = useState(false);
  const { currentStep, tokenURI, refresh } = useSelector(getCreateStore);
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [displayResell, setDisplayResell] = useState(false);
  const [unit, setUnit] = useState(0);

  var erc20TestAddress = process.env.NFT_BINANCE_SMART_CHAIN;
  const listBlockchain = [
    { value: erc20TestAddress, label: "Binance Smart Chain" },
    // { value: process.env.NFT_NFTC, label: "NFTCircle" },
  ];
  const [valueBlockChain, setValueBlockChain] = useState(process.env.NFT_BNB);
  const CreateSteps = [
    {
      description: "Call contract method",
      title: "Upload files",
      handleClick: () => {
        dispatch(tokenURI ? CreateNFT.started({}) : CreateNFT.started({}));
      },
    },
    {
      description: "Approve perfoming transactions with your wallet",
      title: "Approve",
      handleClick: () => {
        dispatch(ApprovesellNFT.started({}));
      },
    },
    {
      description: "Sign sell order using your wallet",
      title: "Sign sell order",
      handleClick: () => {
        dispatch(resellNFT.started({}));
      },
    },
  ];
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteItem = async () => {
    await axios.delete(`${process.env.ADDRESS_API}/nft?id=${props.id}`);
    setModalOpendelete(false);
  };
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    currentStep.number === CreateSteps.length &&
      setTimeout(() => {
        setModalOpen(false);
        props.initialItem();
      }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep.number]);
  useEffect(() => {
    if (refresh) {
      props.initialItem();
    }
  }, [refresh]);

  useEffect(() => {
    dispatch(tokenID({ tokenid: props.tokenid || "" }));
    NFTContract_StorageAddrress.initialize(props.account);
  }, []);
  console.log(props);
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

  const ResellNFT = (values, item) => {
    if (item.selectedTabNFT === "Multiple NFT(1155)") {
      const tokenID = parseInt(item.tokenid, 16);
      const objValue = {
        nftAddress: item.token_address,
        tokenId: tokenID,
        tokenPrice: values.instantsaleprice,
        quantity: values.amount,
        tokenPayment: valueBlockChain,
        tokenowner: item.tokenowner,
        account: item.tokenowner,
        description: item.info.description,
        title: item.info.title,
        categories: item.info.categories,
        Royalties: item.info.Royalties,
        upload_file: item.url,
        contract_type: item.contract_type,
      };
      console.log(objValue);
      dispatch(
        commonStart({
          nextAction: CreateNFT.started({ data: objValue }),
        })
      );
    }
  };

  const ChangeUnit = (value) => {
    setUnit(value);
  };
  return (
    <article
      className={mapModifiers(
        "o-productcardMyItem",
        props.modifiers,
        props.isPreview && "preview"
      )}
    >
      {props.isPreview ? (
        <ProductPreview {...props} />
      ) : (
        <>
          {/* <Link href={productLink}> */}
          <div className="o-productcard_media">
            {VideoTypes.includes(props.mediaType || "") ? (
              <Video fill={true} src={props.src} />
            ) : (
              <Image src={props.src} alt={props.alt} />
            )}
            <div className="o-productcard_view">
              <span>
                <Icon modifiers="large32" iconName="multiAvatar" />
                &nbsp;{props?.view > 0 ? props.view + `     view` : ""}
              </span>

              <div
                style={{ visibility: displayResell ? "visible" : "hidden" }}
                className="o-productcard_resell"
              >
                <div className="o-productcard_resell_contain">
                  <div className="o-productcard_resell_Transfer">
                    <Icon modifiers="resell" iconName="transfer" />

                    <button
                      onClick={() => {
                        if (props.selectedTabNFT === "Multiple NFT(1155)") {
                          setModalResell(true);
                        }
                      }}
                    >
                      <Text modifiers="inline">
                        &nbsp;&nbsp;{t("Myitem.Resell")}
                      </Text>
                    </button>
                  </div>
                  <div className="o-productcard_resell_Transfer">
                    <Icon modifiers="resell" iconName="transfer" />
                    <button
                      onClick={() => {
                        if (props.selectedTabNFT === "Multiple NFT(1155)") {
                          dispatch(
                            commonStart({
                              nextAction: CancelNFT1155.started({
                                orderID: objValue,
                              }),
                            })
                          );
                        }
                      }}
                    >
                      <Text modifiers="inline">&nbsp;&nbsp;Cancel Trading</Text>
                    </button>
                  </div>
                  <div className="o-productcard_resell_Transfer">
                    <Icon modifiers="resell" iconName="transfer" />
                    <Text modifiers="inline">&nbsp;&nbsp;Transfer NFT</Text>
                  </div>
                  <div className="o-productcard_resell_Delete">
                    <Icon modifiers="resell" iconName="bin" />
                    <Text modifiers="inline">&nbsp;&nbsp;&nbsp;Delete NFT</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* </Link> */}

          {/* <button onClick={() => setLike({
              isLike: !like.isLike,
              amount: !like.isLike && typeof props.amount === 'number' ? props.amount + 1 : props.amount,
            })} className="o-productcard_like">{props.totallike}&nbsp;&nbsp;
              <Icon iconName={like.isLike ? 'heartred' : 'heartoutline'} />
            </button> */}
          <Button
            handleClick={() => setDisplayResell(!displayResell)}
            modifiers={["iconshare"]}
          >
            <Icon modifiers={["large32"]} iconName="threedots" />
          </Button>

          <Button
            handleClick={() => setDisplayResell(!displayResell)}
            modifiers={["gallery"]}
          >
            <Icon modifiers={["small"]} iconName="bag" />
            {props.amount}
          </Button>
          <Modal
            modifiers={["buy"]}
            isOpen={ModalResell}
            handleClose={() => setModalResell(false)}
          >
            <ModalHeader
              title={t("create.ResellTitle")}
              handleClose={() => setModalResell(false)}
            />
            <Formik
              initialValues={initialValueData}
              validationSchema={createSchemaData}
              onSubmit={(values) => {
                setModalResell(false);
                setModalOpen(true);
                ResellNFT(values, props);
                // dispatch(
                //   commonStart({
                //     nextAction: createTokenResellURI.started({
                //       datas: values,
                //       uid: props.id,
                //       tokenid: props.tokenid,
                //     }),
                //   })
                // );
              }}
              validateOnMount
            >
              {({ values }) => {
                return (
                  <Form className="p-create_form">
                    <div className="p-create_inputssub">
                      {UnitSell.map((u, idx) => (
                        <Button
                          modifiers="inlinType"
                          style={unit === idx ? "black" : ""}
                          handleClick={() => {
                            ChangeUnit(idx);
                            if (idx === 0) {
                              setValueBlockChain(process.env.NFT_BNB);
                            }
                            if (idx === 1) {
                              setValueBlockChain(process.env.NFT_BUSD);
                            }
                            if (idx === 2) {
                              setValueBlockChain(process.env.NFT_NFTC);
                            }
                          }}
                        >
                          {u}
                        </Button>
                      ))}
                      <Fieldrow
                        className="p-create_instantsale"
                        fieldName="Enter the price for which the item will be instantly sold"
                        // lead={t("create.Enterprice")}
                        caption={[
                          `${t("create.Youwillreceive")} ${amountReceived(
                            values.instantsaleprice
                          )} ${UnitSell[unit]} (～$${
                            unit == 0
                              ? amountDollarBNBrevieved(values.instantsaleprice)
                              : unit == 1
                              ? amountDollarBUSDrecieved(
                                  values.instantsaleprice
                                )
                              : amountDollarCONTrecieved(
                                  values.instantsaleprice
                                )
                          })`,
                        ]}
                        captionfee
                        isCaptionForInput
                        name="instantsaleprice"
                      >
                        <TextFieldFormik
                          name="instantsaleprice"
                          placeholder="Enter price for one piecee"
                          type="number"
                        />
                      </Fieldrow>
                      <Fieldrow fieldName={t("create.Blockchain")}>
                        <FormControl
                          style={{
                            width: "100%",
                          }}
                        >
                          <Selected
                            name="blockchain"
                            defaultValue={listBlockchain[0].value}
                          >
                            {listBlockchain.map((x) => (
                              <MenuItemSelect value={x.value}>
                                <Icon modifiers="small" iconName="binance" />
                                &nbsp;{x.label}
                              </MenuItemSelect>
                            ))}
                          </Selected>
                        </FormControl>
                      </Fieldrow>
                      <Fieldrow fieldName={t("create.Amount")} name="amount">
                        <TextFieldFormik
                          name="amount"
                          placeholder={t("create.Amount")}
                          type="number"
                        />
                        <span style={{ marginTop: 10 }}>/{props.amount}</span>
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
          <Modal
            isOpen={modalOpen}
            modifiers="step"
            handleClose={() => setModalOpen(false)}
          >
            <ModalHeader
              title="FOLLOW STEPS"
              handleClose={() => setModalOpen(false)}
            />
            <Steps>
              {CreateSteps.map((step, idx) => {
                const iconName =
                  currentStep.number > idx
                    ? "tick-success"
                    : currentStep.number === idx
                    ? currentStep.status
                    : "tick-step";
                return (
                  <StepItem
                    key={idx}
                    iconName={iconName}
                    {...step}
                    handleClick={step.handleClick}
                  />
                );
              })}
            </Steps>
          </Modal>
          <Modal
            modifiers={["price"]}
            isOpen={ModalOpendelete}
            handleClose={() => setModalOpendelete(false)}
          >
            <ModalHeader
              title={t("View.DeleteNotice")}
              handleClose={() => setModalOpendelete(false)}
            />
            <ButtonContainer>
              <Button handleClick={() => deleteItem()} modifiers="resell">
                {t("View.Yes")}
              </Button>
              <Button type="submit" modifiers="resell">
                {t("View.No")}
              </Button>
            </ButtonContainer>
          </Modal>
          {/* <Modal isOpen={modalOpenShare} handleClose={() => setModalOpenShare(false)}>
              <ModalHeader title="Share this NFT" handleClose={() => setModalOpenShare(false)} />
              <Modalshare link={productLink} />
            </Modal> */}
          {/* <div className="o-productcard_info">
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
                <div>
                <ul className="o-productcardMyItem_userlist">
                {props.optionres.optionres == 'creator' && (
                <>
                 
                    <div>
                    <button className="threedots" onClick={handleClick}><Icon modifiers={['large']} iconName="threedots" /></button>
                  
                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      
                      { props.tokenowner == wallet.account && (
                      <MenuItem className="share-button" onClick={() => setModalOpendelete(true)}> <Typography variant="inherit"> <Icon iconName="delete" modifiers={['colorDelete']} />&nbsp;&nbsp; {t("Myitem.Delete")}</Typography></MenuItem>
                      )}
                    </Menu>
                  </div>
                  </>
      )}
                  { props.optionres.optionres != 'sold' && props.optionres.optionres != 'creator' && (
                <>

                  <div>
                    { props.optionres.optionres === 'bought' && (
                    <button onClick={() => setModalResell(true)} className="o-productcardMyItem_resell">{t("Myitem.Resell")}</button>
                    )}
                    </div>
                    <div>
                    <button className="threedots" onClick={handleClick}><Icon modifiers={['large']} iconName="threedots" /></button>
                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      { props.tokenowner == wallet.account && (
                      <MenuItem className="share-button" onClick={() => setModalOpendelete(true)}> <Typography variant="inherit"> <Icon iconName="delete" modifiers={['colorDelete']} />&nbsp;&nbsp; {t("Myitem.Delete")}</Typography></MenuItem>
                      )}
                    </Menu>
                  </div>
                  </>
      )}
                </ul>
                </div>
              </div>
            </div> */}
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

export default hot(ProductcardMyItem);
