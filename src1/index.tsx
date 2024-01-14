import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import PolltaxContextProvider from './services/context/polltaxContext/polltaxContext';
import { EarningTaxContextProvider } from './services/context/earningContext/earningContext';
import { FeesContextProvider } from './services/context/feeContext/feesContext';
import { AuthContextProvider } from './services/context/auth/authContext';
import { LicenceTaxContextProvider } from './services/context/licenceContext/licenceContext';
import { RentTaxContextProvider } from './services/context/rentContext/rentContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <PolltaxContextProvider>
    <EarningTaxContextProvider>
    <FeesContextProvider>
    <LicenceTaxContextProvider>
    <RentTaxContextProvider>
      <App />
    </RentTaxContextProvider>
    </LicenceTaxContextProvider>
    </FeesContextProvider>
    </EarningTaxContextProvider>
    </PolltaxContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
