import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from './index';

storiesOf('Components|atoms/Image', module).add('normal', () => (
  <Image src="https://dummyimage.com/600x400/000/fff" alt="abc" />
));
