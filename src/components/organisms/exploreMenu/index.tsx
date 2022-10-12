import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
  filterAndSort: React.ReactNode;
  category: React.ReactNode;
}

export const ExploreMenu: React.FC<Props> = props => {
  return (
    <div className={mapModifiers('o-exploremenu', props.modifiers)}>
      <div className="">
      <Heading modifiers={[ 'pinkheader']}>Explore</Heading>
        <div className="o-exploremenu_tab">{props.category}</div>
      </div>
    </div>
  );
};

export default hot(ExploreMenu);
