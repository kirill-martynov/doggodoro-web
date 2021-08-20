import { TRootState } from "@core/redux/reducer";

export const getSettingsStateSelector = (state: TRootState) => state.settings;

export const getSettingsTimerSelector = (state: TRootState) =>
  getSettingsStateSelector(state).timer;

export const getSettingsTimerWorkTimeSelector = (state: TRootState) =>
  getSettingsTimerSelector(state).work;

export const getSettingsTimerBreakTimeSelector = (state: TRootState) =>
  getSettingsTimerSelector(state).break;

export const getSettingsItemsSelector = (state: TRootState) => {
  const timerSettings = getSettingsTimerSelector(state);

  const timerSettingKeys = Object.keys(timerSettings);
  const timerSettingOptions = timerSettingKeys.map((timerOption) => ({
    name: timerOption,
    value: String(timerSettings[timerOption]),
  }));

  const options = [...timerSettingOptions];

  return options;
};
