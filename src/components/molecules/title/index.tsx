import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { Button } from 'components/atoms/button';
import { Icon } from 'components/atoms/icon';

type Modifier = 'closeonly';

interface Props {
  modifiers?: Modifier | Modifier[];
  title: string;
  handleClose: () => void;
}

export const Title: React.FC<Props> = props => {
  return (
    <div className={mapModifiers('m-title', props.modifiers)}>
     
    </div>
  );
};

export default hot(Title);
