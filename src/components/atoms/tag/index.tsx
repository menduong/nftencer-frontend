import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
}

export const Tag: React.FC<Props> = props => {
  return <span className={mapModifiers('a-tag', props.modifiers)}>{props.children}</span>;
};

export default hot(Tag);
