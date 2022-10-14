import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ItemList } from 'components/organisms/itemList';
import { Text } from 'components/atoms/text';

interface Props {
    store: any;
    wallet_status: any;
    wallet_account: any;
}

export const ListItem: React.FC<Props> = props => {
    return
    //   <main className={`o-main ${props.className}`}>{props.children}</main>;
    <div className="p-explore_products">
        {props.store.error && props.wallet.status === "disconnected" ? (
            <Text modifiers={['center', 'error']}>{props.store.error.message}</Text>
        ) : (
                <ItemList
                    next={() =>
                        getProducts({
                            cursor: props.store.next_cursor,
                        })
                    }
                    mobiless={isMobile}
                    isLoading={props.store.isLoading}
                    searchBy={values.productCategory}
                    next_cursor={props.store.next_cursor}

                    list={res === 'Trend' ? (props.store?.productsTrend.map(item => ({
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
                        props.store?.products.map(item => ({
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
};

export default hot(ListItem);
