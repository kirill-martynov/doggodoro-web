import { TRootState } from "../../../../../core/redux/reducer";

export const getTasksStateSelector = (state: TRootState) => state.tasks;

export const getTasksRequestSelector = (state: TRootState) =>
  getTasksStateSelector(state).request;

export const getTasksErrorSelector = (state: TRootState) =>
  getTasksStateSelector(state).error;

export const getTasksIsLoading = (state: TRootState) =>
  getTasksStateSelector(state).isLoading;

export const getCurrentTaskSelector = (state: TRootState) =>
  getTasksStateSelector(state).currentTask;

export const getTasksListSelector = (state: TRootState) =>
  getTasksStateSelector(state).list;

export const getTasksEditorSelector = (state: TRootState) =>
  getTasksStateSelector(state).editor;

export const getTasksEditorTaskSelector = (state: TRootState) =>
  getTasksEditorSelector(state).task;
