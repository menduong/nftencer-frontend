import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Button } from 'components/atoms/button';
import { Card } from 'components/atoms/card';
import { TabList } from 'components/molecules/tabList';
import { TabButton } from 'components/molecules/tabButton';
import { CardType } from 'util/formatBalance';
import { useClipboard } from "use-clipboard-hook";
import { useSnackbar } from 'notistack';
type Modifier = 'fullwidth';

interface Props {
  modifiers?: Modifier | Modifier[];
  open?: boolean;
  handleDisconnect?: () => void;
  walletAccount: string;
  balanceBNB: number;
  balanceBUSD: number;
  balanceCONT: number;
  hideDisconnect?: boolean;
}

export const Mywallet: React.FC<Props> = props => {
  const message = 'Copied';
  const [selectedCard, setSelectedCard] = useState<CardType>('BUSD');
  const { ref, copy } = useClipboard({
    onSuccess: (text) => enqueueSnackbar(message, {
      variant: 'success',
    }),
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <div className={mapModifiers('m-mywallet', props.modifiers, props.open && 'open', selectedCard.toLowerCase())}>
      <TabList>
        {['BUSD', 'BNB', 'CONUT'].map(card => (
          <TabButton key={card} active={selectedCard === card} handleClick={() => setSelectedCard(card as CardType)}>
            {card}
          </TabButton>
        ))}
      </TabList>
      <div className="m-mywallet_cards">
        <div className="m-mywallet_cardwrapper">
          <div className="m-mywallet_card">
            <Card balance={props.balanceBUSD} id={props.walletAccount} cardType="BUSD" />
            <Card balance={props.balanceBNB} id={props.walletAccount} cardType="BNB" />
            <Card balance={props.balanceCONT} id={props.walletAccount} cardType="CONUT" />
          </div>
        </div>
      </div>
      {!props.hideDisconnect && (
        <div className="m-mywallet_disconnect">
          <span ref={ref} className="hidden">{props.walletAccount}</span>
          <Button modifiers={["bid","inline"]} handleClick={() => copy()}>
            Copy
          </Button>
          <Button modifiers={["bid","inline"]} handleClick={props.handleDisconnect}>
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
};

export default hot(Mywallet);
