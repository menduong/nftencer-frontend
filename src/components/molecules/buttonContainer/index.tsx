import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'column' | 'report';

interface Props {
  modifiers?: Modifier | Modifier[];
  children:any;
}

export const ButtonContainer: React.FC<Props> = props => {
  return <div className={mapModifiers('m-buttoncontainer', props.modifiers)}>{props.children}</div>;
};

export default hot(ButtonContainer);
