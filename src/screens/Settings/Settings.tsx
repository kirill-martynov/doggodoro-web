import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Heading } from "@core/components/Heading";

import { SETTINGS_TITLES } from "./settingsConstants";
import { setSettingsItem } from "./state/thunks/settingsThunks";
import { getSettingsItemsSelector, getSettingsTimerSelector } from "./state/selectors/settingsSelectors";

import { SettingsItem } from "./components/SettingsItem";

import s from "./Settings.module.css";

export function Settings() {
  const dispatch = useDispatch();

  const settings = useSelector(getSettingsItemsSelector);
  const timerSettings = useSelector(getSettingsTimerSelector);

  const handleSettingsItem = (name: string, value: string) => {
    let item: any = { [name]: Number(value) };

    if (name === "work" || name === "break") {
      item = { timer: { ...timerSettings, ...item } };
    }

    dispatch(setSettingsItem(item));
  };

  return (
    <div className={s.settings}>
      <div className={s.header}>
        <Heading>Settings:</Heading>
      </div>

      <div className={s.content}>
        {settings.map((item) => (
          <SettingsItem
            key={item.name}
            name={item.name}
            value={item.value}
            title={SETTINGS_TITLES[item.name]}
            onChange={handleSettingsItem}
          />
        ))}
      </div>
    </div>
  );
}
