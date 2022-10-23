import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h6';
type Modifier = 'center'|'underline' | 'white' | 'nomargin' |'pink' |'pinkheader' | 'left' | 'right' | 'nomargin' |'explore' | 'title' |'marginBot' |'titleEncer';
interface Props {
  modifiers?: Modifier | Modifier[];
  type?: Heading;
  title?: string;
  children?: any;
}

export const Heading: React.FC<Props> = props => {
  switch (props.type) {
    case 'h1':
      return (
        <h1 className={mapModifiers('m-heading', props.modifiers)} title={props.title}>
          {props.children}
        </h1>
      );
    case 'h3':
      return (
        <h3 className={mapModifiers('m-heading', props.modifiers)} title={props.title}>
          {props.children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={mapModifiers('m-heading', props.modifiers)} title={props.title}>
          {props.children}
        </h4>
      );
      case 'h6':
      return (
        <h6 className={mapModifiers('m-heading', props.modifiers)} title={props.title}>
          {props.children}
        </h6>
      );
    default:
      return (
        <h2 className={mapModifiers('m-heading', props.modifiers)} title={props.title}>
          {props.children}
        </h2>
      );
  }
};

export default hot(Heading);
