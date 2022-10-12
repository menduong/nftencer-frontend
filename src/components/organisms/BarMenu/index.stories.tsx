import React from 'react';
import { storiesOf } from '@storybook/react';
import { Barmenu } from './index';
import { Button } from 'components/atoms/button';
import { DropdownItem, DropdownMenu } from 'components/molecules/dropdownMenu';
import { TabButton } from 'components/molecules/tabButton';
import { TabList } from 'components/molecules/tabList';
import { Dropdown } from 'components/molecules/dropdown';
import { CheckInput } from 'components/atoms/checkInput';

storiesOf('Components|organisms/BarMenu', module).add('normal', () => (
  <Barmenu
    options={
      <TabList>
        <TabButton active>On sale</TabButton>
        <TabButton>Created Items</TabButton>
        <TabButton>Bought Items</TabButton>
        <TabButton>Sold Items</TabButton>
      </TabList>
    }
    
  />
));
