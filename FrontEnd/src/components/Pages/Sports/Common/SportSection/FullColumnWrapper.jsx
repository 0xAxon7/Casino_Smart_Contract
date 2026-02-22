import styled from "styled-components";

export const FullColumnWrapper = styled.div`
  z-index: 2;

  display: flex;
  height: auto;
  padding: 30px 16px;
  align-items: center;
  justify-content: center;
  gap: 24px;

  border-radius: 6px;
  border: 1px solid #212532;
  background: #212532;
  color: #fff;

  grid-column-start: ${({ numColumns }) => numColumns};
  grid-column-end: ${({ numColumns }) => numColumns};
  grid-row-start: ${({ numColumns }) => (numColumns === 1 ? 0 : 1)};
  grid-row-end: ${({ numColumns }) => (numColumns === 1 ? 0 : 4)};
`;
