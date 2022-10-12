import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from './index';

storiesOf('Components|molecules/Heading', module).add('normal', () => (
  <>
    <Heading>Explore</Heading>
    <br />
    <Heading type="h4" modifiers={['underline', 'white']}>
      Explore
    </Heading>
    <br />
    <Heading type="h4">Desert</Heading>
  </>
));
