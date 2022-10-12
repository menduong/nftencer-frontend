import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'nobackground' | 'nopadding' | 'nomargin' | 'height' |'howconnect' |'howsettup' | 'padding5';

interface Props {
  modifiers?: Modifier | Modifier[];
  className?: string;
  useDiv?: boolean;
  anchor?: {
    href: string;
    target?: string;
    external?: boolean;
  };
}

export const Sectionsub: React.FC<Props> = props => {
  return props.useDiv ? (
    <div className={`${mapModifiers('o-section2', props.modifiers, 'usediv')} ${props.className || ''}`}>
      {props.children}
    </div>
  ) : (
    <section className={`${mapModifiers('o-section2', props.modifiers)} ${props.className || ''}`}>
      {props.children}
    </section>
  );
};

export default hot(Sectionsub);
