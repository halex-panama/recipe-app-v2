import styled from "styled-components";

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;

export const Card = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  min-height: 20rem;
  position: relative;
  transition: 0.2s;

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    transform: scale(1.025);
    border-radius: 0;

    img {
      border-radius: 0;
    }
  }
`;
