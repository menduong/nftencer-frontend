import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal1 } from './index';

storiesOf('Components|organisms/Modal1', module).add('normal', () => (
  <Modal1 isOpen handleClose={() => {}}>
    Sample test
  </Modal1>
));
