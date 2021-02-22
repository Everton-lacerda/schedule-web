import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { IconBaseProps } from "react-icons/lib";
import { useField } from "@unform/core";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setisFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, , registerField]);

  return (
    <Container isFocused={isFocused} >
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setisFocused(true)} 
        onBlur={() => setisFocused(false)} 
        defaultValue={defaultValue} 
        ref={inputRef} 
        {...rest} 
        />
    </Container>
  );
};

export default Input;
