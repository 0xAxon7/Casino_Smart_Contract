import styled from "styled-components";

export const StyleSortByDropdown = styled.div`
  z-index: 1000;
  position: fixed;
  max-width: 200px;
  transform: translateZ(0px);
  width: 100%;

  height: 204px;
  max-height: 204px;
  top: 376.913px;
  left: 882.075px;

  .dropdown-container {
    height: 100%;
    border-radius: 6px;
    transform: translateZ(0px);
    width: 100%;
    background: rgb(31, 35, 48);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 8px -4px,
      rgba(0, 0, 0, 0.18) 0px 0px 20px 0px,
      rgba(0, 0, 0, 0.35) 0px 40px 34px -16px;
    overflow: hidden auto;
  }

  .options-container {
    padding: 10px;
  }

  .option {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;

    &:hover {
      background: rgba(15, 17, 26, 0.4);
    }
  }

  .active-option {
    background: rgba(15, 17, 26, 0.4);
    color: rgb(255, 176, 24);
  }
`;

export const StyleDropdown = styled.div`
  .dropdown-container {
    border-radius: 6px;
    transform: translateZ(0px);
    background: rgb(31, 35, 48);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 8px -4px,
      rgba(0, 0, 0, 0.18) 0px 0px 20px 0px,
      rgba(0, 0, 0, 0.35) 0px 40px 34px -16px;
    z-index: 9;
  }

  .options-container {
    padding: 10px;
  }

  .option {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 6px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;

    &:hover {
      background: rgba(15, 17, 26, 0.4);
    }
  }

  .active-option {
    background: rgba(15, 17, 26, 0.4);
    color: rgb(255, 176, 24);
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
