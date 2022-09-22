import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
`;

export const TitleAvatar = styled.h1`
  color: white;
`;

export const Avatars = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Avatar = styled.div`
  border: 0.4rem solid transparent;
  padding: 0.4rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  img {
    height: 6rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #4e0eff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: #4e0eff;
  }
`;
