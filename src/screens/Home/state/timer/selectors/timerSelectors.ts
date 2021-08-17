import { TRootState } from "../../../../../core/redux/reducer";

export const getTimerStateSelector = (state: TRootState) => state.timer;

export const getTimerStatusSelector = (state: TRootState) => getTimerStateSelector(state).status;

export const getTimerTimeSelector = (state: TRootState) => getTimerStateSelector(state).time;

export const getTimerWorkTimeSelector = (state: TRootState) => getTimerTimeSelector(state).work

export const getTimerBreakTimeSelector = (state: TRootState) => getTimerTimeSelector(state).break


export const getTimerCircleSelector = (state: TRootState) => getTimerStateSelector(state).circle;

export const getTimerCircleStrokeColorSelector = (state: TRootState) => getTimerCircleSelector(state).strokeColor;
