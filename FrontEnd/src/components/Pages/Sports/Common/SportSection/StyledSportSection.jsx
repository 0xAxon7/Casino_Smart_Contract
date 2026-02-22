import styled from "styled-components";

export const SportSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .section-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 26px;
    gap: 8px;

    .title {
      font-size: 22px;
      font-weight: 700;
      color: #fff;
    }
  }
`;

export const StyledSportSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-template-columns: ${({ numColumns, containerWidth }) => {
    return numColumns ? `repeat(${numColumns}, 1fr); ` : "";
  }};

  gap: 16px;
`;
