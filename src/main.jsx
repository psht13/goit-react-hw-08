import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { persistor, store } from './redux/store';
import App from './App/App';

import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
