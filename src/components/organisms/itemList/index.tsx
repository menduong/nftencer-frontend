import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Productcard, ProductProps } from 'components/organisms/productCard';
import { ProductCardSearch } from 'components/organisms/productCardSearch';
import { Viewtesy, viewtesyProps } from 'components/organisms/viewtesy';
import { ProfileCard, ProfileProps } from 'components/organisms/profileCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'components/atoms/spinner';
import { Text } from 'components/atoms/text';
import { Icon } from 'components/atoms/icon';
import { mapModifiers } from 'lib/component';

type Modifier = 'search';

interface Props {
  list: (viewtesyProps | ProfileProps)[];
  modifiers?: Modifier | Modifier[];
  next: () => void;
  next_cursor?: string;
  searchBy?: string;
  isLoading: boolean;
  id?: string;
  userid?: any;
  mobiless?: boolean;
  search?: boolean;
}

export const ItemList: React.FC<Props> = props => {
  const [isShowMore, setIsShowMore] = useState(false);
  useEffect(() => setIsShowMore(false), [props.searchBy]);

  return (
    <div className="o-itemlist">
      {props.isLoading ? (
        <Spinner modifiers="big" />
      ) : (
          <>
            <InfiniteScroll
              dataLength={props.list.length}
              hasMore={!!props.next_cursor}
              next={props.next}
              loader={<Spinner modifiers="big" />}
            >
              {props.list.length ? (
                <div className={mapModifiers('o-itemlist_wrapper', props.modifiers)}>
                  {props.list.map((item, idx) => (
                    <>
                      {props.mobiless ? (

                        <div key={idx} className="o-itemlist_item">
                          {(item as ProductProps).title ? (
                            <Productcard userid={props.userid}  {...(item as ProductProps)}></Productcard>
                          ) : (
                              <ProfileCard {...(item as ProfileProps)}></ProfileCard>
                            )}
                        </div>

                      ) : props.search ? (
                        <div key={idx} className="o-itemlist_Searchitem">
                          {(item as ProductProps).title ? (
                            <ProductCardSearch userid={props.userid}  {...(item as ProductProps)}></ProductCardSearch>
                          ) : (
                              <ProfileCard {...(item as ProfileProps)}></ProfileCard>
                            )}
                        </div>
                      ) :
                          (
                            <div key={idx} className="o-itemlist_item">

                              {(item as viewtesyProps).title && item.status === 0 ? (
                                <Viewtesy userid={props.userid}  {...(item as viewtesyProps)}></Viewtesy>
                              ) : item.status === 0 ? (
                                <ProfileCard {...(item as ProfileProps)}></ProfileCard>
                              ) : (
                                    <></>
                                  )
                              }
                            </div>
                          )}
                    </>
                  ))}
                </div>
              ) : (
                  <div className="o-itemlist_noresult">
                    <Icon iconName="search-not-found" />
                    <Text size="28" modifiers={['blue']}>
                      Oops!
                </Text>
                    <Text size="24" modifiers={['blue']}>
                      No matching search results.
                </Text>
                  </div>
                )}
            </InfiniteScroll>
          </>
        )}
    </div>
  );
};

export default hot(ItemList);
