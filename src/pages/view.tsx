import { RouteComponentProps } from '@reach/router';
import { Button } from 'components/atoms/button';
import { Icon } from 'components/atoms/icon';
import classNames from 'classnames/bind';
import { Image } from 'components/atoms/image';
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
import Web3 from 'web3';
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
import Layout from 'components/templates/layout';
import FormLabel from '@material-ui/core/FormLabel';
import { navigate } from 'gatsby';
import { MiddlewareMethods } from 'lib/smartContract';
import React, { useEffect, useMemo, useState,useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { approveBUSD, approveCONT, closeModal, getBuyStore, getProduct, openModal, purchase } from 'store/buyNFT';
import { commonStart } from 'store/common';
import { getBalanceStore } from 'store/getBalance';
import { amountDollarBNB,amountDollarBUSD, amountDollarCONT, amountDollarWithServiceFee } from 'util/amount';
import { CardType, formatBalance } from 'util/formatBalance';
import { getMediaType } from 'util/getMediaType';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive'
import { useEthers, useEtherBalance } from "@usedapp/core";
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from "react-i18next";
const useStyles1 = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
    fontSize:'18px',
  },
  formControl: {
    margin: theme.spacing(3),
    fontSize:'18px',
  },
  formControlLabel: { fontSize: '18px', 
   '& label': { fontSize: '18px' } },
  font: {
    fontSize:'18px',
  },
  checkout: {
    marginLeft: '20px',
    marginRight: 'auto',
  },
  checkboxStyle: {
    width: '10px',
    height: '10px',
    color: 'pink',
    borderRadius: '5px',
  },
  textFieldinput: {
    boxShadow: '0px 0px 30px 0px #F960C833',

  },
  subtext: {
    display:'none!important',
  },
  notchedOutline: {
    borderWidth: '1px',
    borderRadius: '10px',
    borderColor: '#D565C3!important'
  },
  checkbox: {
    marginLeft: '10px',
    marginBottom: '30px',
  },
}),
);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,

      },
    },
    root1: {
      '& > *': {
        margin: theme.spacing(2),
        width: 400,
        marginBottom: 10,
      },
    },
    textField: {
      backgroundColor: '#E9E9E9',
    },
    font_basic: {
      '& > *': {
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
    },
    font: {
      '& > *': {
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#797979',
        marginBottom: 30,
      },
    },
    buttonUp: {
      '& > *': {
        backgroundColor: 'linear-gradient(100.93deg, #D565C3 -13.26%, #ABD3EA 101.12%)',
      },
    },
  }),
);
export const View: React.FC<RouteComponentProps> = props => {
  const id = new URLSearchParams(props.location?.search).get('id');
  const isMobile = useMediaQuery({
    query: '(max-width: 840px)'
  })
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isloading, setisLoading] = useState(true);
  const [isloadingbalance, setisLoadingBalance] = useState(true);
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const ref = useRef(null)
  const [res, resSet] = useState<any>(Array);
  const account = useEthers();
  useEffect(() => {
    id ? dispatch(getProduct.started({ id: id, address: account.account })) : typeof window !== 'undefined' && navigate('/');
  }, [dispatch, id]);

  const wallet = useWallet();
  const { isApproved, isSuccess, product, isGetDone } = useSelector(getBuyStore);
  const balanceStore = useSelector(getBalanceStore);
  const bnbBalance = Number(wallet.balance);
  const balance = product
    ? typeof balanceStore[product.quote_token] === 'number'
      ? balanceStore[product.quote_token]
      : bnbBalance
    : 0;
  const productPrice = Number(product?.instant_sale_price) || 0;
  const fee = (Number(productPrice) * Number(process.env.SERVICE_FEE)) / 100;
  const totalPrice = Number((Number(productPrice) + Number(fee)).toFixed(5));
  const likestatus = product?.like?.liked;
  const [selectedTab, setSelectedTab] = useState<ViewTabType>('Info');
  const [like, setLike] = useState({ isLike:likestatus ?true: false, amount: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const handleChangeForm = name => event => {
    setValues({ ...value, [name]: event.target.value });
  };
  const [value, setValues] = React.useState({
    name:'',

  });
  const [modalmobile, setmodalmobile] = useState(false);
  const classes1 = useStyles();
  const { t } = useTranslation();
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [ModalOpenreport, setModalOpenreport] = useState(false);
  const [datas, dataSet] = useState<any>(Array)
  const [compare, compareSet] = useState<any>(Array)
  const textInput = useRef<HTMLInputElement>(null);
  const classes = useStyles1();
  const web3 = new Web3(window.ethereum);
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
  const error = [ first, second, third, fourth, fifth, sixth].filter((v) => v).length > 1;
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
    try{
     const deletecomment = await axios.delete (`${process.env.ADDRESS_API}/comment?id=${param}&account_id=${wallet.account}`)
     setisLoading(!isloading);
    }
    catch{
      console.log('Cannot delete comment');
    }
  }
  const postcomment =async ()=> {
    const colectid = new URLSearchParams(props.location?.search).get('id');
    const userid = new URLSearchParams(props.location?.search).get('name');
    if (colectid){
      try{
    const commentpost = await axios.post(`${process.env.ADDRESS_API}/comment?collectible_id=${colectid}&account_id=${wallet.account}&content=${value.name}`)
    
    textInput.current.value = "";
    setLoading(!loading);
      }
      catch{
        console.log('Error loaidng rejected data');
      }
    }
  }
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const onKeyDown = (event) => {
      if( event.code == 'Enter'){
        postcomment()
      } else {
        console.log("failll")
      }
  }
  const getcomment =async ()=> {
    const query = window.location.href
    const result = query?.substring(query.indexOf("="));
    try {
    const commentget = await axios.get(`${process.env.ADDRESS_API}/comment/paging?collectible_id${result}&address${wallet.account}`)
    const viewer =     await axios.post(`${process.env.ADDRESS_API}/view?collectible_id${result}`)
    const data = commentget.data.comments
    dataSet(data)
    }catch {
      console.log("can not get comment")
    }
    
  }
  const gethistory = async () => {
    const query = window.location.href
    const result = query?.substring(query.indexOf("="));
    try {
    const historyget = await axios.get (`${process.env.ADDRESS_API}/history?collectible_id${result}`)
    const data = historyget.data.history
    resSet(data)
    }
    catch{
      console.log('Cannot get history');
    }
  }
  const reportitem = async() => {
    const query = window.location.href
    const result = query?.substring(query.indexOf("="));
    if(state.first == true){
    const reportItem1 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id${result}&account_id=${account.account}&report_type_id=1`)
    }else if (state.second == true){
      const reportItem2 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id${result}&account_id=${account.account}&report_type_id=2`)
    }else if (state.third == true){
      const reportItem3 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id${result}&account_id=${account.account}&report_type_id=3`)
    }else if (state.fourth == true){
      const reportItem4 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id${result}&account_id=${account.account}&report_type_id=4`)
    }else if (state.fifth == true){
      const reportItem5 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id${result}&account_id=${account.account}&report_type_id=5`)
    }else if (state.sixth == true){
      const reportItem6 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id${result}&account_id=${account.account}&report_type_id=6`)
    }else {
      console.log("Error Report Item")
    }
    setModalOpenreport(false)
  }

  const numberLike = async () => {
    if (!like.isLike) {
      try {
      const liked = await axios.post(`${process.env.ADDRESS_API}/nft/like?collectible_id=${id}&account_id=${wallet.account}&action=1`)
      setLike({
        isLike: !like.isLike,
        amount: !like.isLike && typeof like.amount === 'number' && product?.like.liked===false ? 1 : 0,
      })
    } catch {
      console.log("Like Error")
    }
    } else {
      try {
      const unliked = await axios.post(`${process.env.ADDRESS_API}/nft/like?collectible_id=${id}&account_id=${wallet.account}&action=0`)
      setLike({
        isLike: !like.isLike,
        amount: like.isLike && typeof like.amount === 'number' && product?.like.liked ?  -1 : 0,
      })
    }catch {
      console.log("Like error")
    }
    }
  }
  const [stateB, setStateB] = React.useState({
    checkedB: false,
  });
  const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateB({ ...stateB, [event.target.name]: event.target.checked });
  };
  
  useEffect(() => {
   
    getcomment()
    gethistory()
  }, [loading,isloading,dataSet]);
 
  useEffect(() => {
    if (!modalOpenShare) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenShare]);
  const productLink = `/view?id=${product?.id}`;
  return (
    <div className="p-view">
      <Layout title="View NFT">
        <Section className="p-view_main">
          {isGetDone ? (
            product?.id ? (
              <>
                <div className="p-view_control">
                  <div className="p-view_back">
                    <Button modifiers="icon" handleClick={() => navigate(-1)}>
                      <Icon iconName="arrow" />
                    </Button>
                  </div>
                </div>
                <article className="p-view_product">
                  <div className="p-view_item">
                    <div className="p-view_media">
                      {getMediaType(product.upload_file) === 'image' ? (
                        <Image src={product.upload_file} alt="" modifiers="big" />
                      ) : (
                        <Video detail  src={product.upload_file} />
                      )}
                    </div>
                    <div className="p-view_informationIn">
                      <div className="p-view_numberView">
                      <Icon iconName='eye' />
                      <span>&nbsp;&nbsp;{product.view}</span>
                    </div>
                    <button
                      onClick={() => numberLike()
                      }
                      className="o-productcard_likeitemView">{product?.like.total + like.amount}&nbsp;&nbsp;
                      <Icon iconName={like.isLike ? 'heartred' : 'heartoutline'} />
                    </button>
                      <Button handleClick={() => setModalOpenShare(true)} modifiers={['iconshareitemView']}><Icon modifiers={['tiny']} iconName='sharelink' /></Button>
                      <div className="p-view_sharemobile">
                    <button onClick={() => setModalOpenreport(true)} className="p-view_threedots" ><Icon modifiers={['large']} iconName="threedots" /></button>
                    </div>
                    </div>
                    <div className="p-view_share">
                    <button onClick={() => setModalOpenreport(true)} className="p-view_threedots" ><Icon modifiers={['large']} iconName="threedots" /></button>
                    </div>
                  </div>
                  <div className="p-view_info">
                    <div className="p-view_detailheadingView ">
                      <Heading type="h1" title={product.title}>
                        {product.title}
                      </Heading>
                      <div className="p-view_price">
                        <Text size="18" modifiers="linear" inline unit={product.quote_token}>
                          {productPrice}
                        </Text>
                        {(product.quote_token === 'CONUT') && (
                          <Text size="18" modifiers={['linear']} inline>
                          （～${amountDollarCONT(Number(productPrice))}）
                          </Text>)
                        }
                        { (product.quote_token === 'BNB') && (
                          <Text size="18" modifiers={['linear']} inline>
                          （～${amountDollarBNB(Number(productPrice))}）
                          </Text>)
                        }
                         { (product.quote_token === 'BUSD') && (
                          <Text size="18" modifiers={['linear']} inline>
                          （～${amountDollarBUSD(Number(productPrice))}）
                          </Text>)
                        }
                      </div>
                    </div>
                    <div className="p-view_detail">
                      <div className="p-view_lead">
                        <Text modifiers="gray">{product.description}</Text>
                      </div>
                      <div className="p-view_tags">
                        {product.categories.map((cate,key) => (
                          <Tag key={cate}>{cate.charAt(0).toUpperCase() + cate.slice(1)}</Tag>
                        ))}
                      </div>
                      <div className="p-view_tabs">
                        <TabList>
                          {ViewTabs.map(tab => (
                            <TabButton key={tab} active={selectedTab === tab} handleClick={() => setSelectedTab(tab)}>
                              {t(`View.${tab}`)}
                            </TabButton>
                          ))}
                        </TabList>
                        </div>
                        <div className="p-view_tabstest">
                        <div className="p-view_tabcontentView">
                          <div className="p-view_wrapper">
                          
                            <ul>
                            <Typography align="center" >
                            <>
                            {(selectedTab=="Info") && (
                              <div>
                                <li className="p-view_tabitem">                  
                            <div className="m-viewtabitem">
                              <div className="m-viewtabitem_tabss">
                              <UserAvatar userAddress={product.creator_acc.address} src={product.creator_acc.avatar.String} alt="" hasTick={false} modifiers="mid" />
                              <div className="m-viewtabitem_info">
                              <Text size="14" modifiers={['bold', 'gray','left']}>{t("View.Creator")} </Text>
                            <Text size="14" modifiers={['comment','left']}>By
                            <Text inline size="14" modifiers="bold">
                            &nbsp;&nbsp;{product.creator_acc.address}
                                        </Text>
                            </Text>

                              </div>
                                            </div>
                                            </div>
                                            </li>

                            {product.owner!=null && (<li className="p-view_tabitem">                  
                            <div className="m-viewtabitem">
                              <div className="m-viewtabitem_tabss">
                              <UserAvatar userAddress={product.owner.address} src={product.owner.avatar.String} alt="" hasTick={false} modifiers="mid" />
                              <div className="m-viewtabitem_info">
                              <Text size="14" modifiers={['bold', 'gray','left']}>{t("View.Owner")} </Text>
                            <Text size="14" modifiers={['comment','left']}>By
                            <Text inline size="14" modifiers="bold">
                            &nbsp;&nbsp;{product.owner.address}
                                        </Text>
                            </Text>

                              </div>
                                            </div>
                                            </div>
                                            </li>)}
                            </div>
                                                    )}
            </>
                      </Typography>
                      <Typography align="center" >
                            <>
                        {(selectedTab=="Comment") && (
                          <div >
                        <div className="p-view_postcontent">
                       <form  noValidate autoComplete="off">
                          <TextField 
                          className={classes.textFieldinput}
                          inputProps={{
                            min: 0, style: { textAlign: 'left',paddingTop: '15px', paddingBottom: '15px' }}}
                          InputProps={{
                            classes: {
                              notchedOutline: classes.notchedOutline,
                            },
                          }}
                          onKeyPress={onKeyDown}
                          inputRef={textInput}
                          onChange={handleChangeForm("name")} 
                          fullWidth
                          placeholder={t("View.Comments")}
                          id="fullWidth"
                          variant="outlined"
                          >  
                          </TextField>
                          <TextField 
                          className={classes.subtext}
                          >  
                          </TextField>
                          <Button modifiers="postcomment" handleClick={() => postcomment()}> {t("View.Post")}</Button>
                          </form>
                          </div>
                        <div className="postcomment-button">
              </div>
              {datas.map((i,idx) => (      
                <li className="p-view_tabitem">
              <div className="m-viewtabitem">
                <div className="m-viewtabitem_tabss">
                 <UserAvatar key={i} src={i.account.avatar.String} alt="" hasTick={false} modifiers="mid" userAddress={i.account.address}/>
                  <div className="m-viewtabitem_info">
                    <Link key={i.account.address}  modifiers={['font']} href={"/userpage?id="+i.account.address}>
                    <Text  size="14" modifiers={['bold', 'gray','left']}>{i.account.username.String} </Text>
                    </Link>
                    <Text key={datas[idx].content} size="14" modifiers={['comment','left']}>{datas[idx].content}</Text>
                  </div>
                </div>
                <div>
                  <div ref={ref}>
                {i.account.address === wallet.account && (
                <button onClick ={()=>deletecomment(i.id,idx)}><Icon modifiers={['medium']} iconName="redelete" /></button>
                      )}
                </div>
                </div>
              </div>
                              </li>
                              ))}

                        </div>
                        )}
        </>
                      </Typography>
                      <Typography align="center" >
                            <>
              {(selectedTab=="History") && (
                <div >
                {res.filter((e, i) => i !== res.length -1).map((items,ix) =>(
                <li className="p-view_tabitem">
                  <div className="m-viewtabitem-history">
                    <div className="m-viewtabitem_tabss">
                      <UserAvatar userAddress={items.account?.address} src={items.account?.avatar.String} alt="" hasTick={false} modifiers="mid" />
                      <div className= { classNames('m-viewtabitem_info', { active: ix === 0 }) }>
                        { items.Type == "0"? (
                          <Text size="14" modifiers={['bold', 'comment','left']}>
                          {t("View.Putonsale")}
                            <Tooltip key={items.account?.address} title={items.account?.address} placement="top">
                              <button>
                                <Text key={items.account} inline size="14" modifiers={['bold', 'gray','left']}>&nbsp;{items.account?.address.replace(items.account?.address.substring(5, 40), "...")}
                                </Text>
                              </button>
                            </Tooltip>
                          </Text>
                        ) : (
                        <Text size="14" modifiers={['bold', 'comment','left']}>
                         {t("View.Purchasedby")}
                         <Tooltip key={items.account?.address} title={items.account?.address} placement="top">
                            <button>
                              <Text key={items.account} inline size="14" modifiers={['bold', 'gray','left']}>&nbsp;{items.account?.address.replace(items.account?.address.substring(5, 40), "...")}
                              </Text>
                            </button>
                          </Tooltip>
                        </Text>
                        )
                        }
                        <Text key={items.created_at} size="14" modifiers={['left','comment']}> {moment(items.created_at).fromNow()}
                        </Text>
                      </div>
                    </div>
                    <div>
                      <Text key={items.price} size="17" modifiers={['left','bold',]}>{Number(items.price).toFixed(3)}&nbsp;{items.quote_token.name}</Text>
                    </div>
                  </div>
                </li>
                ))}
                 {res.filter((e, i) => i === res.length -1).map((items,ix) =>(
                <li className="p-view_tabitem">
                  <div className="m-viewtabitem-history">
                    <div className="m-viewtabitem_tabss">
                      <UserAvatar userAddress={items.account?.address} src={items.account?.avatar.String} alt="" hasTick={false} modifiers="mid" />
                      <div className= { classNames('m-viewtabitem_info', { active: ix === 0 }) }>
                          <Text size="14" modifiers={['bold', 'comment','left']}>
                          {t("View.Firstminted")} 
                            <Tooltip key={items.account?.address} title={items.account?.address} placement="top">
                              <button>
                                <Text key={items.account} inline size="14" modifiers={['bold', 'gray','left']}>&nbsp;{items.account?.address.replace(items.account?.address.substring(5, 40), "...")}
                                </Text>
                              </button>
                            </Tooltip>
                          </Text>
                <Text key={items.created_at} size="14" modifiers={['left','comment']}> {moment(items.created_at).fromNow()}</Text>
                      </div>
                    </div>
                    <div>
                      <Text key={items.price} size="17" modifiers={['left','bold',]}>{Number(items.price).toFixed(3)}&nbsp;{items.quote_token.name}</Text>
                    </div>
                  </div>
                </li>
                ))}
              </div>
              )}
                </>
                      </Typography>
                            
                             
                            </ul>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-view_buydialog">
                      <ButtonContainer>
                        {isMobile ? (
                           <Button
                           modifiers="buycolor"
                           handleClick={() => setmodalmobile(true)}
                           disabled={!product.token_id || isSuccess || product.unlock_once_purchased == true}
                         >
                           {isSuccess || product.unlock_once_purchased == true ? 'Sold out' : `${t("View.Buynow")}`}
                         </Button>
                        ) : (
                        <Button
                          modifiers="buycolor"
                          handleClick={() => {
                              dispatch(commonStart({ nextAction: openModal() }));
                          }}
                          disabled={!product.token_id || isSuccess || product.unlock_once_purchased == true}
                        >
                          {isSuccess || product.unlock_once_purchased == true ? 'Sold out' : `${t("View.Buynow")}`}
                        </Button>
                        )}
                      </ButtonContainer>
                      <span className="p-view_receipt">
                        <Text inline modifiers={['bold', 'footer']} size="14">
                        {t("create.Servicefee")}
                          <Text inline modifiers={['bold', 'footer']} size="14">
                            {process.env.SERVICE_FEE}%
                          </Text>
                        </Text>
                        <Text inline modifiers={['bold', 'footer']} size="14" unit={product.quote_token}>
                          {totalPrice}
                        </Text>
                        <Text inline modifiers={['bold', 'footer']} size="14">
                          （～${Number(amountDollarWithServiceFee(Number(productPrice)))}）
                        </Text>
                      </span>
                    </div>
                  </div>
                </article>
                <Modal isOpen={ModalOpenreport} handleClose={() => setModalOpenreport(false)}>
        <ModalHeader title={t("reportpopup.Title")} handleClose={() => setModalOpenreport(false)} />
      <FormControl error={error} component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel 
            className={classes.font}
            control={<Checkbox  checked={first} onChange={handleChange} name="first" />}
            label={<Typography  className={classes.formControlLabel}>{t("reportpopup.Copyright")}</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={second} onChange={handleChange} name="second" />}
            label={<Typography className={classes.formControlLabel}>{t("reportpopup.Sexual")}</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={third} onChange={handleChange} name="third" />}
            label={<Typography className={classes.formControlLabel}>{t("reportpopup.Violent")}</Typography>}
          />
            <FormControlLabel
            control={<Checkbox checked={fourth} onChange={handleChange} name="fourth" />}
            label={<Typography className={classes.formControlLabel}>{t("reportpopup.Hateful")}</Typography>}
          />
            <FormControlLabel
            control={<Checkbox checked={fifth} onChange={handleChange} name="fifth" />}
            label={<Typography className={classes.formControlLabel}>{t("reportpopup.Harmful")}</Typography>}
          />
            <FormControlLabel
            control={<Checkbox checked={sixth} onChange={handleChange} name="sixth" />}
            label={<Typography className={classes.formControlLabel}>{t("reportpopup.Spam")}</Typography>}
          />
     
        </FormGroup>
        {error &&( <FormLabel component="legend">Pick one *</FormLabel>
       )}
      </FormControl>
                    <ButtonContainer>
                      <Button disabled={error} handleClick={() => reportitem()} type="submit" modifiers="createbig">
                      {t("Myitem.Report")}
                      </Button>
                    </ButtonContainer>
      </Modal>
                <Modal isOpen={modalOpenShare} handleClose={() => setModalOpenShare(false)}>
              <ModalHeader title={t("sharepopup.share")} handleClose={() => setModalOpenShare(false)} />
              <Modalshare link={productLink} />
            </Modal>
                <Modal checkout isOpen={isApproved} handleClose={handleCloseModal} modifiers="overflowy">
                  {isSuccess ? (
                    <Toast handleClose={handleCloseModal}>Success purchase!</Toast>
                  ) : (
                    <>
                      <ModalHeader handleClose={handleCloseModal} title="CHECKOUT" />
                      <div className="p-view_modalbody">
                        <div className="p-view_balance">
                          <div className="p-view_accountinfo">
                            <Text size="18" modifiers="balance">
                            <Icon iconName="dollar" />Your balance :
                            </Text>
                              <Text modifiers="bold" unit={product.quote_token}>
                              {formatBalance(product.quote_token as CardType, balance)}
                              </Text>
                          </div>
                        </div>
                        <div className="p-view_modaldescription">
                          <Text modifiers="checkoutDes">
                            You are about to purchare{' '}
                            from:{' '}
                            <Text inline modifiers="bold">
                            &nbsp;&nbsp;{product.token_owner.replace(product.token_owner.substring(9, 37), "...")}
                            </Text>
                          </Text>
                        </div>
                        <div className="p-view_checkoutContent">
                          <Grid
                            className={classes.checkout}
                            container
                            spacing={1}
                            alignItems="center"
                            justify="center"
                          >
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                Product:
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                {productPrice}
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                {product.quote_token}
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                Fee:
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
                                {product.quote_token}
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
                                Total:
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="bold">
                              {totalPrice}
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="bold">
                                {product.quote_token}
                              </Text>
                            </Grid>
                          </Grid>
                        </div>
                        <div className="p-view_checkoutGasFee">
                          <Grid
                            className={classes.checkout}
                            container
                            spacing={1}
                            alignItems="center"
                            justify="center"
                          >
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                Gas fee:
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                0.005
                              </Text>
                            </Grid>
                            <Grid className="checkoutContent" item xs={4} >
                              <Text inline modifiers="checkout">
                                BNB
                              </Text>
                            </Grid>
                          </Grid>
                        </div>
                        
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
                        label={<Text inline modifiers="confirm">I clearly understood and agree to the notice & agreement</Text>}
                        labelPlacement="end"
                      />
                        {product && totalPrice > balance && (
                          <span className="p-view_errormessage">You don't have enough money to buy it.</span>
                        )}

                        <ButtonContainer>
                          <Button modifiers="cancelpayment" handleClick={handleCloseModal}>
                            Cancel
                          </Button>
                          <Button
                            modifiers="payment"
                            disabled={product && totalPrice > balance || !stateB.checkedB}
                            handleClick={() => {
                              product.quote_token === 'BUSD'
                              ? dispatch(
                                  commonStart({
                                    nextAction: approveBUSD.started({
                                      price: product.instant_sale_price,
                                      idNFT: product.token_id,
                                      bnbPrice: undefined,
                                      middlewareMethods: middlewareMethods,
                                    }),
                                  })
                                )
                              : product.quote_token === 'CONUT'
                              ? 
                              dispatch(
                                  commonStart({
                                    nextAction: approveCONT.started({
                                      price: product.instant_sale_price,
                                      bnbPrice: undefined,
                                      idNFT: product.token_id,
                                      middlewareMethods: middlewareMethods,
                                    }),
                                  })
                                )
                              :
                              dispatch(
                                commonStart({
                                  nextAction: purchase.started({
                                    idNFT: product.token_id,
                                    bnbPrice: product.quote_token === 'BNB' ? product.instant_sale_price : undefined,
                                    middlewareMethods: middlewareMethods,
                                  }),
                                })
                              );
                            }}
                          >
                            Payment
                          </Button>
                        </ButtonContainer>
                      </div>
                    </>
                  )}
                </Modal>
              </>
            ) : (
              <>
                <Text modifiers="center" size="24">
                  Product not found!
                </Text>
                <ButtonContainer>
                  <Button anchor={{ href: '/' }}>Back to explore</Button>
                </ButtonContainer>
              </>
            )
          ) : (
            <Spinner />
          )}
        </Section>
      </Layout>
      {isProcessing && <Spinner modifiers="screen" label="Processing" />}
      <Modal modifiers="error" isOpen={modalmobile} handleClose={() => setmodalmobile(false)}>
        <ModalHeader title={t("View.Sorry")} handleClose={() => setmodalmobile(false)} />
        <Text modifiers={['bold', 'center']}>{t("View.SorryD")}</Text>
        <ButtonContainer>
          <Button modifiers="buy" handleClick={() => { setmodalmobile(false) }}>
            OK
          </Button>
        </ButtonContainer>
      </Modal>
    </div>
  );
};
export default hot(View);
