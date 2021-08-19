import * as React from "react";
import cn from "classnames";

import s from "./SettingsItem.module.css";
import { Input } from "@core/components/Input";

interface IProps {
  className?: string;
  name: string;
  value: string;

  onChange: (name: string, value: string) => void;
}

export const SettingsItem = ({ className, name, value, onChange }: IProps) => {
  const [settingItemValue, setSettingItemValue] = React.useState<string>("");

  React.useEffect(() => {
    onChange(name, settingItemValue);
  }, [settingItemValue]);

  return (
    <div className={cn(s.settingsItem, className)}>
      <span className={s.name}>{name}</span>

      <Input
        className={s.field}
        type="text"
        name={name}
        value={value}
        onChange={setSettingItemValue}
      />
    </div>
  );
};
