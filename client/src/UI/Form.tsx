import React, { useState } from "react";
import { FormContainer, Footer } from "./Form.styles";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import TitleBrand from "./TitleBrand";

import { InputArr } from "../macros";
import { User } from "../User";
import { toast, ToastContainer,ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { publicRequest, registerRoute } from "../api/APIRoutes";

const Form = () => {
  const [values, setValues] = useState<User>(new User("", "", "", ""));
  const toastOptions:ToastOptions  = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSumbit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(handleValidation())
    console.log(registerRoute);
    {
      const { password, confirmPassword, username, email } = values;
      const {data} =  await publicRequest.post(registerRoute,{
        username,
        email,
        password
      })
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };



  return (
    <>
      <FormContainer
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleSumbit(event)
        }
      >
        <TitleBrand />
        {InputArr.map((item, index) => (
          <Input
            key={index}
            type={item.type}
            placeholder={item.placeholder}
            name={item.name}
            handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
          />
        ))}

        <Button title="Create User" />
        <Footer>
          Already have an account ? <Link to="/login">Login.</Link>
        </Footer>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default Form;
