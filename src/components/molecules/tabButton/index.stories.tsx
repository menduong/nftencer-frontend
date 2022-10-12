import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabButton } from './index';

storiesOf('Components|molecules/TabButton', module).add('normal', () => (
  <>
    <TabButton active>All</TabButton>
    <TabButton>Art</TabButton>
  </>
));
