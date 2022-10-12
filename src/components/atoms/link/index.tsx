import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Link as GatsbyLink } from 'gatsby';

type Modifier = 'font'|'asText' | 'user' | 'avatar';

interface Props {
  modifiers?: Modifier | Modifier[];
  href: string;
  target?: string;
  handleClick?: () => void;
  external?: boolean;
}

export const Link: React.FC<Props> = props => {
  return !props.external ? (
    <GatsbyLink to={props.href} className={mapModifiers('a-link', props.modifiers)}>
      {props.children}
    </GatsbyLink>
  ) : (
    // eslint-disable-next-line react/forbid-elements
    <a href={props.href} className={mapModifiers('a-link', props.modifiers)} target={props.target}>
      {props.children}
    </a>
  );
};

export default hot(Link);
