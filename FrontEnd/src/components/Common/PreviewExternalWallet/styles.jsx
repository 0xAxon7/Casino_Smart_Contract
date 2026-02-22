import styled from "styled-components";

export const StylePreviewExternalWallet = styled.div`
  border-radius: 8px;
  background: rgba(203, 215, 255, 0.03);
  padding: 16px;
  margin-top: 20px;

  .content-container {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 48px 24px;
    border-radius: 8px;
    background: rgb(26, 29, 41);
  }

  .info-text {
    line-height: 1.6;
    text-align: center;
    color: rgb(177, 182, 198);
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
  }

  .install-button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    white-space: nowrap;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 40px;
    padding: 0px 20px;
    border-radius: 8px;
    font-weight: 800;
    font-style: normal;
    font-size: 14px;
    color: rgb(20, 23, 34);
    background: rgb(255, 232, 26);
    box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 135, 25) 0px 0px 12px inset;

    &:hover {
      filter: brightness(110%);
    }
  }
`;
