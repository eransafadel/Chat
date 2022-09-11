import React from "react";
import { FormContainer, Footer } from "./Form.styles";
import Button from "./Button";
import Input from "./Input";
import { Link } from "react-router-dom";
import TitleBrand from "./TitleBrand";

// type FormProps = {
//     children: React.ReactNode; // 👈️ type children
//   };

const Form = () => {
  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <FormContainer
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleSumbit(event)
        }
      >
        <TitleBrand />
        <Input
          type="text"
          placeholder="Username"
          name="username"
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
        />

        <Button title="Create User" />
        <Footer>
          Already have an account ? <Link to="/login">Login.</Link>
        </Footer>
      </FormContainer>
    </>
  );
};

export default Form;
