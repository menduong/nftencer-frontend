import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import { Heading } from 'components/molecules/heading';
import { TabList } from 'components/molecules/tabList';
import { TabButton } from 'components/molecules/tabButton';
import { users } from 'dummy/dummy';
import { useWallet } from 'use-wallet';
import { ItemList } from 'components/organisms/itemList';
import { SearchTabType, SearchTabs } from 'components/pages/search/constant';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchStore, searchNFTAction } from 'store/search';
import { getMediaType } from 'util/getMediaType';
import { Text } from 'components/atoms/text';
import axios from 'axios';
import { useTranslation } from "react-i18next";

export const View: React.FC<RouteComponentProps> = props => {
  const query = new URLSearchParams(props.location?.search).get('name');
  const dispatch = useDispatch();
  const wallet = useWallet();
  const [username, usernameSet] = useState<any>(Array)
  const { t } = useTranslation();
  const user = async() => {
    try {
    const searchUser= await axios.get (`${process.env.ADDRESS_API}/account/search-paging?keys=${query}&limit=10&offset=0`)
    const listuser = searchUser.data.accounts;
    usernameSet(listuser)
    }catch {
      console.log("fail search")
    }
  }

  useEffect(() => {
    user();
    !query ? navigate('/') : dispatch(searchNFTAction.started({ title: query, mode: 'refresh',address:wallet.account }));
  }, [dispatch, query]);
  const { isLoading, list, next_cursor, error } = useSelector(getSearchStore);
  const [selectedTab, setSelectedTab] = useState<SearchTabType>('Items');
  return (
    <div className="p-search">
      <Layout title="Search">
        <Section className="p-search_main">
          <Heading type="h1">
            Search results for <span>{query}</span>
          </Heading>
          <div className="p-search_tabs">
            <TabList>
              {SearchTabs.map(tab => (
                <TabButton key={tab} active={tab === selectedTab} handleClick={() => setSelectedTab(tab)}>
                  {tab}
                </TabButton>
              ))}
            </TabList>
          </div>
          <div className="p-search_products">
            {error ? (
              <Text modifiers={['center', 'error']}>{error}</Text>
            ) : selectedTab === 'Items' ? (
              <ItemList
                search
                modifiers="search"
                next={() => {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  dispatch(searchNFTAction.started({ title: query!, cursor: next_cursor,address:wallet.account }));
                }}
                next_cursor={next_cursor}
                isLoading={isLoading}
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                searchBy={query!}
                list={list.map(item => ({
                  title: item.title,
                  alt: '',
                  src: item.upload_file,
                  view: item.view,
                  creator_acc:item.creator_acc.avatar.String,
                  totallike: item.like.total,
                  price: Number(item.instant_sale_price),
                  unit: item.quote_token.name,
                  mediaType: getMediaType(item.upload_file),
                  userList: users,
                  amount: 0,
                  id: item.id,
                }))}
                userid={wallet.account}
              />
            ) : (
              <ItemList
                search
                modifiers="search"
                next={() => {}}
                isLoading={isLoading}
                  list={username.map((u,index) => ({
                    modifiers: 'hasavatarborder',
                    background:
                      'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTgkSn79ZeaHscoNaonT37e5dkPnDqZG3NhdLDDeEVmFw&h=220',
                    avatar:u.avatar.String,
                    name: u.username.String,
                    cover:u.cover.String,
                    id:u.address,
                  }))}
              />
            )}
          </div>
        </Section>
      </Layout>
    </div>
  );
};
export default hot(View);
