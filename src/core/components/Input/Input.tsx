import * as React from "react";
import cn from "classnames";

import s from "./Input.module.css";

interface IProps {
  className?: string;
  type?: "text" | "email" | "password" | "number";

  title?: string;
  placeholder?: string;
  name: string;
  value: string;

  error?: string;

  onChange: (name: string, value: string) => void;
  onBlur?: () => void;
}

export const Input = ({
  className,
  type = "text",
  title,
  placeholder,
  name,
  value,
  error,
  onChange,
  onBlur,
}: IProps) => {
  const [inputValue, setInputValue] = React.useState<string>(value);

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
        className={cn(s.input, { [s.error]: error })}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
