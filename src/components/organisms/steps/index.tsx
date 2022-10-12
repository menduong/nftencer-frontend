import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
}

export const Steps: React.FC<Props> = props => {
  return <ul className={mapModifiers('o-steps', props.modifiers)}>{props.children}</ul>;
};

export default hot(Steps);
