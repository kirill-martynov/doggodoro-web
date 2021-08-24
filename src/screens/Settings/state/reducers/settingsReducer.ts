import { ESettingsActionTypes } from "../actionTypes/settingsActionTypes";

const initialState = {
  notifications: false,
  timer: {
    work: 25,
    break: 5,
  },
};

export function settingsReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case ESettingsActionTypes.SET_SETTINGS_ITEM_REQUEST:
      return { ...state };
    case ESettingsActionTypes.SET_SETTINGS_ITEM_SUCCESS:
      return { ...state, ...payload.item };
    case ESettingsActionTypes.SET_SETTINGS_ITEM_FAILURE:
      return { ...state };

    default:
      return state;
  }
}
