import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Text } from 'components/atoms/text';
import { CardType, formatBalance } from 'util/formatBalance';
import { Icon } from 'components/atoms/icon';
import { useClipboard } from "use-clipboard-hook";
import { useSnackbar } from 'notistack';

type Modifier = '';

interface Props {
  modifiers?: Modifier | Modifier[];
  balance: number;
  id: string;
  cardType: CardType;
}

export const Card: React.FC<Props> = props => {
  const message = 'Copied';
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { ref, copy } = useClipboard({
    onSuccess: (text) => enqueueSnackbar(message, {
      variant: 'success',
    }),
  });
  return (
    <div className={mapModifiers('a-card', props.modifiers, props.cardType.toLowerCase())}>
      <span ref={ref} className="hidden">{props.id}</span>
      <p className="a-card_title">Your balance</p>
      <p className="a-card_address">{props.id?.replace(props.id.substring(7, 36), "...")}&nbsp;&nbsp;
      <button onClick={() => copy()}><Icon modifiers="flag" iconName="bagCopy"/>
      </button>
      </p>
      {/* <Text size="24" modifiers="bold" > */}
        <div style={{background:"rgba(167, 213, 69, 0.55)",padding:"3px",paddingLeft:"20px"}}>
      <p className="a-card_unit" >{props.cardType}&nbsp;&nbsp;</p>
      <p className="a-card_price">
        {
          // eslint-disable-next-line no-extra-boolean-cast
          !!props.balance ? formatBalance(props.cardType, props.balance) : 0
        }
        </p>
        </div>
      {/* </Text> */}
   
    </div>
  );
};

export default hot(Card);
