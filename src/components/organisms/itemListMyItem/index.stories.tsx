import React from 'react';
import { storiesOf } from '@storybook/react';
import { ItemListMyItem } from './index';
import { users } from 'dummy/dummy';
import img from 'assets/images/desert-camel.png';

storiesOf('Components|organisms/ItemListMyItem', module)
  .add('products', () => (
    <ItemListMyItem
      isLoading={false}
      next={() => {}}
      list={Array(10)
        .fill(0)
        .map((_, idx) => ({
          title: `Desert${idx}`,
          alt: '',
          bmp: 2000,
          src: img,
          userList: users,
          amount: 123,
          id: idx,
          bidPrice: idx % 2 === 0 ? 2000 : void 0,
        }))}
    />
  ))
  .add('users', () => (
    <ItemListMyItem
      isLoading={false}
      next={() => {}}
      list={Array(10)
        .fill(0)
        .map((_, idx) => ({
          modifiers: 'hasavatarborder',
          background:
            'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTgkSn79ZeaHscoNaonT37e5dkPnDqZG3NhdLDDeEVmFw&h=220',
          avatar:
            'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmRiXMLc7Q8fkKV7Tui1RWbv1eBWejZ7nBPHNxVvq7vFJp&w=240',
          name: 'ARC',
          followers: 123,
        }))}
    />
  ));
