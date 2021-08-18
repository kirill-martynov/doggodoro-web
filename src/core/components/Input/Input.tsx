import * as React from "react";
import cn from "classnames";

import s from "./Input.module.css";

interface IProps {
  className?: string;
  type?: "text" | "email" | "password";

  title?: string;
  placeholder?: string;
  name: string;
  value: string;

  onChange: (name: string, value: string) => void;
}

export const Input = ({
  className,
  type = "text",
  title,
  placeholder,
  name,
  value,
  onChange,
}: IProps) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  React.useEffect(() => {
    onChange(name, inputValue);
  }, [inputValue]);

  const handleChange = (event) => {
    const { value } = event.target;

    setInputValue(value);
  };
  
  return (
    <div className={cn(s.inputWrapper, className)}>
      {title && (
        <label className={s.title} htmlFor={name}>
          {title}
        </label>
      )}
      <input
        className={s.input}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};