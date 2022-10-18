import React from 'react';
import { hot } from 'react-hot-loader/root';

interface Props {
  className?: string;
  children? : any;
}

export const Main: React.FC<Props> = props => {
  return <main className={`o-main ${props.className}`}>{props.children}</main>;
};

export default hot(Main);
