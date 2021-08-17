import { tasksActions } from "../actions/tasksActions";

import { TASK_LIST } from "../../../../../data/tasks";

export const getTasks = () => async (dispatch: any) => {
  const { getTasksRequest, getTasksSuccess, getTasksFailure } = tasksActions;

  dispatch(getTasksRequest());

  try {
    dispatch(getTasksSuccess(TASK_LIST));
  } catch (error) {
    console.error(error);

    dispatch(getTasksFailure(error));
  }
};

export const addTask = (task = {}) => async (dispatch: any) => {
  const { addTaskRequest, addTaskSuccess, addTaskFailure } = tasksActions;

  dispatch(addTaskRequest());

  try {
    dispatch(addTaskSuccess(task))
  } catch (error) {
    console.error(error);

    dispatch(addTaskFailure(error))
  }
}

export const removeTask = (id: number | string) => async (dispatch: any) => {
  const { removeTaskRequest, removeTaskSuccess, removeTaskFailure } = tasksActions;

  dispatch(removeTaskRequest());

  try {
    dispatch(removeTaskSuccess(id))
  } catch (error) {
    console.error(error);

    dispatch(removeTaskFailure(error))
  }
}
