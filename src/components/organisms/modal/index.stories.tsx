import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './index';

storiesOf('Components|organisms/Modal', module).add('normal', () => (
  <Modal isOpen handleClose={() => {}}>
    Sample test
  </Modal>
));
