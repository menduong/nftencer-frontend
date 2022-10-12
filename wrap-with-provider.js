import './src/app.scss';
import './src/common/i18n/i18n';

import React from 'react';
import { DAppProvider } from "@usedapp/core";
import { SnackbarProvider } from 'notistack';
import { PageProvider as Provider } from './src/components/templates/pageProvider/index';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  
  // return <SnackbarProvider maxSnack={1}><Provider>{element}</Provider></SnackbarProvider>;
  return <React.Suspense fallback="loading..."><SnackbarProvider maxSnack={1}><Provider><DAppProvider config={{}}>{element}</DAppProvider></Provider></SnackbarProvider></React.Suspense>;
};
