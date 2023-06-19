import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { reduxHistory, store } from '@core/redux/store';

import App from './App.tsx';

import 'normalize.css';
import './assets/css/colors.css';
import './assets/css/typography.css';
import './assets/css/spacings.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={reduxHistory}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
