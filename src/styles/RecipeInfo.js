import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin: 5rem 0;

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

export const ButtonInfo = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  font-weight: 600;
  cursor: pointer;
`;

export const Info = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  overflow: hidden;
  text-align: justify;

  img {
    min-height: 12.5rem;
    border-radius: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  li {
    font-size: 1rem;
    line-height: 2rem;
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 18rem;
    }
  }
`;
