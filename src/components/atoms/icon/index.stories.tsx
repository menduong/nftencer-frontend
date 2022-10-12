import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './index';

storiesOf('Components|atoms/Icon', module)
  .add('arrow', () => <Icon iconName="arrow" />)
  .add('arrow-down', () => <Icon iconName="arrow-down" />)
  .add('bid', () => <Icon iconName="bid" />)
  .add('heart', () => <Icon iconName="heart" />)
  .add('heart-active', () => <Icon iconName="heart-active" />)
  .add('more', () => <Icon iconName="more" />)
  .add('search', () => <Icon iconName="search" />)
  .add('share', () => <Icon iconName="share" />)
  .add('tick', () => <Icon iconName="tick" />)
  .add('top1', () => <Icon iconName="top1" />)
  .add('top2', () => <Icon iconName="top2" />)
  .add('top3', () => <Icon iconName="top3" />);
