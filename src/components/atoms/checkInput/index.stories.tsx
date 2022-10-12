import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckInput } from './index';

storiesOf('Components|atoms/CheckableInput', module)
  .add('checkbox text', () => <CheckInput>Sample test</CheckInput>)
  .add('checkbox icon', () => <CheckInput iconName="more">Sample test</CheckInput>)
  .add('radio', () => (
    <>
      <CheckInput type="radio" name="abc">
        Sample test
      </CheckInput>
      <CheckInput type="radio" name="abc">
        Sample test
      </CheckInput>
    </>
  ));
