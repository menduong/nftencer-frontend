import React from 'react';
import { storiesOf } from '@storybook/react';
import { Textfieldsearch } from './index';

storiesOf('Components|organisms/Modalshare', module).add('normal', () => (
  <Textfieldsearch isOpen handleClose={() => {}}>
    Sample test
  </Textfieldsearch>
));
