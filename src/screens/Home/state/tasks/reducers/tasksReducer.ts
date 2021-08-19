import { listenerCount } from "events";
import { ETasksActionTypes } from "../actionTypes/tasksActionTypes";

const initialState = {
  request: null,
  error: null,
  isLoading: false,
  currentTask: {},
  editor: {
    task: {},
  },
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

    case ETasksActionTypes.EDIT_TASK_REQUEST:
      return { ...state, isLoading: true };
    case ETasksActionTypes.EDIT_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.map((item: any) => {
          if (item.id === payload.task.id) {
            return { ...payload.task }
          }

          return item;
        }),
      };
    case ETasksActionTypes.EDIT_TASK_FAILURE: {
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
      return { ...state, currentTask: payload.task };

    case ETasksActionTypes.SET_EDITOR_TASK:
      return {
        ...state,
        editor: { task: payload.task },
      };

    default:
      return state;
  }
}
