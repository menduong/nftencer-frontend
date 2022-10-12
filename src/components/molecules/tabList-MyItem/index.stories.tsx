import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabListMyItem } from './index';
import { TabButton } from 'components/molecules/tabButton';

storiesOf('Components|molecules/TabList-MyItem', module).add('normal', () => (
  <TabListMyItem>
    <TabButton active>All2</TabButton>
    <TabButton>Created Items</TabButton>
    <TabButton>Bought Items</TabButton>
    <TabButton>Sold Items</TabButton>
  </TabListMyItem>
));
