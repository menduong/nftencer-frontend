import React from 'react';
import { storiesOf } from '@storybook/react';
import { UserRank, UserRankType } from './index';
import img from 'assets/images/DESIGN.png';

const user: UserRankType = {
  rank: 1,
  alt: 'abc',
  name: 'Elana',
  point: 2000,
  image: img,
};
storiesOf('Components|molecules/UserRank', module).add('normal', () => (
  <>
    <UserRank {...user}>Sample test</UserRank>
    <UserRank {...user} rank={4}>
      Sample test
    </UserRank>
  </>
));
