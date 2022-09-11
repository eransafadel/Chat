import React from "react";
import { WrapperBtn } from "./Button.styles";

interface Props {
  title: string;
}

export const Button: React.FC<Props> = ({ title }) => {
  return <WrapperBtn type="submit">{title} </WrapperBtn>;
};

export default Button;
