import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import 'normalize.css';
import './assets/css/colors.css';
import './assets/css/typography.css';
import './assets/css/spacings.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
