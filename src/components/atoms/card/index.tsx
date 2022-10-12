import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Text } from 'components/atoms/text';
import { CardType, formatBalance } from 'util/formatBalance';

type Modifier = '';

interface Props {
  modifiers?: Modifier | Modifier[];
  balance: number;
  id: string;
  cardType: CardType;
}

export const Card: React.FC<Props> = props => {
  return (
    <div className={mapModifiers('a-card', props.modifiers, props.cardType.toLowerCase())}>
      <Text size="12">Your balance</Text>
      <Text size="24" modifiers="bold" unit={props.cardType}>
        {
          // eslint-disable-next-line no-extra-boolean-cast
          !!props.balance ? formatBalance(props.cardType, props.balance) : 0
        }
      </Text>
      <Text size="12">{props.id}</Text>
    </div>
  );
};

export default hot(Card);
