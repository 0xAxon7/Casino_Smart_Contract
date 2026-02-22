import styled from "styled-components";

export const StyledMyBetsNavigation = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-wrap: wrap;

  .options {
    width: 100%;
    overflow: hidden;
  }

  .dropdown-bets {
    min-width: 304px;
  }
`;

export const StyledNavigationHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  .content-wrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
    overflow: auto hidden;
    width: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledNavHeaderBtn = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 32px;
  min-height: 32px;
  padding: 0 16px;
  border-radius: 24px;
  transition: all 0.1s ease 0s;
  font-size: 14px;
  user-select: none;
  cursor: pointer;
  text-transform: none;

  font-weight: 500;
  font-style: normal;

  color: ${({ isActive }) =>
    isActive ? "rgb(23, 25, 36)" : "rgb(255,255,255)"};
  background: ${({ isActive }) =>
    isActive ? "rgb(255, 232, 26)" : "rgb(33, 37, 50)"};
  box-shadow: ${({ isActive }) =>
    isActive
      ? "rgba(255, 255, 255, 0.2) 0px 1px 0px inset,rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(255, 176, 25) 0px 0px 15px inset"
      : "none"};

  .btn-icon {
    margin: 0px 8px 0px -1px;
  }

  &:hover {
    background: ${({ isActive }) => !isActive && "rgb(33, 37, 50, 0.5)"};
  }
`;

export const StyleDropdownMyBets = styled.div`
  .container-dropdown {
    min-width: 304px;
  }

  .date-picker {
    position: relative;
  }

  .date-input {
    color: rgb(255, 255, 255);
    width: 100%;
    border: 1px solid rgb(33, 37, 50);
    cursor: pointer;
    height: 32px;
    padding: 0px 16px;
    position: relative;
    font-size: 12px;
    background: rgb(33, 37, 50);
    box-shadow: none;
    box-sizing: border-box;
    font-weight: 600;
    line-height: 32px;
    border-radius: 15px;
  }

  .icon-dropdown {
    width: 16px;
    height: 16px;

    top: 50%;
    right: 8px;
    position: absolute;
    margin-top: -8px;
    transform: rotate(0deg);

    color: inherit;
    display: flex;
    transition: all 0.3s;
    align-items: center;
    justify-content: center;
  }

  .dropdown-container {
    top: 40px;
    left: 0px;
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 16px 8px 8px;
    z-index: 11;
    position: absolute;
    background: rgb(33, 37, 50);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 16px;
    box-sizing: border-box;
    border-radius: 4px;
    z-index: 9;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
  }

  .container-option {
    flex: 1 1 auto;
    margin: 8px;
    display: inline-block;
  }

  .option {
    color: rgba(255, 255, 255, 0.5);
    width: 100%;
    background: rgb(43, 46, 59);
    text-align: center;
    font-weight: 600;
    line-height: initial;
    border-radius: 8px;
    justify-content: center;
    height: 32px;
    font-size: 12px;
    cursor: pointer;
    display: inline-flex;
    padding: 0 16px;
    position: relative;
    box-sizing: border-box;
    transition: background 0.5s, opacity 0.5s, color 0.5s;
    align-items: center;
    user-select: none;
    vertical-align: middle;

    &:hover {
      color: rgb(255, 255, 255);
      opacity: 1;
      background: rgba(43, 46, 59, 0.5);
    }
  }

  .active-option {
    color: rgb(23, 25, 36);
    opacity: 1;
    background: rgb(255, 232, 26);
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 176, 25) 0px 0px 15px inset;
  }

  .dropdown-button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 48px;
    border-radius: 8px;
    font-size: 14px;

    font-weight: 500;
    font-style: normal;
    text-transform: none;
    background: rgba(203, 215, 255, 0.03);
    padding: 0px 12px 0px 16px;
    max-width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(177, 182, 198);
  }

  .options-list {
    padding-top: 10px;
  }

  .no-results {
    padding: 20px 10px 10px;
    color: rgb(103, 109, 124);
    font-size: 14px;
    font-weight: 700;
    font-style: normal;
  }
`;
