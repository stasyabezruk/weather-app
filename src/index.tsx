import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from './serviceWorker';
import { GeolocationProvider, ThemeContextProvider } from '@context'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContextProvider>
          <GeolocationProvider>
            <App />
          </GeolocationProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
