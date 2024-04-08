import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  border-radius: 1rem;

  p {
    color: #000;
    text-align: center;
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const CardImg = styled(motion.img)`
  border-radius: 1rem;
  max-width: 100%;
  height: auto;
`;
