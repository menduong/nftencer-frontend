import { RouteComponentProps } from '@reach/router';
import { Button } from 'components/atoms/button';
import { Text } from 'components/atoms/text';
import { navigate } from 'gatsby-link';
import { TextFieldFormik } from 'components/atoms/textfield';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { useTranslation } from "react-i18next";
import { useWallet } from 'use-wallet';
import { Icon } from 'components/atoms/icon';
import { Modal } from 'components/organisms/modal';
import { Carouselt } from 'components/organisms/carouselt';
import { ModalHeader } from 'components/molecules/modalHeader';
import { Modalclaim } from 'components/organisms/modalclaim';
import { Link } from 'gatsby';
import { Container } from "@material-ui/core";
import { Heading } from 'components/molecules/heading';
import { TabButton } from 'components/molecules/tabButton';
import { TabList } from 'components/molecules/tabList';
import { ItemList } from 'components/organisms/itemList';
import { Section } from 'components/organisms/section';
import { Unit } from 'components/pages/create/form';
import logo from 'assets/images/NFTencer/logo_metamask.svg'
import logo_encer from 'assets/images/NFTencer/logo_encer.svg'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { Sectionsub } from 'components/organisms/sectionsub';
import { useMediaQuery } from 'react-responsive'
import {
  ExploreSchema,
  exploreSchema,
  ExtraProductCategories,
  ProductCategories,
  SortDefaultValue,
} from 'components/pages/explore/form';
import { resetStore } from 'store/createNFT';
import { Layout } from 'components/templates/layout';
import { users } from 'dummy/dummy';
import { Form, Formik } from 'formik';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { getExploreStore, getProductList, GetProductListReq, getTotalVolume } from 'store/explore';
import { withStyles } from '@material-ui/core/styles';
import { getMediaType } from 'util/getMediaType';
import {  makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ScrollToTop from 'react-scroll-up'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ListItemText: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "25px",
    paddingTop: "25px",
    backgroundColor: "transparent !important",
  },
  tabc: {
    marginTop: '2px',
    marginLeft: '10px'
  },
  list: {
    width: 250,
    textAlign: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: "50px",
  },
  fullList: {
    width: 'auto',
    height: '100%',
  },
  AccordionSummary: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: "0px",
    },
  },
  media: {
    height: 140,
    objectFit: 'cover'
  },
  card: {
    maxWidth: 345
  },
  Divider: {
    marginBottom: 40,
  },
  sticky: {
    position: "sticky",
    top: "100px!important",
  },
  paper: {
    padding: "16px",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "transparent !important",
    [theme.breakpoints.down('sm')]: {
      padding: "0px",
    },
  },
  details: {
    alignItems: 'top',
  },
  content: {
    '&$expanded': {
      margin: '12px 0',

    },
  },
  MuiAccordionroot: {
    backgroundColor: "transparent !important",
    "&.MuiAccordion-root:before": {
    },
    "&$expanded": {
      backgroundColor: "rgba(97, 97, 97, 0.2)",
    },
    "&:hover": {
      backgroundColor: "transparent !important"
    }
  },
}));
const AccordionSummary = withStyles({
  content: {
    '&$expanded': {
      margin: '12px 0',
      flexDirection: 'column!important',
    },
  },
  expanded: {},
})(MuiAccordionSummary);
type Anchor = 'top' | 'left' | 'bottom' | 'right';
export const Home: React.FC<RouteComponentProps> = props => {
  const params = new URLSearchParams(props.location?.search);
  const [modalOpenClaim, setModalOpenClaim] = useState(false);
  const [modalOpenMaint, setModalOpenMaint] = useState(false);
  const { t } = useTranslation();
  const store = useSelector(getExploreStore);
  const classes = useStyles();
  const isMobile = useMediaQuery({
    query: '(max-width: 840px)'
  })
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const initialValue: ExploreSchema = useMemo(
    () => ({
      unit: Unit[0],
      productCategory: params.get('category') || 'All',
      productSort: params.get('sort') || SortDefaultValue,
      verify: false,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getProducts = (req: GetProductListReq) => {
    dispatch(
      getProductList.started({
        limit: req.limit,
        mode: req.mode,
        filterAndSort: params.get('sort'),
        category: params.get('category'),
        cursor: req.cursor,
        address: req.address,
      })
    );
  };
  

  const [reg, regSet] = useState(Array);
  const [res, resSet] = useState<any>(Array);
  const wallet = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  
  useEffect(() => {
    if (!modalOpenClaim) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenClaim]);

  const Get_categories = async () => {
    try {
    const categories = await axios.get(`${process.env.ADDRESS_API}/category`);
    regSet(categories.data.category);
    }catch {
      console.log("get categories error")
    }
  };

  useEffect (()=> {
    if (typeof window.gtag !== 'undefined'){
      window.gtag("conversion", "click", { send_to: ["G-367HCBT3P8"]})
    }
  },[]);
  useEffect(() => {
    Get_categories()
    if (wallet?.status === 'connected') {
      dispatch(getTotalVolume.started({ unit: 0 }));
      getProducts({
        limit: 5,
        mode: 'refresh',
        address: wallet.account,
      });
      setIsLoading(true)
    } else {
      dispatch(getTotalVolume.started({ unit: 0 }));
      getProducts({
        limit: 5,
        mode: 'refresh',
        address: wallet.account,
      });
    }
  }, [wallet.status]);
  const [counter, setCounter] = useState(0);
  const handleFilter = useCallback((param: string, value: string) => {
    params.get(param) ? params.set(param, value) : params.append(param, value);
    const newPath = `${props.path}?${params.toString()}`;
    window.history.pushState({ path: newPath }, '', newPath);
    getProducts({
      limit: 6,
      mode: 'refresh',
      address: wallet.account,
    });
    resSet(value)
    setIsLoading1(true)
  }, []);

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Heading type="h1">Category</Heading>
      <div onClick={toggleDrawer(anchor, false)}>
        <div className="subcategoryMobile">
          {ExtraProductCategories.map(cate => (
            <button className="p-explore_button-more" onClick={() => handleFilter('category', cate)}>{cate}</button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-explore">
       <Grid
          className="p-explore_mainetNftEncer"
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid justify="center" item xs={12} spacing={2}>
            <Heading modifiers="titleEncer">NFTencer</Heading>
              <span style={{fontSize:"30px"}}>- NFT Market place</span>
          </Grid>
        </Grid>
      <Layout main title="COCONUT.GLOBAL">
        <ScrollToTop style={{ right: "20px", zIndex: "1000" }} easing="linear" showUnder={160}>
          <span><big><big>&uarr;</big></big></span>
        </ScrollToTop>
        {isMobile ? (
                <></>
              ) : (
        <Sectionsub modifiers="padding5" className="p-explore_totalvolume p-explore_carousel">
        <Container>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid className="p-explore_totalvolumeMain" item xs={8}>
              <Carouselt />
            </Grid>
            <Grid alignContent="center" direction="column" justify="center" alignItems="center" item xs={4} >
              <Text modifiers="Grand">Grand Opening!</Text>
              <Text modifiers="marketplace">PL NFT Marketplace</Text>
            </Grid>
            <Grid className="p-explore_totalvolumeMain" item xs={12}>
              <Grid justify="space-evenly" container spacing={1}>
                <Grid xs={5}>
                  <Link to="/userguilde">
                    <button className="p-explore_ButtonHowconnect">
                      <Sectionsub modifiers="howconnect">
                              <div className="p-explore_Howconnect">
                              <Grid justify="space-evenly" alignItems="center" container spacing={1}>
                                <Grid xs={6}>
                                  <Heading modifiers={['left']}>{t("mainMenu.howtoconnect")}</Heading>
                                </Grid>
                                <Grid xs={5}>
                                  {/* <div className="p-explore_HowconnectLogo"></div> */}
                                  <img alt="logo metamask" src={logo}/>
                                </Grid>
                              </Grid>
                              </div>
                            </Sectionsub>
                          </button>
                        </Link>               
                </Grid>
                <Grid xs={5}>
                <Link to="/userguilde">
                          <button className="p-explore_ButtonHowconnect">
                            <Sectionsub modifiers="howsettup">
                              <div className="p-explore_Howconnect">
                              <Grid justify="space-evenly" alignItems="center" container spacing={1}>
                                <Grid xs={6}>
                                  <Heading modifiers={['left']}>Introduce of NFTencer</Heading>
                                </Grid>
                                <Grid xs={5}>
                                  {/* <div className="p-explore_HowconnectLogo"></div> */}
                                  <img alt="logo metamask" src={logo_encer}/>
                                </Grid>
                              </Grid>
                              </div>
                            </Sectionsub>
                          </button>
                        </Link>     
                  
                </Grid>
              </Grid>
            </Grid>
            {/* {!isMobile ? (
              <Grid item xs={3} >
                <Grid container spacing={1}>
                  <Grid style={{ height: "100%" }} item xs={12}>
                    <div className="p-explore_subdetail">
                      <Grid style={{ height: "100%" }} item xs={12}>
                        
                            <Link to="/userguilde">
                              <button className="p-explore_ButtonHowconnect">
                                <Sectionsub modifiers="howconnect">
                                  <div className="p-explore_Howconnect">
                                    <Heading modifiers={['left']}>{t("mainMenu.howtoconnect")}</Heading>
                                  </div>
                                </Sectionsub>
                              </button>
                            </Link>
                          
                      </Grid>

                      <Grid style={{ height: "100%" }} item xs={12}>
                        <Grid >
                          <a href="https://www.coconut.global/">
                            <a href="https://www.coconut.global/" className="p-explore_ButtonHowconnect" target="_blank">
                              <Sectionsub modifiers="howsettup">
                                <div className="p-explore_Howsettup">
                                  <Heading modifiers={['left', 'white']}>{t("mainMenu.intro")}</Heading>
                                </div>
                              </Sectionsub>
                            </a>
                          </a>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            ) : (<div></div>)} */}
          </Grid>
        </Container>
        </Sectionsub>
  )}
        <Formik initialValues={initialValue} validationSchema={exploreSchema} onSubmit={values => {
          if (values.search !== undefined) {
            navigate(`/search?name=${values.search}`);
          }
        }
        }>
          {({ values }) => {
            return (
              <Form>

                <Grid
                  className="p-explore_mainet"
                  container
                  spacing={3}
                  direction="row"
                  justify="flex-start"
                  alignItems="stretch"
                >
                  {/* <Grid justify="center" item xs={12} spacing={2}>
                    <Heading modifiers="titleEncer">NFTencer</Heading>
                    <span style={{fontSize:"30px"}}>- NFT Market place</span>
                  </Grid> */}
                  {!isMobile && (
                    <Grid item xs={12} spacing={2}>
                      {/* <Section className="p-explore_mainsub"> */}
                        <TextFieldFormik
                          modifiers="search"
                          placeholder={t("mainMenu.Search")}
                          type="search"
                          name="search"
                        />
                        {/* {(['top'] as Anchor[]).map((anchor) => (
                          <React.Fragment key={anchor}>
                            <button className="expaned-mobile" onClick={toggleDrawer(anchor, true)} ><Icon modifiers="mini" iconName="threedotNobackground" /></button>
                            <SwipeableDrawer
                              anchor={anchor}
                              open={state[anchor]}
                              onClose={toggleDrawer(anchor, false)}
                              onOpen={toggleDrawer(anchor, true)}
                            >
                              {list(anchor)}
                            </SwipeableDrawer>
                          </React.Fragment>
                        ))} */}
                        <div className="menuOption">
                          <Grid justifyContent="center" className="menu" container spacing={0}>
                            <Grid item xs={12}>
                              <TabList modifiers="explore">
                                {/* <div className="menuOption_tablist">
                                  {[...ProductCategories].map(cate => (
                                    <TabButton
                                      modifiers="explore"
                                      key={cate.tab}
                                      name="productCategory"
                                      value={cate.tab}
                                      explore
                                      handleClick={() => handleFilter('category', cate.tab)}
                                    >
                                      <Button modifiers="exploreMenu"><Text modifiers="centerexplore">{cate.tab}</Text></Button>
                                    </TabButton>
                                  ))}
                                </div> */}
                                <div className="p-explore_moreContent">
                                  {reg.map((cate, i) => (
                                    <TabButton
                                      category
                                      modifiers="category"
                                      handleClick={() => handleFilter('category',
                                        cate.name)}>{cate.name.charAt(0).toUpperCase() + cate.name.slice(1)}</TabButton>
                                  ))}
                                </div>
                              </TabList>
                            </Grid>
                          </Grid>
                        </div>
                      {/* </Section> */}

                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <div className="p-explore_products">
                      {store.error && wallet.status === "disconnected" ? (
                        <Text modifiers={['center', 'error']}>{store.error.message}</Text>
                      ) : (
                          <ItemList
                            next={() =>
                              getProducts({
                                cursor: store.next_cursor,
                              })
                            }
                            mobiless={isMobile}
                            isLoading={store.isLoading}
                            searchBy={values.productCategory}
                            next_cursor={store.next_cursor}

                            list={res === 'Trend' ? (store?.productsTrend.map(item => ({
                              title: item.collectible.title,
                              alt: '',
                              active: true,
                              creator: item.collectible.creator,
                              owner: item.collectible.owner,
                              creator_acc: item.collectible.creator_acc?.avatar.String,
                              categories: item.collectible.categories,
                              instant_sale_price: item.collectible.instant_sale_price,
                              token_owner: item.collectible.token_owner,
                              creator_address: item.collectible.creator_acc?.address,
                              userName: item.collectible.creator_acc?.username.String,
                              token_id: item.collectible.token_id,
                              description: item.collectible.description,
                              status: item.collectible.status,
                              quote_token: item.collectible.quote_token.name,
                              unlock_once_purchased: item.collectible.unlock_once_purchased,
                              src: item.collectible.upload_file,
                              ownerAvatar: item.collectible.owner?.avatar.String,
                              liked: item.collectible.like?.liked,
                              price: Number(item.collectible.instant_sale_price),
                              unit: item.collectible.quote_token?.name,
                              totallike: item.collectible.like?.total,
                              view: item.collectible.view,
                              mediaType: getMediaType(item.collectible.upload_file),
                              userList: users.map(user => ({
                                ...user,
                                name: item.collectible.token_owner,
                              })),
                              amount: 0,
                              id: item.collectible.id,
                            }))) : (
                                store?.products.map(item => ({
                                  title: item.title,
                                  active: true,
                                  alt: '',
                                  categories: item.categories,
                                  creator: item.creator,
                                  instant_sale_price: item.instant_sale_price,
                                  token_owner: item.token_owner,
                                  owner: item.owner,
                                  token_id: item.token_id,
                                  description: item.description,
                                  status: item.status,
                                  quote_token: item.quote_token.name,
                                  owneraddress: item.owner.address,
                                  unlock_once_purchased: item.unlock_once_purchased,
                                  creator_acc: item.creator_acc?.avatar.String,
                                  creator_address: item.creator_acc?.address,
                                  userName: item.creator_acc?.username.String,
                                  src: item.upload_file,
                                  ownerAvatar: item.owner?.avatar.String,
                                  liked: item.like?.liked,
                                  price: Number(item.instant_sale_price),
                                  unit: item.quote_token?.name,
                                  totallike: item.like?.total,
                                  view: item.view,
                                  mediaType: getMediaType(item.upload_file),
                                  userList: users.map(user => ({
                                    ...user,
                                    name: item.token_owner,
                                  })),
                                  amount: 0,
                                  id: item.id,
                                }))
                              )
                            }
                            userid={wallet.account}
                          />
                        )}
                    </div>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Layout>
      <Modal modifiers="claim" isOpen={modalOpenClaim} handleClose={() => setModalOpenClaim(false)}>
        <ModalHeader title="" handleClose={() => setModalOpenClaim(false)} />
        <Modalclaim />
      </Modal>
      <Modal modifiers="maintenance" isOpen={modalOpenMaint} handleClose={() => setModalOpenMaint(false)}>
        <Grid
          className="p-explore_mainet"
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid justify="center" item xs={12}>
            <Icon modifiers="ultra" iconName="maint" />
          </Grid>

          <Heading modifiers="marginBot" type="h1">System Construction</Heading>
        </Grid>
        <Grid
          className="p-explore_mainet"
          container
          spacing={3}
          direction="row"
          justify="flex-start"
          alignItems="stretch"
        >
          <Text>Sorry for uncomfortable , We will change our system as soon as possible.</Text>
          <Text>Our service is in the process of transitioning to Mainnet.</Text>
          <Text>우리 서비스는 Mainnet로 전환 작업을 진행 중입니다.</Text>

        </Grid>
      </Modal>
    </div>
  );
};

export default hot(Home);
