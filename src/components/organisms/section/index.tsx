import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'nobackground' | 'nopadding' | 'nomargin' | 'checkout';

interface Props {
  modifiers?: Modifier | Modifier[];
  className?: string;
  useDiv?: boolean;
  checkout?: boolean;
}

export const Section: React.FC<Props> = props => {
  return props.useDiv ? (
    <div className={`${mapModifiers('o-section', props.modifiers, 'usediv')} ${props.className || ''}`}>
      {props.children}
    </div>
  ) : props.checkout ? (
    <section className={`${mapModifiers('o-section', props.modifiers, 'checkout')} ${props.className || ''}`}>
      {props.children}
    </section>
  ) : (
    <section className={`${mapModifiers('o-section', props.modifiers)} ${props.className || ''}`}>
    {props.children}
  </section>
  );
};

export default hot(Section);
