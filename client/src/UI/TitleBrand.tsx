import React from "react";
import { Brand, ImageTitle, TextTitle } from "./TitleBrand.styles";
import { TITLE_NAME } from "../macros";
import Logo from "../assets/logo.svg";

const TitleBrand = () => {
  return (
    <Brand>
      <ImageTitle src={Logo} alt="Logo" />
      <TextTitle data-end=".">{TITLE_NAME}</TextTitle>

    </Brand>
  );
};

export default TitleBrand;
