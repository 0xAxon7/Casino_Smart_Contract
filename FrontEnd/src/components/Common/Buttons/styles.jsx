import styled from "styled-components";

export const StyledFilterButtonGroup = styled.div`
  .btn-container {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .button {
    display: flex;
    width: auto;
    height: 24px;
    padding: 4px 9px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;

    color: #686d7b;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }
  }

  .btn-active {
    background: rgba(203, 215, 255, 0.03);
    color: #fff;
  }
`;
