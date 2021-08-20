import { ESettingsActionTypes } from "../actionTypes/settingsActionTypes";

export const settingsActions = {
  setSettingsItemRequest: () => {
    return {
      type: ESettingsActionTypes.SET_SETTINGS_ITEM_REQUEST,
    } as const;
  },
  setSettingsItemSuccess: (item: any) => {
    return {
      type: ESettingsActionTypes.SET_SETTINGS_ITEM_SUCCESS,
      payload: { item },
    } as const;
  },
  setSettingsItemFailure: (error: any) => {
    return {
      type: ESettingsActionTypes.SET_SETTINGS_ITEM_FAILURE,
      payload: { error },
    } as const;
  },
};
