import { ETasksActionTypes } from "../actionTypes/tasksActionTypes";

export const tasksActions = {
  addTaskRequest: () => {
    return {
      type: ETasksActionTypes.ADD_TASK_REQUEST,
    } as const;
  },
  addTaskSuccess: (task: any) => {
    return {
      type: ETasksActionTypes.ADD_TASK_SUCCESS,
      payload: { task },
    } as const;
  },
  addTaskFailure: (error: string) => {
    return {
      type: ETasksActionTypes.ADD_TASK_FAILURE,
    } as const;
  },

  removeTaskRequest: () => {
    return {
      type: ETasksActionTypes.REMOVE_TASK_REQUEST,
    } as const;
  },
  removeTaskSuccess: (id: number | string) => {
    return {
      type: ETasksActionTypes.REMOVE_TASK_SUCCESS,
      payload: { id },
    } as const;
  },
  removeTaskFailure: (error: string) => {
    return {
      type: ETasksActionTypes.REMOVE_TASK_FAILURE,
    } as const;
  },

  getTasksRequest: () => {
    return {
      type: ETasksActionTypes.GET_TASKS_REQUEST,
    } as const;
  },
  getTasksSuccess: (tasks: any[]) => {
    return {
      type: ETasksActionTypes.GET_TASKS_SUCCESS,
      payload: { tasks },
    } as const;
  },
  getTasksFailure: (error: string) => {
    return {
      type: ETasksActionTypes.GET_TASKS_FAILURE,
      payload: { error },
    } as const;
  },

  setCurrentTask: (task: any) => {
    return {
      type: ETasksActionTypes.SET_CURRENT_TASK,
      payload: { task },
    } as const;
  },
};
