import styled from "styled-components";

export const StyledMobileNavBar = styled.div`
  position: fixed;
  z-index: 90;
  bottom: 0px;
  left: 0px;
  height: 54px;
  width: 100%;

  svg {
    fill: currentColor;
    width: 20px;
    height: 20px;
    color: #b1b6c6;
  }

  .buttons-container {
    padding: 0px 16px 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;
    color: rgb(255, 255, 255);
    background: rgb(26, 29, 41);
    border-top: 1px solid rgba(0, 0, 0, 0.35);
  }

  button {
    margin: 0 !important;
  }

  .button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    white-space: nowrap;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 40px;
    border-radius: 8px;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 14px;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    background: rgba(203, 215, 255, 0.03);

    padding: 0px 16px 3px;

    &:hover {
      background: rgba(203, 215, 255, 0.055);
    }
  }
`;
