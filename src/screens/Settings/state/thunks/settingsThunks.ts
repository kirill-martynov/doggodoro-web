import { settingsActions } from "../actions/settingsActions";

export const setSettingsItem = (item: any) => async (dispatch) => {
  const {
    setSettingsItemRequest,
    setSettingsItemSuccess,
    setSettingsItemFailure,
  } = settingsActions;

  dispatch(setSettingsItemRequest());

  try {
    dispatch(setSettingsItemSuccess(item));
  } catch (error) {
    dispatch(setSettingsItemFailure(error));
  }
};
