import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExploreMenu } from './index';
import { Button } from 'components/atoms/button';
import { DropdownItem, DropdownMenu } from 'components/molecules/dropdownMenu';
import { TabButton } from 'components/molecules/tabButton';
import { TabList } from 'components/molecules/tabList';
import { Dropdown } from 'components/molecules/dropdown';
import { CheckInput } from 'components/atoms/checkInput';

storiesOf('Components|organisms/ExploreMenu', module).add('normal', () => (
  <ExploreMenu
    category={
      <TabList>
        <TabButton active>All</TabButton>
        <TabButton>Foods</TabButton>
        <TabButton>Animal</TabButton>
        <TabButton>Dance/Sing</TabButton>
        <TabButton>Funny</TabButton>
        <TabButton>Satisfying</TabButton>
        <Dropdown position="right" trigger={<TabButton>&gt;</TabButton>}>
          <DropdownMenu>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Beauty
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Fashion
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Tricks/Skills
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Sports
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Sports
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Outdoor Activities
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Daily-Life
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Animation/Arts
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Transportation
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Science
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Education
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Travel
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Health
              </CheckInput>
            </DropdownItem>
            <DropdownItem>
              <CheckInput type="radio" name="type">
              Gaming
              </CheckInput>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </TabList>
    }
    filterAndSort={
      <Dropdown trigger={<Button modifiers={['secondary']}>Filter & Sort</Button>}>
        <DropdownMenu groupName="Sort by">
          <DropdownItem>
            <CheckInput type="radio" name="type">
              Recently added
            </CheckInput>
          </DropdownItem>
          <DropdownItem>
            <CheckInput type="radio" name="type">
              Cheapest
            </CheckInput>
          </DropdownItem>
          <DropdownItem>
            <CheckInput type="radio" name="type">
              Highest price
            </CheckInput>
          </DropdownItem>
          <DropdownItem>
            <CheckInput type="radio" name="type">
              Most liked
            </CheckInput>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    }
  />
));
