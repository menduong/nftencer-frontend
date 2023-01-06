import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import { Form, Formik } from 'formik';
import {
  createSchema,
  initialValue,
  Unit,
  createSchema1155,
} from "components/pages/create/form";
import axios from "axios";
import { Link } from "components/atoms/link";
import { Text } from "components/atoms/text";
import { Icon } from "components/atoms/icon";
import { Heading } from "components/molecules/heading";
import { Fieldrow } from "components/molecules/fieldrow";
import { TextFieldFormik } from "components/atoms/textfield";
import { FileInputcreate } from "components/atoms/fileinputcreate";
import { Textarea } from "components/atoms/textarea";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "components/atoms/button";
import { Reviewcard } from "components/organisms/reviewbox";
import { navigate } from "gatsby-link";
import { Modal } from "components/organisms/modal";
import { ModalHeader } from "components/molecules/modalHeader";
import { StepItem } from "components/molecules/stepItem";
import { Steps } from "components/organisms/steps";
import { useWallet } from "use-wallet";
import { useDispatch, useSelector } from "react-redux";
import {
  createNFT,
  createTokenURI,
  getCreateStore,
  resetStore,
  sellCreateNFT,
  approveCreateNFT,
  createTokenURI1155,
  createNFT1155,
  createURI1155,
} from "store/createNFT";
import { Select } from "components/atoms/select";
import { commonStart } from "store/common";
import { ButtonContainer } from "components/molecules/buttonContainer";
import {
  amountReceived,
  amountDollarBNBrevieved,
  amountDollarCONTrecieved,
  amountDollarBUSDrecieved,
} from "util/amount";
import { MultiSelect } from "components/atoms/multiselect";
import { useTranslation } from "react-i18next";
import { Modalconvert } from "components/organisms/modalconvert";
import Grid from "@material-ui/core/Grid";
import { Select as Selected, MenuItem, FormControl } from "@material-ui/core";
import { Col, Row } from "reactstrap";
import { loadJsonFile } from "load-json-file";

