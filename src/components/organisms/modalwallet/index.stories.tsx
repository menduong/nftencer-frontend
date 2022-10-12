import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modalwallet } from './index';

storiesOf('Components|organisms/Modalwallet', module).add('normal', () => (
  <Modalwallet isOpen handleClose={() => {}}>
    Sample test
  </Modalwallet>
));
