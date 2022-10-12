import React from 'react';
import { storiesOf } from '@storybook/react';
import { UserAvatar } from './index';
import img from 'assets/images/DESIGN.png';

storiesOf('Components|molecules/UserAvatar', module)
  .add('normal', () => (
    <UserAvatar src={img} alt="">
      Sample test
    </UserAvatar>
  ))
  .add('small', () => (
    <UserAvatar src={img} alt="" modifiers="small">
      Sample test
    </UserAvatar>
  ));
