import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121), #e94057;

    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;
