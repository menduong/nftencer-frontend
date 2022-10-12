import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modalshare } from './index';

storiesOf('Components|organisms/Modalshare', module).add('normal', () => (
  <Modalshare isOpen handleClose={() => {}}>
    Sample test
  </Modalshare>
));
