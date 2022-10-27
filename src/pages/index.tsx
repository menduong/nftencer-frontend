import { RouteComponentProps } from '@reach/router';
import { Button } from 'components/atoms/button';
import { getMediaType } from 'util/getMediaType';
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
import { Header } from 'components/organisms/header';
import { getBuyStore, openSidebar } from 'store/buyNFT';
import { Sidebar } from 'components/organisms/sidebar';
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
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ScrollToTop from 'react-scroll-up';
import ListItem from 'components/organisms/listItem';
import { throttle } from 'lodash';
import banner_top from 'assets/images/NFTencer/banner_top.png';


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
  const { isKR, isSidebar } = useSelector(getBuyStore);
  const { t } = useTranslation();
  const store = useSelector(getExploreStore);
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
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
  const [isSticky, setSticky] = useState(false);

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
    } catch {
      console.log("get categories error")
    }
  };
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
  // }, [wallet.status]);
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

  useEffect(() => {
    const handleScroll = throttle(() => {
      const header = document.querySelector('.o-header');
      const layout = document.querySelector('.t-layout');
      const isSticky = (header && window.pageYOffset > 1100) || false;
      const onTop = window.pageYOffset === 0;
      setSticky(isSticky);
      layout?.classList.toggle('u-sticky', isSticky && !onTop);
    }, 100);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log("issidebar", isSidebar)

  return (
    <div className="p-explore">
      {!isMobile && <div className="p-explore_theme"></div>}
      <Grid
        container
        spacing={0}
      >
        <Grid justify="center" item xs={12} spacing={0}>
          <Header />
        </Grid>
        {isSticky ===true  && (
          <>
        {isSidebar === true &&
          <Grid justify="center" item xs={1} spacing={0}>
            <div className="o-header_miniMenu"></div>
          </Grid>
        }
        <Grid justify="center" item xs={isSidebar === true ? 10 : 12} spacing={0}>
          <div className="o-header_miniMenu">
            {reg.map((cate, i) => (
              <TabButton
                category
                modifiers="category"
                handleClick={() => handleFilter('category',
                  cate.name)}>{cate.name.charAt(0).toUpperCase() + cate.name.slice(1)}</TabButton>
            ))}
          </div>
        </Grid>
        </>
        )}

        <Grid justify="center" item xs={isSidebar ? 2 : false} spacing={2}>
          {isSidebar === true && !isMobile &&
            <div className={isSticky? "p-explore_subMenu_Sticky":"p-explore_subMenu"}>
              <div className="p-explore_subMenuItem">
                <Sidebar />
              </div>
            </div>
          }
        </Grid>
        <Grid className="p-explore_section" justify="center" item xs={isSidebar === true ? 10 : 12} spacing={2}>
          <Grid
            className="p-explore_mainetNftEncer"
            container
            spacing={0}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {/* <Grid justify="center" item xs={12} spacing={0}>
              <Heading modifiers="titleEncer">NFTencer</Heading>
              <span style={{ fontSize: "35px" }}>&nbsp;-NFT Market place</span>
            </Grid> */}
          </Grid>
          <Layout title="NFTencer Marketplace">
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
                      spacing={0}
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <img style={{width:"100%"}} src={banner_top} />
                        <Carouselt />
                      </Grid>
                      {/* <Grid alignContent="center" direction="column" justify="center" alignItems="center" item xs={4} >
                        <Text modifiers="Grand">Grand Opening!</Text>
                        <Text modifiers="marketplace">NFTencer Marketplace</Text>
                      </Grid> */}
                      <Grid className="p-explore_totalvolumeMain" item xs={12}>
                        <Grid justify="space-evenly" container spacing={1}>
                          <Grid xs={5}>
                          
                            <Link to="/userguilde">
                              <button className="p-explore_ButtonHowconnect">
                                <Sectionsub modifiers="howconnect">
                                  <div className="p-explore_Howconnect">
                                    {/* <Grid justify="space-evenly" alignItems="center" container spacing={1}>
                                      <Grid xs={6}>
                                        <Heading modifiers={['left']}>{t("mainMenu.howtoconnect")}</Heading>
                                      </Grid>
                                      <Grid xs={5}> */}
                                        {/* <div className="p-explore_HowconnectLogo"></div> */}
                                        {/* <img alt="logo metamask" src={logo} />
                                      </Grid>
                                    </Grid> */}
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
                                   
                                  </div>
                                </Sectionsub>
                              </button>
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
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
                      {!isMobile && (
                        <Grid item xs={12} spacing={2}>
                          {/* <TextFieldFormik
                            modifiers="search"
                            placeholder={t("mainMenu.Search")}
                            type="search"
                            name="search"
                          /> */}
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
                              <Icon modifiers="SuperUltra" iconName="explore" />
                            </Grid>
                          </div>

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
        </Grid>
      </Grid>


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
