import { ETasksActionTypes } from "../actionTypes/tasksActionTypes";

const initialState = {
  request: null,
  error: null,
  isLoading: false,
  currentTask: "",
  list: [],
};

export function tasksReducer(state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case ETasksActionTypes.ADD_TASK_REQUEST:
      return { ...state, isLoading: true };
    case ETasksActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, payload.task],
      };
    case ETasksActionTypes.ADD_TASK_FAILURE: {
      return { ...state, isLoading: false, error: payload.error };
    }

    case ETasksActionTypes.REMOVE_TASK_REQUEST:
      return { ...state, isLoading: true };
    case ETasksActionTypes.REMOVE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter((item: any) => item.id !== payload.id),
      };
    case ETasksActionTypes.REMOVE_TASK_FAILURE: {
      return { ...state, isLoading: false, error: payload.error };
    }

    case ETasksActionTypes.GET_TASKS_REQUEST:
      return { ...state, isLoading: true };
    case ETasksActionTypes.GET_TASKS_SUCCESS:
      return { ...state, isLoading: false, list: payload.tasks };
    case ETasksActionTypes.GET_TASKS_FAILURE: {
      return { ...state, isLoading: false, error: payload.error };
    }

    case ETasksActionTypes.SET_CURRENT_TASK:
      return { ...state, currentTask: payload.currentTask };

    default:
      return state;
  }
}
