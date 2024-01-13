import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import PolltaxContextProvider from './services/context/polltaxContext/polltaxContext';
import { EarningTaxContextProvider } from './services/context/earningContext/earningContext';
import { FeesContextProvider } from './services/context/feeContext/feesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PolltaxContextProvider>
    <EarningTaxContextProvider>
    <FeesContextProvider>
      <App />
    </FeesContextProvider>
    </EarningTaxContextProvider>
    </PolltaxContextProvider>
  </React.StrictMode>
);
