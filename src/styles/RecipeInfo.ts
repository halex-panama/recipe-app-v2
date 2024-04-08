import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem 0;
  gap: 1.5rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  @media screen and (max-width: 768px) {
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
`;

export const Info = styled(motion.div)`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  width: 100%;
  overflow: hidden;
  text-align: justify;

  img {
    min-height: 12.5rem;
    border-radius: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  ul,
  ol {
    list-style-position: inside;
  }

  li {
    font-size: 1rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
