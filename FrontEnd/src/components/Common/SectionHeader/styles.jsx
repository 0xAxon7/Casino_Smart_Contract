import styled from "styled-components";

export const StyledSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  flex-wrap: wrap;
  gap: 8px;

  svg {
    color: #fff;
  }

  .icon-group {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .casino-text {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .view-all-text {
    color: #ffb018;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;

    &:hover {
      text-decoration: underline;
    }
  }

  .recommended-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 8px;
    gap: 10px;
    border-radius: 4px;
    background: rgba(203, 215, 255, 0.03);
  }

  .recommended-button-text {
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
  }
`;
