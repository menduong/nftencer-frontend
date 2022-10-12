import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductcardMyItem, UserType } from './index';
import img from 'assets/images/desert-camel.png';
import avatar from 'assets/images/DESIGN.png';

const users: UserType[] = [
  { src: avatar, alt: '', type: 'Owner', name: 'alolo' },
  { src: avatar, alt: '', type: 'Creator', name: 'alala' },
];

storiesOf('Components|organisms/productCardSearch', module)
  .add('normal', () => (
    <form>
      <ProductcardMyItem title="Desert" bmp={2000} src={img} alt="abs" userList={users} id={0}></Productcard>
    </form>
  ))
  .add('bid', () => (
    <ProductcardMyItem title="Desert" bmp={2000} bidPrice="12" src={img} alt="abs" userList={users} id={0}></Productcard>
  ));
