import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'foo' | 'bar' | 'explore';

interface Props {
  modifiers?: Modifier | Modifier[];
}

export const TabList: React.FC<Props> = props => {
  return <div className={mapModifiers('m-tablist', props.modifiers)}>{props.children}</div>;
};

export default hot(TabList);
