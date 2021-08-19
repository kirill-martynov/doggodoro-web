import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";

import { tasksReducer } from "@Home/state/tasks/reducers/tasksReducer";
import { timerReducer } from "@Home/state/timer/reducers/timerReducer";
import { settingsReducer } from "@Settings/state/reducers/settingsReducer";

export const reducer = combineReducers({
  router: connectRouter(history),

  settings: settingsReducer,
  tasks: tasksReducer,
  timer: timerReducer
});

export type TRootState = ReturnType<typeof reducer>;
