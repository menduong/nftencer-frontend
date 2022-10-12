import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { Button } from 'components/atoms/button';
import { Icon } from 'components/atoms/icon';

type Modifier = 'closeonly' | 'report';

interface Props {
  modifiers?: Modifier | Modifier[];
  title: string;
  icon?: boolean;
  mod?:boolean;
  handleClose: () => void;
}

export const ModalHeader: React.FC<Props> = props => {
  return (
    <div className={mapModifiers('m-modalheader', props.modifiers)}>
      {props.mod? (
        <Heading modifiers="nomargin" type="h3">{props.title}{props.icon && <Icon iconName="createitem" modifiers="create" />}</Heading>
      ) :(
      <Heading modifiers="title" type="h2">{props.title}{props.icon && <Icon iconName="createitem" modifiers="create" />}</Heading>
      )}
      <Button modifiers={['icon']} handleClick={props.handleClose}>
        <Icon iconName="close-modal" />
      </Button>
    </div>
  );
};

export default hot(ModalHeader);
