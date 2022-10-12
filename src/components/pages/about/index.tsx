import { RouteComponentProps } from '@reach/router';
import { Pagemeta } from 'components/util/pagemeta';
import React from 'react';

export const Default: React.FC<RouteComponentProps> = () => (
  <>
    <Pagemeta title="About" />
    <h1>About</h1>
    <p>Hello World About!</p>
  </>
);
