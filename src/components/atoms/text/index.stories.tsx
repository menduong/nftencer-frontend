import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './index';

storiesOf('Components|atoms/Text', module).add('normal', () => (
  <>
    <Text size="12">Sample test</Text>
    <br />
    <Text size="14">Sample test</Text>
    <br />
    <Text>Sample test</Text>
    <br />
    <Text modifiers={['lightgray']}>Options</Text>
    <br />
    <Text modifiers={['bold', 'blue']} size="14">
      2000
    </Text>
    <br />
    <Text modifiers={['gray']} size="12">
      Rabidle
    </Text>
    <br />
    <Text modifiers={['bold']} size="18">
      Elena
    </Text>
  </>
));
