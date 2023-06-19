import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';

import history from './history';
import { rootReducer } from './reducer';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({ history });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const reduxHistory = createReduxHistory(store);
