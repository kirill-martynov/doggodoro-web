import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";

import { timerReducer } from "../../screens/Home/state/timer/reducers/timerReducer";

export const reducer = combineReducers({
  router: connectRouter(history),

  timer: timerReducer
});

export type TRootState = ReturnType<typeof reducer>;
