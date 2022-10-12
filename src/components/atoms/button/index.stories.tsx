import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';
import { Icon } from '../icon';

storiesOf('Components|atoms/Button', module).add('normal', () => (
  <>
    <Button>Create</Button>
    <br />
    <Button modifiers={['noBackground']}>Connect wallet</Button>
    <br />
    <Button modifiers={['secondary']}>Filter & Sort</Button>
    <br />
    <Button modifiers={['asText']}>All</Button>
    <br />
    <Button modifiers={['bid']}>Bid</Button>
    <br />
    <Button modifiers={['buy']}>Buy</Button>
    <br />
    <Button modifiers={['asLink']}>Buy</Button>
    <br />
  </>
));
