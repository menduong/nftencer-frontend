import React, { useCallback, useEffect, useMemo, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "components/templates/layout";
import { Section } from "components/organisms/section";
import { users } from "dummy/dummy";
import { navigate } from "gatsby";
import { Icon } from "components/atoms/icon";
import { Form, Formik } from "formik";
import { Dropdown } from "components/molecules/dropdown";
import { TabList } from "components/molecules/tabList";
import { TabButton } from "components/molecules/tabButton";
import { ItemListMyItem } from "components/organisms/itemListMyItem";
import { Barmenu } from "components/organisms/BarMenu";
import { Avatar } from "components/organisms/Avatar";
import { Unit } from "components/pages/create/form";
import { getMediaType } from "util/getMediaType";
import { Button } from "components/atoms/button";
import { RouteComponentProps } from "@reach/router";
import {
  ViewMyitemTabsType,
  ViewMyitemTabsTypeNFT,
} from "components/pages/view/constants";
import {
  ExploreSchema,
  exploreSchema,
  MyItemCategories,
  Sort,
  SortDefaultValue,
  TabNFT,
} from "components/pages/explore/form";
import { useWallet } from "use-wallet";
import { useSelector } from "react-redux";
import { CheckInputFormik } from "components/atoms/checkInput";
import { getCreateStore } from "store/createNFT";
import {
  DropdownItem,
  DropDownItemGroup,
  DropdownMenu,
} from "components/molecules/dropdownMenu";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { getExploreStore } from "store/explore";
import { API_GET_NFT_WALLET } from "../lib/constants";
import DataTable, { createTheme } from "react-data-table-component";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@mui/material/Tooltip";
import { Heading } from "components/molecules/heading";
import { Text } from "components/atoms/text";
import { Spinner } from "components/atoms/spinner";
import { Image } from "components/atoms/image";
import { Video } from "components/molecules/video";
import { UserAvatar } from "components/molecules/userAvatar";
import { Link } from "components/atoms/link";

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

export const Myitem: React.FC<RouteComponentProps> = (props) => {
  const queryaddress = new URLSearchParams(props.location?.search).get("id");
  const result = queryaddress?.substring(queryaddress.indexOf("="));
  const { refresh, reload } = useSelector(getCreateStore);
  const params = new URLSearchParams(props.location?.search);
  const [showFilterAndSort, setShowFilterAndSort] = useState(false);
  const [collectible, setcollectible] = useState<any>(Array);
  const [optionres, setoption] = useState<any>(Array);
  const [listDataNft, setListDataNft] = useState<any>(Array);
  const [isLoading, setIsLoading] = useState(false);
  const Moralis = require("moralis").default;
  const { EvmChain } = require("@moralisweb3/evm-utils");

  const store = useSelector(getExploreStore);
  const { t } = useTranslation();
  const wallet = useWallet();

  const initialValue: ExploreSchema = useMemo(
    () => ({
      unit: Unit[0],
      productCategory: "Created Items",
      productSort: params.get("sort") || SortDefaultValue,
      verify: false,
      tabNFT: "Single NFT(721)",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const query = new URLSearchParams(props.location?.search).get("search");
  const [username, usernameSet] = useState<any>(Array);
  const [addWallet, addWalletSet] = useState<any>(Array);
  const [avatar, avatarSet] = useState<any>(Array);
  const [cover, coverSet] = useState<any>(Array);
  const [infoBio, infoBioSet] = useState<any>(Array);

  const Refresh = async () => {
    try {
      const profile = await axios.get(
        `${process.env.ADDRESS_API}/account?id=${wallet.account}`
      );
      const usernameS = profile.data.username.String;
      const addWalletuser = profile.data.address;
      const infoBio = profile.data.info.String;
      const avatar = profile.data.avartar.String;
      const cover = profile.data.cover.String;
      usernameSet(usernameS);
      addWalletSet(addWalletuser);
      infoBioSet(infoBio);
      avatarSet(avatar);
      coverSet(cover);
    } catch {
      console.log("fail my item");
    }
  };

  const handleFilter = useCallback(async (param: string, value: string) => {
    const query = new URLSearchParams(props.location?.search).get("id");
    const result = query?.substring(query.indexOf("="));
    params.get(param) ? params.set(param, value) : params.append(param, value);
    const newPath = `${props.path}?${params.toString()}`;
    window.history.pushState({ path: newPath }, "", newPath);
    const optionsget = params.get("category");
    setSelectedTab(optionsget);
    let optionsgetD = optionsget?.toLocaleLowerCase();
    switch (optionsgetD) {
      case "created items":
        optionsgetD = "creator";
        break;
      case "on sale":
        optionsgetD = "owner";
        break;
      case "bought items":
        optionsgetD = "bought";
        break;
      case "sold items":
        optionsgetD = "sold";
        break;
    }
    if (optionsgetD === "creator") {
      initialItem();
    } else {
      const getmyitem = await axios.get(
        `${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=created-date&title=&address=${result}&options=${optionsgetD}`
      );
      const collectible = getmyitem.data.collectibles;
      setcollectible(collectible);
      setoption(optionsgetD);
    }
  }, []);

  const ChangeTab = (tab) => {
    setSelectedTabNFT(tab);
    if (tab === "Single NFT(721)") {
      if (selectedTab === "Created Items") {
        initialItem();
      }
    } else {
      setcollectible([]);
    }
  };
  const refreshitem = () => {
    if (refresh && refresh == true) window.location.reload();
  };
  const initialItem = async () => {
    try {
      setIsLoading(true);
      const query = new URLSearchParams(props.location?.search).get("id");
      const result = query?.substring(query.indexOf("="));
      //const result = "0xEC62F905D3fE305de1DA4F9274908DBc9d38De0E";
      // const initial_values = await axios.get(
      //   `${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=created-date&title=&address=${result}&options=creator`
      // );
      // const collectible = initial_values.data.collectibles;
      //const result = "0xEC62F905D3fE305de1DA4F9274908DBc9d38De0E"; // wallet.account;
      const token_address = "0xe8bb5b310c7f7b15af4a752fd35c3d5728fd61f1";
      console.log("new", result);
      const listNFT = await axios
        .get(
          `${process.env.ADDRESS_API}/wallet-nft?address=${result}&chain=bsc testnet&token_address=${token_address}`
        )
        .then((res) => {
          setIsLoading(false);
          let listData = res.data.result.map((x) => ({
            title: x.name ? x.name : "My Item",
            upload_file: JSON.parse(x.token_uri)?.image
              ? JSON.parse(x.token_uri)?.image
              : JSON.parse(x.token_uri)?.Video,
            like: { total: 0 },
            instant_sale_price: x.amount ? x.amount : "",
            quote_token: {
              name: "BNB",
            },
            view: 0,
            token_owner: x.owner_of,
            token_id: x.token_id,
            id: x.token_id,
            amount: x.amount,
          }));
          setcollectible(listData);
        });
      //setcollectible(collectible);
      setoption("creator");
    } catch {
      console.log("fail initial myitem");
    }
  };

  useEffect(() => {
    query
      ? navigate(`/search?name=${query}`)
      : console.log("can not navigate to search");
    initialItem();
    Refresh();
  }, [reload]);

  useEffect(() => {
    refreshitem();
  }, [refresh]);

  const [selectedTab, setSelectedTab] =
    useState<ViewMyitemTabsType>("Created Items");
  const [selectedTabNFT, setSelectedTabNFT] =
    useState<ViewMyitemTabsTypeNFT>("Single NFT(721)");

  return (
    <div className="p-explore">
      <Formik
        initialValues={initialValue}
        validationSchema={exploreSchema}
        onSubmit={() => {}}
      >
        {({ values }) => {
          return (
            <Form>
              <div className="p-explore">
                <div className="p-create">
                  <Layout title="My Item">
                    <Section className="p-explore_myItem">
                      <Avatar
                        resultaddress={result}
                        cover={cover}
                        avatar={avatar}
                        infoBio={infoBio}
                        username={username}
                        address={result}
                        className="p-create_main"
                      ></Avatar>
                      <Section className="p-explore_myitemsub">
                        <div className="p-explore_productfilter">
                          <Barmenu
                            title
                            category={
                              <TabList>
                                {["Created Items", ...MyItemCategories].map(
                                  (cate) => (
                                    <TabButton
                                      key={cate}
                                      active={selectedTab === cate}
                                      useFormik
                                      name="productCategory"
                                      value={cate}
                                      handleClick={() =>
                                        handleFilter("category", cate)
                                      }
                                    >
                                      {t(`Myitem.${cate}`)}
                                    </TabButton>
                                  )
                                )}
                              </TabList>
                            }
                            filterAndSort={
                              <Dropdown
                                trigger={
                                  <Button
                                    modifiers={["icon", "filter", "noBorder"]}
                                    handleClick={() =>
                                      setShowFilterAndSort(!showFilterAndSort)
                                    }
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
                                            handleFilter("sort", s);
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
                            tabNFT={
                              <TabList>
                                {[...TabNFT].map((tab) => (
                                  <TabButton
                                    key={tab}
                                    active={selectedTabNFT === tab}
                                    useFormik
                                    name="tabNFT"
                                    value={tab}
                                    handleClick={() => ChangeTab(tab)}
                                  >
                                    {t(`${tab}`)}
                                  </TabButton>
                                ))}
                              </TabList>
                            }
                          />
                        </div>
                        {isLoading && (
                          <div className="o-itemlist">
                            <Spinner modifiers="big" />
                          </div>
                        )}

                        <div className="p-explore_products">
                          <ItemListMyItem
                            searchBy={values.productCategory}
                            next_cursor={store.next_cursor}
                            list={collectible.map((item) => ({
                              title: item.title,
                              alt: "",
                              src: item.upload_file,
                              totallike: item.like.total,
                              price: Number(item.instant_sale_price),
                              unit: item.quote_token.name,
                              view: item.view,
                              tokenowner: item.token_owner,
                              mediaType: getMediaType(item.upload_file),
                              url: item.upload_file,
                              userList: users,
                              amount: item.amount,
                              tokenid: item.token_id,
                              id: item.id,
                              optionres: { optionres },
                            }))}
                          />
                        </div>
                      </Section>
                    </Section>
                  </Layout>

                  {/* <div dangerouslySetInnerHTML={{ __html: imageData }} /> */}
                </div>
              </div>
              {/* <div style={{ width: "98%", marginLeft: 15, marginTop: -100 }}>
                <DataTable
                  title="NFT"
                  columns={Columns}
                  data={listDataNft}
                  defaultSortFieldId
                  pagination={5}
                  //onRowClicked={handleRowClicked}
                  highlightOnHover
                />
              </div> */}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default hot(Myitem);
