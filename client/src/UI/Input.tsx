import React from "react";
import { Wrapper } from "./Input.styles";

interface Props {
  type: string;
  placeholder: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ type, placeholder, name, handleChange }) => {
  return (
    <Wrapper
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
    />
  );
};

export default Input;
