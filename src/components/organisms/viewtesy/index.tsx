import { Button } from 'components/atoms/button';
import { Icon } from 'components/atoms/icon';
import classNames from 'classnames/bind';
import { connectWallet } from 'lib/apiCommon';
import { Image, ImageProps } from 'components/atoms/image';
import { Link } from 'components/atoms/link';
import { Spinner } from 'components/atoms/spinner';
import { Tag } from 'components/atoms/tag';
import { Text } from 'components/atoms/text';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useWallet } from 'use-wallet';
import { UserAvatar } from 'components/molecules/userAvatar';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import Typography from '@material-ui/core/Typography';
import { resetStore } from 'store/createNFT';
import { Modalshare } from 'components/organisms/modalshare';
import { Heading } from 'components/molecules/heading';
import { ModalHeader } from 'components/molecules/modalHeader';
import { TabButton } from 'components/molecules/tabButton';
import { TabList } from 'components/molecules/tabList';
import { Toast } from 'components/molecules/toast';
import { Video } from 'components/molecules/video';
import { Modal } from 'components/organisms/modal';
import Divider from '@material-ui/core/Divider';
import { Section } from 'components/organisms/section';
import { ViewTabs, ViewTabType } from 'components/pages/view/constants';
import FormLabel from '@material-ui/core/FormLabel';
import { navigate } from 'gatsby';
import { MiddlewareMethods } from 'lib/smartContract';
import React, { useEffect, useMemo, useState,useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { approveBUSD, approveCONT, closeModal, getBuyStore, getProduct, purchase,modalpurchase } from 'store/buyNFT';
import { commonStart } from 'store/common';
import { getBalanceStore } from 'store/getBalance';
import { amountDollarBNB,amountDollarBUSD, amountDollarCONT } from 'util/amount';
import { CardType, formatBalance } from 'util/formatBalance';
import { getMediaType } from 'util/getMediaType';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive'
import { useEthers } from "@usedapp/core";
import Tooltip from '@mui/material/Tooltip';
import { UserType, VideoType } from 'lib/constants';
import { useTranslation } from "react-i18next";
import { ApproveBuyNFT } from "store/buyNFT";
import { StepItem } from "components/molecules/stepItem";
import { Steps } from "components/organisms/steps";
import { NFTContract_StorageAddrress } from "lib/smartContract";

type Modifier = "foo" | "bar";
const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      fontSize: "18px",
    },
    formControl: {
      margin: theme.spacing(3),
      fontSize: "18px",
    },
    formControlLabel: {
      color: "#797979",
      marginTop: "5px!important",
      fontSize: "18px",
      "& label": { fontSize: "18px" },
    },
    font: {
      fontSize: "18px",
    },
    checkout: {
      marginLeft: "20px",
      marginRight: "auto",
    },
    checkboxStyle: {
      width: "10px",
      height: "10px",
      color: "pink",
      borderRadius: "5px",
    },
    textFieldinput: {
      boxShadow: "0px 0px 30px 0px #F960C833",
    },
    subtext: {
      display: "none!important",
    },
    notchedOutline: {
      borderWidth: "1px",
      borderRadius: "10px",
      borderColor: "#D565C3!important",
    },
    checkbox: {
      marginLeft: "10px",
      marginBottom: "30px",
    },
    saleprice: {
      paddingLeft: "10px!important",
    },
  })
);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    root1: {
      "& > *": {
        margin: theme.spacing(2),
        width: 400,
        marginBottom: 10,
      },
    },
    textField: {
      backgroundColor: "#E9E9E9",
    },
    font_basic: {
      "& > *": {
        fontFamily: "Cabin",
        fontStyle: "normal",
        fontWeight: "bold",
      },
    },
    saleprice: {
      paddingLeft: "10px",
    },
    font: {
      "& > *": {
        fontFamily: "Cabin",
        fontStyle: "normal",
        fontWeight: "normal",
        color: "#797979",
        marginBottom: 30,
      },
    },
    buttonUp: {
      "& > *": {
        backgroundColor:
          "linear-gradient(100.93deg, #D565C3 -13.26%, #ABD3EA 101.12%)",
      },
    },
  })
);
export type User = { src: string; alt: string; type: UserType; name: string };
export interface viewtesyProps extends Omit<ImageProps, "modifiers"> {
  modifiers?: Modifier | Modifier[];
  title: string;
  price?: number;
  status?: any;
  categories?: any;
  creator_address?: string;
  instant_sale_price?: any;
  quote_token?: any;
  bidPrice?: string | number;
  userList?: User[];
  amount?: number;
  collection?: string;
  description?: any;
  isPreview?: boolean;
  src: any;
  id?: string | number;
  mediaType?: "gif" | "png" | "image" | VideoType;
  unit?: string;
  address?: string;
  totallike?: any;
  token_id?: any;
  userid?: string;
  token_owner?: any;
  unlock_once_purchased?: any;
  view?: number;
  creator?: string;
  creator_acc?: string;
  liked?: boolean;
  owner: string;
  owneraddress: string;
  ownerAvatar: string | any;
  active?: boolean;
  userName?: any;
}

