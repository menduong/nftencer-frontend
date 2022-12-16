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
import { ViewMyitemTabsType } from "components/pages/view/constants";
import {
  ExploreSchema,
  exploreSchema,
  MyItemCategories,
  Sort,
  SortDefaultValue,
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
import { Console } from "console";
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

  const web3ApiKey =
    "MtZJVb2Hd2UjFLesFrbwn5vEnaqKPgphYfFz6DiF6KFpX8s2Zfl6qpml1kEzHJLI";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-Key": web3ApiKey,
    },
  };
  const GetNFT = async () => {
    setIsLoading(true);
    await Moralis.start({
      apiKey:
        "59DVKvFEh2cANSqQoLkf4DFg0IEyVKRPUKEGYecQtLxm0AvCbow9NVbCXwf6arsn",
      // ...and any other configuration
    });

    const address = wallet.account;
    console.log(address);

    const chain = EvmChain.BSC_TESTNET;

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });
    let ret = JSON.stringify(response, null, 2);
    if (ret) {
      const data = JSON.parse(ret);
      setIsLoading(false);
      if (data.result.length > 0) {
        const token_address = data.result[0].token_address;
        setIsLoading(true);
        const listNFT = await axios
          .get(
            `${process.env.ADDRESS_API}/wallet-nft?address=${address}&chain=bsc testnet&token_address=${token_address}`
          )
          .then((res) => {
            setIsLoading(false);
            console.log(JSON.parse(res.data.result[0].token_uri));
            let listData = res.data.result.map((x) => ({
              name: x.name ? x.name : x.owner_of,
              contract_type: x.contract_type,
              amount: x.amount ? x.amount : "",
              ImageData: JSON.parse(x.token_uri)?.image,
              type: getMediaType(JSON.parse(x.token_uri)?.image),
            }));
            setListDataNft(listData);
          });
      }

      //
    }
  };

  const initialValue: ExploreSchema = useMemo(
    () => ({
      unit: Unit[0],
      productCategory: "Created Items",
      productSort: params.get("sort") || SortDefaultValue,
      verify: false,
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

    const getmyitem = await axios.get(
      `${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=created-date&title=&address=${result}&options=${optionsgetD}`
    );
    const collectible = getmyitem.data.collectibles;
    setcollectible(collectible);
    setoption(optionsgetD);
  }, []);

  const refreshitem = () => {
    if (refresh && refresh == true) window.location.reload();
  };
  const initialItem = async () => {
    try {
      const query = new URLSearchParams(props.location?.search).get("id");
      const result = query?.substring(query.indexOf("="));
      const initial_values = await axios.get(
        `${process.env.ADDRESS_API}/nft/collectible-paging?cursor=&limit=10&sort=desc&filter=created-date&title=&address=${result}&options=creator`
      );
      const collectible = initial_values.data.collectibles;
      setcollectible(collectible);
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
    GetNFT();
  }, [reload]);

  useEffect(() => {
    refreshitem();
  }, [refresh]);

  const [selectedTab, setSelectedTab] =
    useState<ViewMyitemTabsType>("Created Items");

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
                          />
                        </div>
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
                              amount: 0,
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
              <div className="o-itemlist">
                {isLoading ? (
                  <Spinner modifiers="big" />
                ) : (
                  <InfiniteScroll
                    dataLength={listDataNft.length}
                    next={GetNFT}
                    //style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
                    inverse={true} //
                    hasMore={true}
                    // loader={<Spinner modifiers="big" />}
                    // scrollableTarget="scrollableDiv"
                  >
                    <div className="o-itemlist_wrapper">
                      {listDataNft.map((item, index) => (
                        <div key={index} className="o-itemlist_item">
                          <div className="p-view">
                            <Section className="p-view_main">
                              <article className="p-view_product">
                                <Grid
                                  container
                                  spacing={1}
                                  justifyContent="space-around"
                                >
                                  <Grid item xs={6}>
                                    <div
                                      className="p-view_item"
                                      style={{ top: 30 }}
                                    >
                                      <div className="p-view_media">
                                        {item.type === "image" ? (
                                          <Image
                                            src={item.ImageData}
                                            alt=""
                                            modifiers="big"
                                          />
                                        ) : (
                                          <Video detail src={item.ImageData} />
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
                                            userAddress={item.name}
                                            alt=""
                                            src=""
                                            hasTick={false}
                                            modifiers="mid"
                                          />

                                          <Text
                                            inline
                                            size="14"
                                            modifiers="bold"
                                          >
                                            <Link
                                              href={"/userpage?id=" + item.name}
                                            >
                                              &nbsp;&nbsp;{item.name}
                                            </Link>
                                          </Text>
                                        </div>
                                        <div
                                          style={{
                                            display: "flex",
                                            textAlign: "center",
                                            alignItems: "center",
                                          }}
                                        >
                                          <Text
                                            inline
                                            size="14"
                                            modifiers="bold"
                                          >
                                            {item.contract_type}
                                          </Text>
                                        </div>
                                        <div className="">
                                          <div className="p-view_lead">
                                            <Text modifiers="gray">
                                              {item.amount}
                                            </Text>
                                          </div>
                                        </div>
                                        {/* <div className="">
                                          <div className="p-view_lead">
                                            <a
                                              href={item.external_url}
                                              target="_blank"
                                            >
                                              &nbsp;&nbsp;Meta External Url
                                            </a>
                                          </div>
                                        </div> */}
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </article>
                            </Section>
                          </div>
                        </div>
                      ))}
                    </div>
                  </InfiniteScroll>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default hot(Myitem);
