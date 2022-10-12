import React from 'react';
import { storiesOf } from '@storybook/react';
import { Steps } from './index';
import { StepItem } from 'components/molecules/stepItem';

storiesOf('Components|organisms/Steps', module).add('normal', () => (
  <Steps>
    <StepItem iconName="loading" description="Approve perfoming transactions with your wallet" title="Approve" />
    <StepItem iconName="tick-step" description="Approve perfoming transactions with your wallet" title="Approve" />
    <StepItem iconName="tick-success" description="Approve perfoming transactions with your wallet" title="Approve" />
    <StepItem iconName="try-again" description="Approve perfoming transactions with your wallet" title="Approve" />
  </Steps>
));
