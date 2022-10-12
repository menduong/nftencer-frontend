import React from 'react';
import { storiesOf } from '@storybook/react';
import { StepItem } from './index';

storiesOf('Components|molecules/StepItem', module).add('normal', () => (
  <StepItem iconName="tick-step" description="Approve perfoming transactions with your wallet" title="Approve" />
));
