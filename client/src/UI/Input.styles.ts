import styled from "styled-components";

export const Wrapper = styled.input`
  background-color: transparent;
  padding: 1rem;
  border: 0.1rem solid #4e0eff;
  border-radius: 0.4rem;
  color: white;
  width: 100%;
  font-size: 1rem;

  &:focus {
    border: 0.1rem solid #997af0;
    outline: none;
  }
`;
