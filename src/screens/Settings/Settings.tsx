import * as React from "react";

import { Heading } from "@core/components/Heading";

import s from "./Settings.module.css";
import { SettingsItem } from "./components/SettingsItem";

export function Settings() {
  const handleSettingsItem = (name: string, value: string) => {
    console.log("name", name);
    console.log("value", value);
  };

  return (
    <div className={s.settings}>
      <div className={s.header}>
        <Heading>Settings:</Heading>
      </div>

      <div className={s.content}>
        <SettingsItem
          name="Timer work time:"
          value=""
          onChange={handleSettingsItem}
        />
        <SettingsItem
          name="Timer break time:"
          value=""
          onChange={handleSettingsItem}
        />
      </div>
    </div>
  );
}
