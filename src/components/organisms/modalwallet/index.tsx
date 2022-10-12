import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import ReactModal from 'react-modal';

type Modifier = 'wallet'|'price'|'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center';
import { Section } from 'components/organisms/section';

interface Props {
  modifiers?: Modifier | Modifier[];
  isOpen: boolean;
  handleClose: () => void;
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    background: 'transparent',
    border: 0,
  },
};

export const Modalwallet: React.FC<Props> = props => {
  return props.isOpen ? (
    <ReactModal
      portalClassName={mapModifiers('o-modal1', props.modifiers)}
      bodyOpenClassName="u-modal-open"
      overlayClassName="o-modal1_overlay"
      isOpen
      style={customStyles}
      shouldCloseOnOverlayClick
      onRequestClose={props.handleClose}
    >
      <Section useDiv>{props.children}</Section>
    </ReactModal>
  ) : null;
};

export default hot(Modalwallet);
