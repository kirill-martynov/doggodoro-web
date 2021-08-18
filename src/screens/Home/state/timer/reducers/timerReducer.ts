import { ETimerActionTypes } from "../actionTypes/timerActionTypes";

const initialState = {
  status: false,
  time: {
    work: 0.1,
    break: 5,
  },
  circle: {
    strokeColor: "#53d3af",
  },
};

export function timerReducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case ETimerActionTypes.SET_TIMER_STATUS:
      return { ...state, status: !state.status };
    default:
      return state;
  }
}
