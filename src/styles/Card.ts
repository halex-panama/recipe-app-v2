import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    text-decoration: none;
    color: #000;
    text-align: center;
    font-size: 1.25rem;
  }
`;

export const CardImg = styled(motion.img)`
  border-radius: 1rem;
  max-width: 100%;
  height: auto;
`;
