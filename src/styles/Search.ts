import styled from "styled-components";

export const FormStyle = styled.form`
  margin: 0 auto;
  position: relative;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 0.5rem 4rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;
