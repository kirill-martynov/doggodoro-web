import { applyMiddleware, createStore, Store } from "redux";
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import history from "./history";
import { reducer } from './reducer';

const initialState = {};

export default function configureStore(state = initialState): Store {
  const middlewares = [thunk, routerMiddleware(history)];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    reducer,
    state,
    composeWithDevTools(middlewaresEnhancer),
  )

  return store;
}
