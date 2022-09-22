import React, { useState,useEffect } from "react";
import { FormContainer, Footer } from "./FormRegister.styles";
import Button from "./Button";
import Input from "./Input";
import { Link,useNavigate } from "react-router-dom";
import TitleBrand from "./TitleBrand";

import { EMPTY, InputArr, PASSWORD_LENGTH, USERNAME_LENGTH, USER_KEY_LCL_STRG } from "../macros";
import { User } from "../User";
import { toast, ToastContainer,ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRequest, registerRoute } from "../api/APIRoutes";

const FormRegister = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<User>(new User("", "", "", ""));
  const toastOptions:ToastOptions  = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(()=>{
    if(localStorage.getItem(USER_KEY_LCL_STRG))
        navigate('/')

  },[]);
  const handleSumbit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(handleValidation())
    
    {
      const { password, username, email } = values;
      const {data} =  await publicRequest.post(registerRoute,{
        username,
        email,
        password
      });

      if(data.status === false)
        toast.error(data.msg,toastOptions);
        if(data.status === true){
          localStorage.setItem(USER_KEY_LCL_STRG,JSON.stringify(data.others));
          navigate("/");
        }
        
      
   
      
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
    } else if (username.length < USERNAME_LENGTH) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < PASSWORD_LENGTH) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === EMPTY) {
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

export default FormRegister;
