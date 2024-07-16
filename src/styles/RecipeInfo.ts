import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  isLoaded: boolean;
};

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem 0;
  gap: 1.5rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ButtonInfo = styled(motion.button)`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  font-weight: 600;
  cursor: pointer;

  @media screen and (max-width: 325px) {
    padding: 1rem 1.5rem;
  }
`;

export const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 0.5rem;

  width: 100%;
  overflow: hidden;
  text-align: justify;

  p {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  ul,
  ol {
    list-style-position: inside;
    padding: 0 10px;
  }

  li {
    font-size: 1rem;
    line-height: 2rem;
  }
`;

export const ImageContainer = styled.div<Props>`
  border-radius: 1rem;
  overflow: hidden;
  min-height: 300px;

  @media screen and (max-width: 425px) {
    min-height: 200px;
  }

  animation: ${({ isLoaded }) =>
    isLoaded ? "none" : "skeleton-loading 1s linear infinite alternate"};

  @keyframes skeleton-loading {
    0% {
      background-color: ${({ isLoaded }) =>
        isLoaded ? "none" : "hsl(200, 20%, 80%)"};
    }
    100% {
      background-color: ${({ isLoaded }) =>
        isLoaded ? "none" : "hsl(200, 20%, 95%)"};
    }
  }
`;
