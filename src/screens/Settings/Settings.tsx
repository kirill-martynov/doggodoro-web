import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Heading } from "@core/components/Heading";

import { SETTINGS_TITLES } from "./settingsConstants";
import { getSettingsItemsSelector } from "./state/selectors/settingsSelectors";
import { SettingsItem } from "./components/SettingsItem";

import s from "./Settings.module.css";
import { setSettingsItem } from "./state/thunks/settingsThunks";

export function Settings() {
  const dispatch = useDispatch();

  const settings = useSelector(getSettingsItemsSelector);

  const handleSettingsItem = (name: string, value: string) => {
    const item = { [name]: Number(value) };

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
