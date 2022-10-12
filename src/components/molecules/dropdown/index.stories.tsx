import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from './index';
import { Button } from 'components/atoms/button';
import { DropdownMenu, DropdownItem } from 'components/molecules/dropdownMenu';
import { Text } from 'components/atoms/text';

storiesOf('Components|molecules/Dropdown', module).add('normal', () => (
  <>
    <Text modifiers="bold">Need specify width for DropdownMenu at parent component</Text>
    <br />
    <Dropdown trigger={<Button modifiers={['secondary']}>Filter & Sort</Button>}>
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
    </Dropdown>
  </>
));
