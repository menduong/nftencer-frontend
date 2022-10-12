import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownMenu, DropdownItem } from './index';
import { Button } from 'components/atoms/button';
import { Text } from 'components/atoms/text';

storiesOf('Components|molecules/Dropdownmenu', module).add('normal', () => (
  <DropdownMenu groupName="Sort by">
    <DropdownItem active>
      <Button modifiers={['asText', 'noPadding']}>
        <Text modifiers="active">Recently added</Text>
      </Button>
    </DropdownItem>
    <DropdownItem>
      <Button modifiers={['asText', 'noPadding']}>
        <Text>Cheapest</Text>
      </Button>
    </DropdownItem>
    <DropdownItem>
      <Button modifiers={['asText', 'noPadding']}>
        <Text>Highest price</Text>
      </Button>
    </DropdownItem>
    <DropdownItem>
      <Button modifiers={['asText', 'noPadding']}>
        <Text>Most liked</Text>
      </Button>
    </DropdownItem>
  </DropdownMenu>
));
