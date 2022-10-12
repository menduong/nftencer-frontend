import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import { users } from 'dummy/dummy';
import { Icon } from 'components/atoms/icon';
import { Form, Formik } from 'formik';
import { Dropdown } from 'components/molecules/dropdown';
import { TabList } from 'components/molecules/tabList';
import { TabButton } from 'components/molecules/tabButton';
import { ItemListUser } from 'components/organisms/itemListUser';
import { Barmenu } from 'components/organisms/BarMenu';
import { User } from 'components/organisms/User';
import { Unit } from 'components/pages/create/form';
import { getMediaType } from 'util/getMediaType';
import { Button } from 'components/atoms/button';
import { RouteComponentProps } from '@reach/router';
import { ViewMyitemTabsType } from 'components/pages/view/constants';
import {
  ExploreSchema,
  exploreSchema,
  MyItemCategories,
  Sort,
  SortDefaultValue,
} from 'components/pages/explore/form';
import { useDispatch, useSelector } from 'react-redux';
import { CheckInputFormik } from 'components/atoms/checkInput';
import { resetStore } from 'store/createNFT';
import { DropdownItem, DropDownItemGroup, DropdownMenu } from 'components/molecules/dropdownMenu';
import axios from 'axios';
import { getExploreStore, getProductList, GetProductListReq, getTotalVolume } from 'store/explore';

export const userpage: React.FC<RouteComponentProps> = props => {
  const params = new URLSearchParams(props.location?.search);
  const [showFilterAndSort, setShowFilterAndSort] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  const store = useSelector(getExploreStore);
  const dispatch = useDispatch();

  const getProducts = (req: GetProductListReq) => {
    dispatch(
      getProductList.started({
        limit: req.limit,
        mode: req.mode,
        filterAndSort: params.get('sort'),
        category: params.get('category'),
        cursor: req.cursor,
      })
    );
  };
  const initialValue: ExploreSchema = useMemo(
    () => ({
      unit: Unit[0],
      productCategory: 'Created Items',
      productSort: params.get('sort') || SortDefaultValue,
      verify: false,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [username, usernameSet] = useState<any>(Array)
  const [addWallet, addWalletSet] = useState<any>(Array)
  const [avatar, avatarSet] = useState<any>(Array)
  const [cover, coverSet] = useState<any>(Array)
  const [collectible, setcollectible] = useState<any>(Array)
  const [infoBio, infoBioSet] = useState<any>(Array)
  const [selectedTab, setSelectedTab] = useState<ViewMyitemTabsType>('Created Items');
  const click = async () => {
    try {
      const query = new URLSearchParams(props.location?.search).get('id');
      const result = query?.substring(query.indexOf("="));
      const profile = await axios.get(`${process.env.ADDRESS_API}/account?id=${result}`)
      const userD = profile.data.username.String
      const addWallet = profile.data.address
      const infoBio = profile.data.info.String
      const avatarD = profile.data.avartar.String
      const cover = profile.data.cover.String
      usernameSet(userD)
      addWalletSet(addWallet)
      infoBioSet(infoBio)
      avatarSet(avatarD)
      coverSet(cover)
    }
    catch {
      console.log("fail userpage")
    }
  }

  const handleFilter = useCallback(async (param: string, value: string) => {
    setIsShowMore(false);
    const query = new URLSearchParams(props.location?.search).get('id');
    const result = query?.substring(query.indexOf("="));
    params.get(param) ? params.set(param, value) : params.append(param, value);
    const newPath = `${props.path}?${params.toString()}`;
    window.history.pushState({ path: newPath }, '', newPath);
    const optionsget = params.get('category')
    let optionsgetD = optionsget?.toLocaleLowerCase()
    switch (optionsgetD) {
      case 'created items':
        optionsgetD = 'creator';
        break;
      case 'on sale':
        optionsgetD = 'owner';
        break;
      case 'bought items':
        optionsgetD = 'bought';
        break;
      case 'sold items':
        optionsgetD = 'sold';
        break;
    }
    const getmyitem = await axios.get(`${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=created-date&title=&address=${result}&options=${optionsgetD}`)
    const collectible = getmyitem.data.collectibles
    setcollectible(collectible)
  }, []);
  const initialItem = async () => {
    try {
      const query = new URLSearchParams(props.location?.search).get('id');
      const result = query?.substring(query.indexOf("="));
      const initial_values = await axios.get(`${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=created-date&title=&address=${result}&options=creator`)
      const collectible = initial_values.data.collectibles
      setcollectible(collectible)
    } catch {
      console.log("initial item error")
    }
  }
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenD, setmodalOpenD] = useState(false);

  useEffect(() => {
    setIsShowMore(false);
    initialItem()
    click();
  }, []);
  useEffect(() => {
    if (!modalOpen) {
      dispatch(resetStore());
    }

  }, [dispatch, modalOpen]);

  useEffect(() => {
    if (!modalOpenD) {
      dispatch(resetStore());
    }

  }, [dispatch, modalOpenD]);
  return (
    <div className="p-explore">
      <Formik initialValues={initialValue} validationSchema={exploreSchema} onSubmit={() => { }}>
        {({ values }) => {
          return (
            <Form>
              <div className="p-explore">

                <div className="p-create">
                  <Layout title="User Page">

                    <Section className="p-explore_main">
                      <User avatar={avatar} cover={cover} infoBio={infoBio} username={username} address={addWallet} className="p-create_main"></User>
                      <Section className="o-section_mainsub" >
                        <div className="p-explore_productfilter-userpage">
                          <Barmenu
                            category={
                              <TabList>
                                {['Created Items', ...MyItemCategories].map(cate => (
                                  <TabButton
                                    key={cate}
                                    active={selectedTab === cate}
                                    useFormik
                                    name="productCategory"
                                    value={cate}
                                    handleClick={() => handleFilter('category', cate)}
                                  >
                                    {cate}
                                  </TabButton>
                                ))}

                              </TabList>
                            }
                            filterAndSort={
                              <Dropdown
                                trigger={
                                  <Button
                                    modifiers={['icon', 'filter', 'noBorder']}
                                    handleClick={() => setShowFilterAndSort(!showFilterAndSort)}
                                  >
                                    <Icon iconName="filter" />
                                  </Button>
                                }
                                id="productFilter"
                              >
                                <DropdownMenu>
                                  <DropDownItemGroup groupName="Sort by">
                                    {Object.keys(Sort).map((s, idx) => (
                                      <DropdownItem key={idx}>
                                        <CheckInputFormik
                                          name="productSort"
                                          value={s}
                                          handleChange={() => {
                                            handleFilter('sort', s);
                                          }}
                                        >
                                          {s}
                                        </CheckInputFormik>
                                      </DropdownItem>
                                    ))}
                                  </DropDownItemGroup>
                                </DropdownMenu>
                              </Dropdown>
                            }
                          />
                        </div>
                        <div className="p-explore_products">
                          <ItemListUser
                            next={() =>
                              getProducts({
                                cursor: store.next_cursor,
                              })
                            }
                            isLoading={store.isLoading}
                            searchBy={values.productCategory}
                            next_cursor={store.next_cursor}
                            list={collectible.map(item => ({
                              title: item.title,
                              alt: '',
                              src: item.upload_file,
                              price: Number(item.instant_sale_price),
                              unit: item.quote_token.name,
                              mediaType: getMediaType(item.upload_file),
                              userList: users,
                              view: item.view,
                              amount: 0,
                              id: item.id,
                            }))}
                          />
                        </div>
                      </Section>
                    </Section>
                  </Layout>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default hot(userpage);
