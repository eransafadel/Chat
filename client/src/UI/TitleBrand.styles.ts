import styled from "styled-components";

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

export const ImageTitle = styled.img`
  height: 5rem;
  width: 3rem;
`;

export const TextTitle = styled.h1`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: transparent;

  font-weight: bold;

  ::after {
    content: attr(data-end);
    color: #00cc00;
  }

  background-image: linear-gradient(to right, #f00, #ff0, #0f0, #00f);
  -webkit-background-clip: text;
  animation: animate 20s linear infinite;
  background-size: 1000%;

  @keyframes animate {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0%;
    }

    100% {
      background-position: 0% 100%;
    }
  }
`;
