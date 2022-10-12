import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import ReactModal from 'react-modal';

type Modifier = 'price'|'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center' | 'noticeCreate' | 'claim' |'report' | "instalMetamask" |"maintenance";
import { Section } from 'components/organisms/section';

interface Props {
  modifiers?: Modifier | Modifier[];
  isOpen?: any;
  handleClose: () => void;
  checkout?: boolean;
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

export const Modal: React.FC<Props> = props => {
  return props.isOpen ? (
    <ReactModal
      portalClassName={mapModifiers('o-modal', props.modifiers)}
      bodyOpenClassName="u-modal-open"
      overlayClassName="o-modal_overlay"
      isOpen
      style={customStyles}
      shouldCloseOnOverlayClick
      onRequestClose={props.handleClose}
    >  
    { props.checkout ? (<Section checkout>{props.children}</Section>): (
      <Section useDiv>{props.children}</Section>
    )
    }
    </ReactModal>
  ) : null;
};

export default hot(Modal);
