import React, { useState } from "react";
import Form from "../UI/Form";
import { Container } from "./Register.styles";
const Register = () => {
  const [values,setValues] = useState()
  return (
    <Container>
      <Form />
    </Container>
  );
};

export default Register;
