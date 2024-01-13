import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import PolltaxContextProvider from './services/context/polltaxContext/polltaxContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PolltaxContextProvider>
      <App />
    </PolltaxContextProvider>
  </React.StrictMode>
);
