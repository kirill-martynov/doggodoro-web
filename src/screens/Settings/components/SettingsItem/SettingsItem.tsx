import * as React from "react";
import cn from "classnames";

import s from "./SettingsItem.module.css";
import { Input } from "@core/components/Input";

interface IProps {
  className?: string;
  name: string;
  value: string;
  title: string;

  onChange: (name: string, value: string) => void;
}

export const SettingsItem = ({
  className,
  name,
  value,
  title,
  onChange,
}: IProps) => {
  const [settingItemValue, setSettingItemValue] = React.useState<string>(value);

  const handleValueChange = (_: string, value: string) => {
    setSettingItemValue(value);
  };

  const handleBlur = () => {
    if (settingItemValue === value) {
      return;
    }

    onChange(name, settingItemValue);
  };

  return (
    <div className={cn(s.settingsItem, className)}>
      <span className={s.name}>{title}</span>

      <Input
        className={s.field}
        type="number"
        name={name}
        value={settingItemValue}
        onChange={handleValueChange}
        onBlur={handleBlur}
      />
    </div>
  );
};
