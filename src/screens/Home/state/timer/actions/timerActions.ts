import { ETimerActionTypes } from "../actionTypes/timerActionTypes";

export const timerActions = {
  setTimerStatus: () => {
    return {
      type: ETimerActionTypes.SET_TIMER_STATUS,
    } as const;
  },
};
