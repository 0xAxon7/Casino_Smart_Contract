import styled from "styled-components";

export const StyledArrowIcons = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 17px;
  color: #fff;

  button {
    width: 32px;
    height: 24px;
  }

  .arrow-style {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 6px;
    background: rgba(203, 215, 255, 0.03);
    cursor: pointer;

    &:hover {
      background: rgba(203, 215, 255, 0.055);
    }
  }
`;
