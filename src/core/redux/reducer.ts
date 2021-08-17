import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";

import { tasksReducer } from "../../screens/Home/state/tasks/reducers/tasksReducer";
import { timerReducer } from "../../screens/Home/state/timer/reducers/timerReducer";

export const reducer = combineReducers({
  router: connectRouter(history),

  tasks: tasksReducer,
  timer: timerReducer
});

export type TRootState = ReturnType<typeof reducer>;
