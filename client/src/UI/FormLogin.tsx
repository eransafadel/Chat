import React, { useState } from "react";
import { FormContainer, Footer } from "./FormRegister.styles";
import Button from "./Button";
import Input from "./Input";
import { Link,useNavigate } from "react-router-dom";
import TitleBrand from "./TitleBrand";

import { EMPTY, InputArrLogin} from "../macros";
import { UserLogin } from "../User";
import { toast, ToastContainer,ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRequest, loginRoute } from "../api/APIRoutes";

const FormLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<UserLogin>(new UserLogin("", ""));
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
    
    {
      const { password, username } = values;
      const {data} =  await publicRequest.post(loginRoute,{
        username,
        password
      });

      if(data.status === false)
        toast.error(data.msg,toastOptions);
        if(data.status === true){
          localStorage.setItem('chat-app-user',JSON.stringify(data.others));
          navigate("/");
        }
        
      
   
      
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === EMPTY || username.length=== 0 ) {
      toast.error("username and password is required!", toastOptions);
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
        {InputArrLogin.map((item, index) => (
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

        <Button title="Login In" />
        <Footer>
          Dont have an account ? <Link to="/register">Register</Link>
        </Footer>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default FormLogin;
