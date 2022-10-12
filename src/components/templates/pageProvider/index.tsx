import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/index';
import '../../../common/i18n/i18n';
import { UseWalletProvider, ConnectionRejectedError } from 'use-wallet';
import { BscConnector, UserRejectedRequestError } from '@binance-chain/bsc-connector';
import Interceptor from 'components/templates/interceptor';
import { hot } from 'react-hot-loader/root';

export const PageProvider: React.FC = props => {
  return (
    <UseWalletProvider
      chainId={56} //Mainet
      connectors={{
        // This is how connectors get configured
        portis: { dAppId: 'my-dapp-id-123-xyz' },
      }}
    >
      <Provider store={store}>
        <Interceptor>{props.children}</Interceptor>
      </Provider>
    </UseWalletProvider>
  );
};

export default hot(PageProvider);