export const Create: React.FC = () => {
  const wallet = useWallet();
  const [reg, regSet] = useState(Array);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { currentStep, tokenURI } = useSelector(getCreateStore);
  const [modalOpenConvert, setModalOpenConvert] = useState(false);
  const [listBlockChain, setListBlockChain] = useState([]);
  const [changefile, onchangefile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const CreateSteps = !trigger
    ? [
        {
          description: "Call contract method",
          title: "Upload files and Mint token",
          handleClick: () => {
            dispatch(
              tokenURI ? createNFT.started({}) : createTokenURI.started({})
            );
          },
        },
        {
          description: "Approve perfoming transactions with your wallet",
          title: "Approve",
          handleClick: () => {
            dispatch(approveCreateNFT.started({}));
          },
        },
        {
          description: "Sign sell order using your wallet",
          title: "Sign sell order",
          handleClick: () => {
            dispatch(sellCreateNFT.started({}));
          },
        },
      ]
    : [
        {
          description: "Call contract method",
          title: "Get Token contract method",
          handleClick: () => {
            dispatch(createTokenURI1155.started({}));
          },
        },
        {
          description: "Upload files token",
          title: "Upload files token",
          handleClick: () => {
            dispatch(createURI1155.started({}));
          },
        },
        {
          description: "Mint contract",
          title: " Mint contract",
          handleClick: () => {
            dispatch(createNFT1155.started({}));
          },
        },
      ];

  const Get_categories = async () => {
    const categories = await axios.get(`${process.env.ADDRESS_API}/category`);

    regSet(categories.data.category);
  };
  const Get_BlockChain = async () => {
    setListBlockChain([{ value: "BNB", label: "Binance Smart Chain" }]);
  };

  useEffect(() => {
    Get_categories();
    Get_BlockChain();
  }, []);
  useEffect(() => {
    console.log(currentStep);
    currentStep.number === CreateSteps.length &&
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep.number]);

  useEffect(() => {
    if (!modalOpen) {
      dispatch(resetStore());
      currentStep.number === CreateSteps.length && navigate("/");
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
          {/* <Heading>{t("create.CreateNFT")}</Heading> */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
              fontSize: "40px",
              marginTop: "20px",
            }}
          >
            Create collectible
          </div>
          <Formik
            initialValues={initialValue}
            validationSchema={!trigger ? createSchema : createSchema1155}
            onSubmit={(values) => {
              if (trigger) {
                dispatch(
                  commonStart({
                    nextAction: createTokenURI1155.started({ data: values }),
                  })
                ); ///// 1155
              } else {
                dispatch(
                  commonStart({
                    nextAction: createTokenURI.started({ data: values }),
                  })
                ); ////751
              }
              setModalOpen(true);
            }}
            validateOnMount
          >
            {({ values, isValid, setTouched, touched }) => {
              const previewSrc =
                URL && values.file ? URL.createObjectURL(values.file) : "";
              const previewType = values.file && values.file.type;
              const addresspush = { address: wallet.account };
              return (
                <Form className="p-create_form">
                  <Grid container spacing={0}>
                    <Grid item xs={6}>
                      <Fieldrow name="file">
                        <button
                          className="p-create_inputForm"
                          onClick={() => setTrigger(false)}
                          style={{
                            background:
                              trigger === false
                                ? "linear-gradient(122.01deg, #A7D545 -9.61%, rgba(167, 213, 69, 0.27) -9.6%, #FFD5D5 73.45%)"
                                : "",
                            width: "90%",
                          }}
                        >
                          <FileInputcreate
                            head="Single NFT (721)"
                            name="file"
                            label={t("create.type")}
                            maxsize={t("create.maxsize")}
                            setTouched={() => {
                              setTrigger(false);
                              !touched.file &&
                                setTouched({ ...touched, file: true });
                            }}
                          />
                        </button>
                      </Fieldrow>
                    </Grid>
                    <Grid item xs={6}>
                      <Fieldrow name="file">
                        <button
                          disabled
                          className="p-create_inputForm"
                          style={{
                            background:
                              trigger === true
                                ? "linear-gradient(122.01deg, #A7D545 -9.61%, rgba(167, 213, 69, 0.27) -9.6%, #FFD5D5 73.45%)"
                                : "",
                            opacity: "0.6",
                            width: "90%",
                          }}
                          onClick={() => setTrigger(true)}
                        >
                          <FileInputcreate
                            head="Multiple NFT (1155)"
                            name="file"
                            //CommingSoon
                            label={t("create.type")}
                            maxsize={t("create.maxsize")}
                            setTouched={() => {
                              setTrigger(true);
                              !touched.file &&
                                setTouched({ ...touched, file: true });
                            }}
                          />
                        </button>
                      </Fieldrow>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="p-create_inputs">
                        {/* <Text> &gt;&nbsp;{t("create.nonPreview")}
                    <Button handleClick={() => setModalOpenConvert(true)}  modifiers="inline">&nbsp;Click!</Button></Text>
                    
                    <Text> &gt;&nbsp;{t("create.over100mb")}
                    <Button handleClick={() => setModalOpenConvert(true)}  modifiers="inline">&nbsp;Click!</Button></Text> */}
                        <Fieldrow
                          className="p-create_instantsale"
                          fieldName="Enter the price for which the item will be instantly sold"
                          // lead={t("create.Enterprice")}
                          caption={[
                            `${t("create.Youwillreceive")} ${amountReceived(
                              values.instantsaleprice
                            )} ${Unit[values.unit]} (～$${
                              values.unit == 0
                                ? amountDollarBNBrevieved(
                                    values.instantsaleprice
                                  )
                                : values.unit == 1
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
                          <Select name="unit">
                            {Unit.map((u, idx) => (
                              <option value={idx} key={u}>
                                {u}
                              </option>
                            ))}
                          </Select>
                        </Fieldrow>

                        <Fieldrow fieldName={t("create.Name")} name="name">
                          <TextFieldFormik
                            name="name"
                            placeholder={t("create.itemName")}
                          />
                        </Fieldrow>
                        <Fieldrow
                          fieldName={t("create.Description")}
                          isOptional
                          className="p-create_description"
                        >
                          <Textarea
                            name="description"
                            placeholder={t("create.itemName")}
                            maxLength={500}
                          />
                        </Fieldrow>

                        {trigger && (
                          <>
                            <Fieldrow fieldName={t("create.Blockchain")}>
                              <FormControl
                                style={{
                                  width: "100%",
                                }}
                              >
                                <Selected name="blockchain">
                                  {listBlockChain.map((x) => (
                                    <MenuItem value={x.value}>
                                      <Icon
                                        modifiers="small"
                                        iconName="binance"
                                      />
                                      &nbsp;{x.label}
                                    </MenuItem>
                                  ))}
                                </Selected>
                              </FormControl>
                            </Fieldrow>
                            <Row>
                              <Col style={{ width: "45%" }}>
                                <Fieldrow
                                  fieldName={t("create.Numbercopy")}
                                  name="numbercopy"
                                >
                                  <TextFieldFormik
                                    name="numbercopy"
                                    placeholder={t("create.Numbercopy")}
                                  />
                                </Fieldrow>
                              </Col>
                              <Col
                                xs={6}
                                style={{
                                  width: "45%",
                                  float: "right",
                                  marginTop: -123,
                                }}
                              >
                                <Fieldrow
                                  fieldName={t("create.Royalties")}
                                  name="Royalties"
                                >
                                  <TextFieldFormik
                                    name="Royalties"
                                    placeholder="Please input Royalties 1-50"
                                  />
                                </Fieldrow>
                              </Col>
                            </Row>
                          </>
                        )}

                        <Fieldrow
                          fieldName={t("create.Category")}
                          name="categories"
                        >
                          {typeof window !== `undefined` && (
                            <MultiSelect
                              options={reg}
                              selectedValues={values.categories}
                              name="categories"
                              onBlur={() =>
                                !touched.categories &&
                                setTouched({ ...touched, categories: true })
                              }
                            />
                          )}
                        </Fieldrow>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="p-create_review">
                        <div className="p-create_reviewcontent">
                          <div className="p-create_reviewbox">
                            {/* <Button modifiers="review">
                      <Icon iconName='playpink' modifiers="mini" />
                        &nbsp;{t("create.Review")}</Button> */}
                            <Reviewcard
                              title={values.name || ""}
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
                            label={
                              <div>
                                {t("create.legal")}
                                <Link href={"/termofservice"}>
                                  &nbsp;(Term of service)
                                </Link>
                              </div>
                            }
                            labelPlacement="end"
                          />
                          <div className="p-create_reviewcheckbox">
                            <ButtonContainer>
                              <Button
                                type="button"
                                modifiers="bid"
                                anchor={{ href: "/" }}
                              >
                                {t("create.Back")}
                              </Button>
                              <Button
                                type="submit"
                                disabled={!isValid || !state.checkedB}
                                modifiers="buy"
                              >
                                {t("create.CreateNFT")}
                              </Button>
                            </ButtonContainer>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Section>
        <Modal
          modifiers="step"
          isOpen={modalOpen}
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
          {/* <Text> After processing , popup is automatically closed. Wait for a moment. </Text> */}
        </Modal>
      </Layout>
      <Modal
        modifiers="noticeCreate"
        isOpen={modalOpenConvert}
        handleClose={() => setModalOpenConvert(false)}
      >
        <ModalHeader title="" handleClose={() => setModalOpenConvert(false)} />
        <Modalconvert />
      </Modal>
    </div>
  );
};

export default hot(Create);
