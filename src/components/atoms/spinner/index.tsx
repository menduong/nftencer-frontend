import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import ClipLoader from 'react-spinners/ClipLoader';
import { Text } from '../text';

type Modifier = 'small' | 'screen' | 'big';

interface Props {
  modifiers?: Modifier | Modifier[];
  height?: number;
  width?: number;
  label?: string;
}

export const Spinner: React.FC<Props> = props => {
  return (
    <div className={mapModifiers('a-spinner', props.modifiers)}>
      <ClipLoader />
      {props.label && <Text>{props.label}</Text>}
    </div>
  );
};

export default hot(Spinner);
