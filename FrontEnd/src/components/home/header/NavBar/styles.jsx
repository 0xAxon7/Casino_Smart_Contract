import styled from "styled-components";

export const StyledNavBar = styled.div`
  .logo-container {
    display: flex;
  }

  .logo-container-mobile {
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .money-container {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  .rewards-container {
    z-index: 1000;
    position: fixed;
    max-width: 420px;
    transform: translateZ(0px);
    width: 100%;
    top: 60px;
  }

  .container-items {
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
`;
