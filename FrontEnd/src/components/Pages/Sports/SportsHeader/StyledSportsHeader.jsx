import styled from "styled-components";

export const StyledSportsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  gap: 10px;
  position: relative;
  background: #2b2e3b;

  .navigation-options {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 16px;
    width: 100%;
  }

  .navigation-actions {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;

export const StyledSportNavOption = styled.div`
  color: ${({ isActive }) =>
    isActive ? "rgb(255, 232, 26)" : "rgb(177, 182, 198)"};
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;

  .fire-icon {
    color: #e23838;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    display: flex;
    z-index: 2;
    position: absolute;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    background-color: #fff;
  }

  svg {
    width: auto;
    height: 32px;
  }
`;
