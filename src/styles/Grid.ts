import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2.5rem;
  margin: 2rem 0;

  a {
    text-decoration: none;
  }
`;
