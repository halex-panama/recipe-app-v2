import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  border-radius: 1rem;
  position: relative;
  height: auto;
  min-height: 12.5rem;

  @media screen and (max-width: 768px) {
    height: 15rem;
  }

  p {
    text-decoration: none;
    color: #000;
    text-align: center;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

export const Skeleton = styled.div`
  border-radius: 1rem;
  height: 11rem;
  position: absolute;
  top: 0;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 12.5rem;
  }

  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const CardImg = styled(motion.img)`
  border-radius: 1rem;
  width: 100%;
`;
