import styled from "styled-components";

export const StyleAccountLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
