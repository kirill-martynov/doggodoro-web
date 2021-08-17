import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore from "./core/redux/configureStore";
import history from "./core/redux/history";

import { App } from "./core/App";

import "./assets/css/variables.css";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
