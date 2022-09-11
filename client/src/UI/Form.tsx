import React from "react";
import { FormContainer, Footer } from "./Form.styles";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import TitleBrand from "./TitleBrand";

import {InputArr} from "../macros";

const Form = () => {
  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <>
      <FormContainer
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleSumbit(event)
        }
      >
        <TitleBrand />
        {InputArr.map((item,index)=>
          <Input
          key={index}
          type={item.type}
          placeholder={item.placeholder}
          name={item.name}
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event)}/>
        )}
      

        <Button title="Create User" />
        <Footer>
          Already have an account ? <Link to="/login">Login.</Link>
        </Footer>
      </FormContainer>
    </>
  );
};

export default Form;
