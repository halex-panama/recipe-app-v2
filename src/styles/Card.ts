import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  isLoaded: boolean;
};

export const Card = styled(motion.div)`
  p {
    text-decoration: none;
    color: #000;
    text-align: center;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

export const ImageContainer = styled.div<Props>`
  overflow: hidden;
  min-height: 150px;
  border-radius: 0.5rem;

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

  @media screen and (max-width: 694px) {
    min-height: 200px;
  }

  .lazy-img {
    border-radius: 0.5rem;
  }
`;