export const Viewtesy: React.FC<viewtesyProps> = (props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 840px)",
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isloading, setisLoading] = useState(true);
  const ref = useRef(null);
  const [res, resSet] = useState<any>(Array);
  const account = useEthers();
  const wallet = useWallet();
  useEffect(() => {
    props.id
      ? dispatch(getProduct.started({ id: props.id, address: account.account }))
      : typeof window !== "undefined" && navigate("/");
    NFTContract_StorageAddrress.initialize(wallet.account);
  }, [dispatch, props.userid]);

  const [modalOpenConnect, setModalOpenConnect] = useState(false);
  const {
    pricePur,
    tokenid,
    idCheck,
    isSuccess,
    product,
    isGetDone,
    quote_token,
    active,
    tokenOwner,
    isCancel,
    currentStep,
  } = useSelector(getBuyStore);
  const balanceStore = useSelector(getBalanceStore);
  const bnbBalance = Number(wallet.balance);
  

  const erc_type = props.erc_type;
  const [modalOpenBuy, setModalOpenBuy] = useState(false);

  const CreateSteps = [
    {
      description: "Approve perfoming transactions with your wallet",
      title: "Approve",
      handleClick: () => {
        dispatch(
          ApproveBuyNFT.started({
            idNFT: props.order_id,
            account: wallet.account,
            middlewareMethods: middlewareMethods,
            erc_type: erc_type,
            price: props.price,
          })
        );
      },
    },
    {
      description: "Sign Buy order using your wallet",
      title: "Sign Buy order",
      handleClick: () => {
        dispatch(
          purchase.started({
            idNFT: tokenid,
            bnbPrice: props.quote_token === "BNB" ? pricePur : undefined,
            middlewareMethods: middlewareMethods,
            erc_type: erc_type,
          })
        );
      },
    },
  ];
  useEffect(() => {
    console.log("number", currentStep.number);
    currentStep.number === CreateSteps.length &&
      setTimeout(() => {
        setModalOpenBuy(false);
        dispatch(closeModal());
      }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep.number]);
  const balance = props
    ? typeof balanceStore[quote_token] === "number"
      ? balanceStore[quote_token]
      : bnbBalance
    : 0;
  console.log(process.env.NFT_BUY_ADDRESS_1155);
  const productPrice = pricePur;
  const totalPrice = Number(productPrice);
  const [selectedTab, setSelectedTab] = useState<ViewTabType>("Info");
  const [like, setLike] = useState({
    isLike: props.liked ? true : false,
    amount: 0,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { t } = useTranslation();
  const [modalmobile, setmodalmobile] = useState(false);
  const [reportModal, setreportModal] = useState(false);
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [ModalOpenreport, setModalOpenreport] = useState(false);
  const [datas, dataSet] = useState<any>(Array);
  const textInput = useRef<HTMLInputElement>(null);
  const classes = useStyles1();
  const [state, setState] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { first, second, third, fourth, fifth, sixth } = state;
  const error =
    [first, second, third, fourth, fifth, sixth].filter((v) => v).length > 1;
  const middlewareMethods = useMemo(
    (): MiddlewareMethods => ({
      sending: () => setIsProcessing(true),
      // sending: () => setIsProcessing(false),
      transactionHash: () => setIsProcessing(true),
      receipt: () => setIsProcessing(false),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product?.quote_token]
  );
  const deletecomment = async (param: string, value: string) => {
    try {
      const deletecomment = await axios.delete(
        `${process.env.ADDRESS_API}/comment?id=${param}&account_id=${props.userid}`
      );
      setisLoading(!isloading);
    } catch {
      console.log("Cannot delete comment");
    }
  };
  const postcomment = async () => {
    if (props.id) {
      try {
        const commentpost = await axios.post(
          `${process.env.ADDRESS_API}/comment?collectible_id=${props.id}&account_id=${wallet.account}&content=${value.name}`
        );

        textInput.current.value = "";
        setLoading(!loading);
      } catch {
        console.log("Error loaidng rejected data");
      }
    }
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const onKeyDown = (event) => {
    if (event.code == "Enter") {
      postcomment();
    } else {
      console.log("failll");
    }
  };
  const getcomment = async () => {
    const query = window.location.href;
    const result = query?.substring(query.indexOf("="));
    try {
      const commentget = await axios.get(
        `${process.env.ADDRESS_API}/comment/paging?collectible_id=${props.id}&address=${props.userid}`
      );
      // const viewer =     await axios.post(`${process.env.ADDRESS_API}/view?collectible_id=${props.id}`)

      const data = commentget.data.comments;
      dataSet(data);
    } catch {
      console.log("can not get comment");
    }
  };
  const gethistory = async () => {
    try {
      const historyget = await axios.get(
        `${process.env.ADDRESS_API}/history?collectible_id=${props.id}`
      );
      const data = historyget.data.history;
      data.sort(
        (d1, d2) =>
          new Date(d2.created_at).getTime() - new Date(d1.created_at).getTime()
      );
      resSet(data);
    } catch {
      console.log("Cannot get history");
    }
  };
  const reportitem = async () => {
    const query = window.location.href;
    const result = query?.substring(query.indexOf("="));
    if (state.first == true) {
      const reportItem1 = await axios.post(
        `${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=1`
      );
    } else if (state.second == true) {
      const reportItem2 = await axios.post(
        `${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=2`
      );
    } else if (state.third == true) {
      const reportItem3 = await axios.post(
        `${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=3`
      );
    } else if (state.fourth == true) {
      const reportItem4 = await axios.post(
        `${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=4`
      );
    } else if (state.fifth == true) {
      const reportItem5 = await axios.post(
        `${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=5`
      );
    } else if (state.sixth == true) {
      const reportItem6 = await axios.post(
        `${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=6`
      );
    } else {
      console.log("Error Report Item");
    }
    setModalOpenreport(false);
    setreportModal(true);
  };

  const numberLike = async () => {
    if (!like.isLike) {
      const liked = await axios.post(
        `${process.env.ADDRESS_API}/nft/like?collectible_id=${props.id}&account_id=${wallet.account}&action=1`
      );
      setLike({
        isLike: !like.isLike,
        amount:
          !like.isLike &&
          typeof like.amount === "number" &&
          props?.liked === false
            ? 1
            : 0,
      });
    } else {
      const unliked = await axios.post(
        `${process.env.ADDRESS_API}/nft/like?collectible_id=${props.id}&account_id=${wallet.account}&action=0`
      );
      setLike({
        isLike: !like.isLike,
        amount:
          like.isLike && typeof like.amount === "number" && props?.liked
            ? -1
            : 0,
      });
    }
  };

  useEffect(() => {
    if (!modalOpenConnect) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }
  }, [dispatch, modalOpenConnect]);

  const [stateB, setStateB] = React.useState({
    checkedB: false,
  });
  const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateB({ ...stateB, [event.target.name]: event.target.checked });
  };
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [message, setMessageForm] = useState("");
  const refs = useRef(null);
  const [value, setValues] = React.useState({
    name: "",
  });
  const handleChangeForm = (name) => (event) => {
    setValues({ ...value, [name]: event.target.value });
  };

  useEffect(() => {
    getcomment();
    gethistory();
  }, [loading, isloading, dataSet]);

  useEffect(() => {
    if (!modalOpenShare) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }
  }, [dispatch, modalOpenShare]);

  useEffect(() => {
    if (!modalOpen) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }
  }, [dispatch, modalOpen]);

  const productLink = `/view?id=${props?.id}`;
  console.log(props);
  return (
    <div className="p-view">
      <Section className="p-view_main">
        {isGetDone ? (
          props && props.status === 0 ? (
            <>
              <div className="p-view_control">
                <div className="p-view_numberView">
                  <Icon modifiers="Avatar" iconName="multiAvatar" />
                  <span>&nbsp;&nbsp;{props.view}</span>
                </div>
              </div>
              <article className="p-view_product">
                <Grid container spacing={1} justifyContent="space-around">
                  <Grid item xs={6}>
                    <div className="p-view_item">
                      <div className="p-view_media">
                        {getMediaType(props.src) === "image" ? (
                          <Image src={props.src} alt="" modifiers="big" />
                        ) : (
                          <Video
                            censored={props.status}
                            colID={props.id}
                            view={true}
                            src={props.src}
                          />
                        )}
                      </div>
                      {/* 
                    <div className="p-view_information">
                      {(wallet?.status == "disconnected" || wallet?.status == "error" ) ? (
                      <button
                      onClick={() => setModalOpenConnect(true)
                        }
                        className="o-productcard_likeitem">{props.totallike + like.amount}&nbsp;&nbsp;
                        <Icon iconName={like.isLike ? 'heartred' : 'heartoutline'} />
                      </button>):(
                        <button
                          onClick={() => numberLike()
                        }
                        className="o-productcard_likeitem">{props.totallike + like.amount}&nbsp;&nbsp;
                        <Icon iconName={like.isLike ? 'heartred' : 'heartoutline'} />
                      </button>
                      )}
                      <Button handleClick={() => setModalOpenShare(true)} modifiers={['sharemain']}><Icon modifiers={['tiny']} iconName='sharelink' /></Button>
                      <div className="p-view_sharemobile">
                        <button onClick={() => setModalOpenreport(true)} className="p-view_threedots" ><Icon modifiers={['large']} iconName="threedots" /></button>
                      </div>
                      <Link href={"/view?id="+ props.id}>
                      <Button handleClick={() => setModalOpenShare(true)} modifiers={['sharemain']}><Icon modifiers={['ioma']} iconName='ioma' /></Button>
                      </Link>
                    </div> */}
                      <div className="p-view_share">
                        {wallet?.status == "disconnected" ||
                        wallet?.status == "error" ? (
                          <Button
                            modifiers="reportExplore"
                            handleClick={() => setModalOpenConnect(true)}
                          >
                            ! {t("Myitem.Report")}
                          </Button>
                        ) : (
                          <Button
                            modifiers="reportExplore"
                            handleClick={() => setModalOpenreport(true)}
                          >
                            ! {t("Myitem.Report")}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={5}>
                    <div className="p-view_info">
                      <div className="p-view_detailheading">
                        <div
                          style={{
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                          }}
                        >
                          <UserAvatar
                            userAddress={props.creator_address}
                            src={props.creator_acc}
                            alt=""
                            hasTick={false}
                            modifiers="mid"
                          />

                          {props.userName ? (
                            <Text inline size="14" modifiers="bold">
                              <Link
                                href={"/userpage?id=" + props.creator_address}
                              >
                                &nbsp;&nbsp;{props.userName}
                              </Link>
                            </Text>
                          ) : (
                            <Text inline size="14" modifiers="bold">
                              <Link
                                href={"/userpage?id=" + props.creator_address}
                              >
                                &nbsp;&nbsp;{props.creator_address}
                              </Link>
                            </Text>
                          )}
                        </div>
                        <Tooltip
                          key={props.title}
                          title={props.title}
                          placement="top-start"
                        >
                          <Heading
                            modifiers="title"
                            type="h2"
                            title={props.title}
                          >
                            {props.title}
                          </Heading>
                        </Tooltip>
                        <div className="">
                          <div className="p-view_lead">
                            <Text modifiers="gray">{props.description}</Text>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          margin: "10px 0 5px 0",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <>
                          {wallet?.status == "disconnected" ||
                          wallet?.status == "error" ? (
                            <button
                              onClick={() => setModalOpenConnect(true)}
                              className="o-productcard_likeitem"
                            >
                              <Icon
                                iconName={
                                  like.isLike ? "heartred" : "heartoutline"
                                }
                              />
                            </button>
                          ) : (
                            <button
                              onClick={() => numberLike()}
                              className="o-productcard_likeitem"
                            >
                              <Icon
                                iconName={
                                  like.isLike ? "heartred" : "heartoutline"
                                }
                              />
                            </button>
                          )}
                        </>
                        <>
                          {/* <Link href={"/view?id="+ props.id}> */}
                          <button className="o-productcard_likeitem">
                            <Icon iconName="messages" />
                          </button>
                          {/* </Link> */}
                        </>
                        <>
                          <Button
                            handleClick={() => setModalOpenShare(true)}
                            modifiers={["sharemain"]}
                          >
                            <Icon modifiers={["tiny"]} iconName="sharelink" />
                          </Button>
                        </>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <span>
                          {props.totallike + like.amount}&nbsp;&nbsp;Like
                        </span>
                        <span>Comment</span>
                        <span>Share</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          padding: "40px",
                          marginBottom: "30px",
                        }}
                      >
                        <Button modifiers="history">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                            }}
                          >
                            <Icon iconName="history" />
                            <p>History</p>
                          </div>
                        </Button>
                      </div>
                      {/* <div className="p-view_detailheading">
                    <Tooltip key={props.title} title={props.title} placement="top-start">
                      <Heading modifiers="title" type="h1" title={props.title}>
                        {props.title}
                      </Heading>
                      </Tooltip>
                    </div>
                    <div className="p-view_detail">
                      <div className="p-view_lead">
                        <Text modifiers="gray">{props.description}</Text>
                      </div>
                      <div className="p-view_tags">
                        {props.categories.map((cate) => (
                          <Tag key={cate.id}>{cate.name.charAt(0).toUpperCase() + cate.name.slice(1)}</Tag>
                        ))}
                      </div>
                    </div>*/}

                      <div className="p-view_buydialog">
                        <Button
                          handleClick={() => {
                            dispatch(
                              modalpurchase.started({
                                price: props.instant_sale_price,
                                tokenid: props.token_id,
                                tokenOwner: props.token_owner,
                                quote_token: props.quote_token,
                                unlockOncePurchased:
                                  props.unlock_once_purchased,
                                active: props.active,
                                id: props.id,
                              })
                            );
                          }}
                          disabled={
                            !props.token_id ||
                            isSuccess ||
                            props.unlock_once_purchased == true
                          }
                          modifiers="buycolor"
                        >
                          <Grid
                            container
                            spacing={1}
                            justifyContent="space-around"
                          >
                            <Grid item xs={7}>
                              <div className="p-view_buyfee">
                                <Grid
                                  container
                                  spacing={1}
                                  justify="flex-start"
                                  alignItems="center"
                                >
                                  <Grid
                                    className={classes.saleprice}
                                    item
                                    xs={7}
                                  >
                                    <Text modifiers="saleprice">
                                      {props.instant_sale_price}
                                      {props.quote_token}
                                    </Text>
                                  </Grid>

                                  <Grid item xs={5}>
                                    {props.quote_token === "CONUT" && (
                                      <Text modifiers={["servicefee"]}>
                                        ～$
                                        {amountDollarCONT(
                                          Number(props.instant_sale_price)
                                        )}
                                      </Text>
                                    )}
                                    {props.quote_token === "BNB" && (
                                      <Text modifiers={["servicefee"]}>
                                        ～$
                                        {amountDollarBNB(
                                          Number(props.instant_sale_price)
                                        )}
                                      </Text>
                                    )}
                                    {props.quote_token === "BUSD" && (
                                      <Text modifiers={["servicefee"]}>
                                        ～$
                                        {amountDollarBUSD(
                                          Number(props.instant_sale_price)
                                        )}
                                      </Text>
                                    )}
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                            <Grid alignItems="center" item xs={5}>
                              <Text modifiers="Buynow">
                                {isSuccess && props.id == idCheck
                                  ? "Sold out"
                                  : `${t("View.Buynow")}`}
                              </Text>

                              {/* <ButtonContainer>
                          <Button
                            modifiers="buycolor"
                            handleClick={() => {
                                dispatch(modalpurchase.started({
                                  price:props.instant_sale_price,
                                  tokenid:props.token_id,
                                  tokenOwner:props.token_owner,
                                  quote_token: props.quote_token,
                                  unlockOncePurchased : props.unlock_once_purchased,
                                  active: props.active,
                                  id: props.id
                                }));
                            }}
                            disabled={!props.token_id || isSuccess || props.unlock_once_purchased == true}
                          >          
                          {(isSuccess && props.id == idCheck ) ? 'Sold out' : `${t("View.Buynow")}`}
                          </Button>
                        </ButtonContainer> */}
                            </Grid>
                            {/* <Grid alignItems="center" item xs={1}> <Icon iconName="bag"/></Grid>       */}
                          </Grid>
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </article>
              <Modal
                modifiers="report"
                isOpen={ModalOpenreport}
                handleClose={() => setModalOpenreport(false)}
              >
                <ModalHeader
                  mod
                  title={t("reportpopup.Title")}
                  handleClose={() => setModalOpenreport(false)}
                />
                <FormControl
                  error={error}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormGroup>
                    <FormControlLabel
                      className={classes.font}
                      control={
                        <Checkbox
                          checked={first}
                          onChange={handleChange}
                          name="first"
                        />
                      }
                      label={
                        <Typography className={classes.formControlLabel}>
                          {t("reportpopup.Copyright")}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={second}
                          onChange={handleChange}
                          name="second"
                        />
                      }
                      label={
                        <Typography className={classes.formControlLabel}>
                          {t("reportpopup.Sexual")}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={third}
                          onChange={handleChange}
                          name="third"
                        />
                      }
                      label={
                        <Typography className={classes.formControlLabel}>
                          {t("reportpopup.Violent")}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fourth}
                          onChange={handleChange}
                          name="fourth"
                        />
                      }
                      label={
                        <Typography className={classes.formControlLabel}>
                          {t("reportpopup.Hateful")}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fifth}
                          onChange={handleChange}
                          name="fifth"
                        />
                      }
                      label={
                        <Typography className={classes.formControlLabel}>
                          {t("reportpopup.Harmful")}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={sixth}
                          onChange={handleChange}
                          name="sixth"
                        />
                      }
                      label={
                        <Typography className={classes.formControlLabel}>
                          {t("reportpopup.Spam")}
                        </Typography>
                      }
                    />
                  </FormGroup>
                  {error && (
                    <FormLabel component="legend">Pick one *</FormLabel>
                  )}
                </FormControl>
                <div className="buttoncontainer_report">
                  <Button
                    disabled={error}
                    handleClick={() => reportitem()}
                    type="submit"
                    modifiers="createbig"
                  >
                    {t("Myitem.Report")}
                  </Button>
                </div>
              </Modal>
              <Modal
                modifiers="report"
                isOpen={modalOpenShare}
                handleClose={() => setModalOpenShare(false)}
              >
                <ModalHeader
                  title={t("sharepopup.share")}
                  handleClose={() => setModalOpenShare(false)}
                />
                <Modalshare link={productLink} />
              </Modal>
              <Modal
                modifiers="error"
                isOpen={modalOpenConnect}
                handleClose={() => setModalOpenConnect(false)}
              >
                <Text modifiers={["bold", "center"]}>
                  {t("mainMenu.ConnectD")}
                </Text>
                <ButtonContainer>
                  <Button
                    modifiers="bid"
                    handleClick={() => setModalOpenConnect(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    modifiers="buy"
                    handleClick={() => {
                      connectWallet(wallet);
                      setModalOpenConnect(false);
                    }}
                  >
                    {t("mainMenu.Connect")}
                  </Button>
                </ButtonContainer>
              </Modal>
              {props.id == idCheck ? (
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                <Modal
                  checkout={active}
                  isOpen={active}
                  handleClose={handleCloseModal}
                  modifiers="buy"
                >
                  {isSuccess ? (
                    <Toast handleClose={handleCloseModal}>
                      Success purchase!
                    </Toast>
                  ) : (
                    <>
                      <ModalHeader
                        handleClose={handleCloseModal}
                        modifiers="absolute"
                        mod
                      />
                      <div className="p-view_modalbody">
                        <Grid
                          container
                          spacing={1}
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid className="checkoutContent" item xs={7}>
                            <Text modifiers="checkoutTitle">Checkout</Text>

                            {/*   <div className="p-view_balance">
                          <div className="p-view_accountinfo">
                            <Text size="18" modifiers="balance">
                            <Icon iconName="dollar" />{t("checkout.balance")} :
                            </Text>
                              <Text modifiers="bold" unit={quote_token}>
                              {formatBalance(quote_token as CardType, balance)}
                              </Text>
                          </div>
                        </div> */}

                            <div className="p-view_modaldescription">
                              <Text modifiers="checkoutDes">
                                {t("checkout.purchase")}:{" "}
                                <Text inline modifiers="bold">
                                  &nbsp;&nbsp;
                                  {tokenOwner?.replace(
                                    tokenOwner?.substring(9, 37),
                                    "..."
                                  )}
                                </Text>
                              </Text>
                            </div>

                            <div className="p-view_balance">
                              <div className="p-view_accountinfo">
                                <Text size="18">
                                  {/* <Icon iconName="dollar" /> */}
                                  {t("checkout.balance")} :
                                </Text>
                                <Text modifiers="bold" unit={quote_token}>
                                  {formatBalance(
                                    quote_token as CardType,
                                    balance
                                  )}
                                </Text>
                              </div>
                            </div>

                            {/* <div className="p-view_checkoutContent">
                          <Grid
                            className={classes.checkout}
                            container
                            spacing={1}
                            alignItems="center"
                            justify="center"
                          >
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                              {t("checkout.product")}:
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                {productPrice}
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                {quote_token}
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                              {t("checkout.fee")}:
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                            { Number(productPrice) > 50 ? (Number(totalPrice - productPrice ).toFixed(1)) : (
                             Number(totalPrice - productPrice ).toFixed(4)
                            )
                            }
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                {quote_token}
                              </Text>
                            </Grid>
                          </Grid>
                          <Grid spacing={2}item xs={12} >
                            <div >  <Divider style={{marginTop:'10px', marginBottom:'10px' }}/></div>
                          </Grid>
                          <Grid
                          className={classes.checkout}
                            container
                            spacing={1}
                            alignItems="center"
                            justify="center"
                          >
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="bold">
                              {t("checkout.total")}:
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="bold">
                              {totalPrice}
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="bold">
                                {quote_token}
                              </Text>
                            </Grid>
                          </Grid>
                        </div> */}

                            {/* <div className="p-view_checkoutGasFee">
                          <Grid
                            className={classes.checkout}
                            container
                            spacing={1}
                            alignItems="center"
                            justify="center"
                          >
                           <span className="p-view_servicefee">{t("create.Servicefee")} <span className="servicefee">2.5%</span><span>&nbsp;&nbsp;0%</span></span>
                          </Grid>
                        </div> */}
                            <div
                              style={{
                                padding: "0.4rem",
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                borderRadius: "1rem",
                                marginLeft: "3.2rem",
                                marginBottom: "30px",
                                marginRight: "3.2rem",
                              }}
                            >
                              <Text modifiers="CheckoutAgreement">
                                NFTencer's user is responsible for all
                                transactions of digital assets on NFTencer,
                                including the responsibility for verifying that
                                the content associated with the digital assets
                                is original and published by the legit owner.
                                NFTencer will not bear any responsibility when
                                there is a digital asset copyright dispute
                                between users.
                              </Text>
                              <FormControlLabel
                                className={classes.checkbox}
                                control={
                                  <Checkbox
                                    className={classes.checkboxStyle}
                                    checked={stateB.checkedB}
                                    onChange={handleChangeConfirm}
                                    name="checkedB"
                                    color="primary"
                                  />
                                }
                                label={
                                  <Text inline modifiers="confirm">
                                    I Agree
                                  </Text>
                                }
                                labelPlacement="end"
                              />
                            </div>
                          </Grid>
                          <Grid className="p-view_payment" item xs={5}>
                            <div className="p-view_checkoutContent">
                              <Grid
                                className={classes.checkout}
                                container
                                spacing={1}
                                alignItems="center"
                                justify="center"
                              >
                                <Grid item xs={4}>
                                  <Text inline modifiers="checkout">
                                    {t("checkout.product")}:
                                  </Text>
                                </Grid>
                                <Grid item xs={4}>
                                  <Text inline modifiers="checkout">
                                    {productPrice}
                                  </Text>
                                </Grid>
                                <Grid item xs={4}>
                                  <Text inline modifiers="checkout">
                                    {quote_token}
                                  </Text>
                                </Grid>
                                <Grid item xs={4}>
                                  <Text inline modifiers="checkout">
                                    {t("checkout.fee")}:
                                  </Text>
                                </Grid>
                                <Grid item xs={4}>
                                  <Text inline modifiers="checkout">
                                    {Number(productPrice) > 50
                                      ? Number(
                                          totalPrice - productPrice
                                        ).toFixed(1)
                                      : Number(
                                          totalPrice - productPrice
                                        ).toFixed(4)}
                                  </Text>
                                </Grid>
                                <Grid item xs={4}>
                                  <Text inline modifiers="checkout">
                                    {quote_token}
                                  </Text>
                                </Grid>
                              </Grid>
                              {/* <Grid spacing={2}item xs={12} >
                            <div >  <Divider style={{marginTop:'10px', marginBottom:'10px' }}/></div>
                          </Grid> */}
                              <Grid
                                className={classes.checkout}
                                container
                                spacing={1}
                                alignItems="center"
                                justify="center"
                              >
                                <Grid item xs={4}>
                                  <Text inline modifiers="bold">
                                    {t("checkout.total")}:
                                  </Text>
                                </Grid>
                                <Grid item xs={4}>
                                  <Text inline modifiers="bold">
                                    {totalPrice}
                                  </Text>
                                </Grid>
                                <Grid item xs={4}>
                                  <Text inline modifiers="bold">
                                    {quote_token}
                                  </Text>
                                </Grid>
                              </Grid>

                              {product && totalPrice > balance && (
                                <span className="p-view_errormessage">
                                  You don't have enough money to buy it.
                                </span>
                              )}
                              <ButtonContainer>
                                {/* <Button modifiers="cancelpayment" handleClick={handleCloseModal}>
                          {t("checkout.cancel")}
                          </Button> */}
                                {props.erc_type ? (
                                  <Button
                                    modifiers="payment"
                                    disabled={
                                      (product && totalPrice > balance) ||
                                      !stateB.checkedB
                                    }
                                    handleClick={() => {
                                      setModalOpenBuy(true);
                                      dispatch(
                                        commonStart({
                                          nextAction: ApproveBuyNFT.started({
                                            idNFT: props.order_id,
                                            account: wallet.account,
                                            middlewareMethods:
                                              middlewareMethods,
                                            erc_type: erc_type,
                                            price: props.price,
                                          }),
                                        })
                                      );
                                    }}
                                  >
                                    {/* {t("checkout.payment")} */}
                                    Buy Now &nbsp; &nbsp;
                                    <Icon iconName="bag" />
                                  </Button>
                                ) : (
                                  <Button
                                    modifiers="payment"
                                    disabled={
                                      (product && totalPrice > balance) ||
                                      !stateB.checkedB
                                    }
                                    handleClick={() => {
                                      quote_token === "BUSD"
                                        ? dispatch(
                                            commonStart({
                                              nextAction: approveBUSD.started({
                                                price: pricePur,
                                                idNFT: tokenid,
                                                bnbPrice: undefined,
                                                middlewareMethods:
                                                  middlewareMethods,
                                              }),
                                            })
                                          )
                                        : quote_token === "CONUT"
                                        ? dispatch(
                                            commonStart({
                                              nextAction: approveCONT.started({
                                                price: pricePur,
                                                bnbPrice: undefined,
                                                idNFT: tokenid,
                                                middlewareMethods:
                                                  middlewareMethods,
                                              }),
                                            })
                                          )
                                        : dispatch(
                                            commonStart({
                                              nextAction: purchase.started({
                                                idNFT: tokenid,
                                                bnbPrice:
                                                  props.quote_token === "BNB"
                                                    ? pricePur
                                                    : undefined,
                                                middlewareMethods:
                                                  middlewareMethods,
                                                erc_type: erc_type,
                                              }),
                                            })
                                          );
                                    }}
                                  >
                                    {/* {t("checkout.payment")} */}
                                    Buy Now &nbsp; &nbsp;
                                    <Icon iconName="bag" />
                                  </Button>
                                )}
                              </ButtonContainer>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </>
                  )}
                </Modal>
              ) : (
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                <> </>
              )}
            </>
          ) : (
            <>
              <Text modifiers="center" size="24">
                Product not found!
              </Text>
              <ButtonContainer>
                <Button anchor={{ href: "/" }}>Back to explore</Button>
              </ButtonContainer>
            </>
          )
        ) : (
          <Spinner />
        )}
      </Section>
      {isProcessing && isCancel == false && (
        <Spinner modifiers="screen" label="Processing" />
      )}
      <Modal
        modifiers="error"
        isOpen={modalmobile}
        handleClose={() => setmodalmobile(false)}
      >
        <ModalHeader
          title={t("View.Sorry")}
          handleClose={() => setmodalmobile(false)}
        />
        <Text modifiers={["bold", "center"]}>{t("View.SorryD")}</Text>
        <ButtonContainer>
          <Button
            modifiers="buy"
            handleClick={() => {
              setmodalmobile(false);
            }}
          >
            OK
          </Button>
        </ButtonContainer>
      </Modal>
      <Modal
        modifiers="price"
        isOpen={reportModal}
        handleClose={() => setreportModal(false)}
      >
        <ModalHeader
          modifiers="report"
          title="Thank you for submitting your report to us."
          handleClose={() => setreportModal(false)}
        />
        <Text modifiers={["report"]}>
          We will process the report you submitted as quickly as possible.
        </Text>
        <Text modifiers={["report", "inline"]}>
          Processing time for reports of piracy will typically be 5-7 business
          days. For more convenience in the settlement process, please send
          related documents to email:
        </Text>
        <Text modifiers={["report", "inline"]}>
          <a href="mailto:support@NFTencer.global">support@NFTencer.global</a>
        </Text>
        <Text modifiers={["report"]}>
          We will process the report you submitted as quickly as possible.
        </Text>
        <Text modifiers={["report", "inline"]}>Contact us:</Text>
        <Text modifiers={["report", "inline"]}>
          <a href="mailto:support@NFTencer.global">support@NFTencer.global</a>
        </Text>
      </Modal>
      <Modal
        isOpen={modalOpenBuy}
        modifiers="step"
        handleClose={() => setModalOpenBuy(false)}
      >
        <ModalHeader
          title="FOLLOW STEPS"
          handleClose={() => setModalOpenBuy(false)}
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
    </div>
  );
};
export default hot(Viewtesy);
