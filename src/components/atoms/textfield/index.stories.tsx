import React from 'react';
import { storiesOf } from '@storybook/react';
import { Textfield } from './index';

storiesOf('Components|atoms/Textfield', module)
  .add('normal', () => <Textfield placeholder="placeholder" type="text" name="1" />)
  .add('has unit', () => <Textfield placeholder="placeholder" type="text" unit="BUSD" name="1" />)
  .add('search', () => <Textfield placeholder="placeholder" type="text" modifiers="search" name="1" />);
