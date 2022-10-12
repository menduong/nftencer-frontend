import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabList } from './index';
import { TabButton } from 'components/molecules/tabButton';

storiesOf('Components|molecules/TabList', module).add('normal', () => (
  <TabList>
    <TabButton active>All</TabButton>
    <TabButton>Foods</TabButton>
    <TabButton>Animal</TabButton>
    <TabButton>Dance/Sing</TabButton>
    <TabButton>Funny</TabButton>
    <TabButton>Satisfying</TabButton>
    <TabButton>&gt;</TabButton>
  </TabList>
));
