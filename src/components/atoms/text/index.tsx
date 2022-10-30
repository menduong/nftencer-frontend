import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Modifier = 'linear'|'black' |'lightbold' | 'bold' | 'lightgray' | 'gray' | 'blue' | 'lightblue' | 'active' | 'center' | 'error' | 'common' |'comment' |'left'|'footer' | 'balance' | 'checkout' | 'checkoutDes' | 'confirm' | 'explore' | 'centerexplore' | 'servicefee' | 'saleprice' |'marginleft' | 'inline' | 'censored' | 'term' |'noBold' | 'Nodecor' |'textIndent' | 'paddingTop' | 'report' | 'flexstart' | 'blackCor' | 'titleNoti' | 'noMargin' |'linethrough'| 'red' | 'Buynow' | 'Grand' | 'marketplace' | 'tittleFollowing' | 'CheckoutAgreement' | "checkoutTitle";

interface Props {
  modifiers?: Modifier | Modifier[];
  size?: '12' | '14' | '16' | '17' | '18' | '24' | '28' |"22";
  unit?: string;
  inline?: boolean;
  children: any;
}

export const Text: React.FC<Props> = props => {
  return props.inline ? (
    <span className={mapModifiers('a-text', props.modifiers, props.size)}>
      {props.children} {props.unit && <span className="a-text_unit">{props.unit}</span>}
    </span>
  ) : (
    <p className={mapModifiers('a-text', props.modifiers, props.size)}>
      {props.children} {props.unit && <span className="a-text_unit">{props.unit}</span>}
    </p>
  );
};

export default hot(Text);
