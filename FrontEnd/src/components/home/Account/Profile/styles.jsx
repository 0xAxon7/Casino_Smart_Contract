import styled from "styled-components";

export const StyleProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1170px;
  gap: 12px;
  background: #1a1d29;
  color: #b1b6c6;

  .section-container {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    padding: 24px;
    margin-bottom: 24px;

    .section-title {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 24px;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      gap: 12px;
      font-weight: 800;
      font-style: normal;
      font-size: 14px;
    }

    .title-status {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      gap: 16px;

      .status {
        display: flex;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;

        svg {
          fill: currentcolor;
          width: 16px;
          min-width: 16px;
          height: auto;
        }
      }
    }

    .btn-show {
      text-transform: none;
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
      cursor: pointer;
      color: rgb(255, 176, 24);

      &:hover {
        color: rgb(255, 176, 24);
        text-decoration: underline;
      }
    }
  }

  .input-label {
    text-transform: uppercase;
    color: rgb(177, 182, 198);
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 800;
    font-style: normal;
  }

  .input-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 50px;
    min-height: 50px;
    width: 100%;
    padding: 0px 5px 0px 15px;
    border-radius: 6px;
    border: 1px solid transparent;
    background: rgba(15, 17, 26, 0.55);
    transition: background 0.1s ease 0s;

    &:focus-within {
      border: 1px solid rgb(255, 255, 193);
      box-shadow: rgb(255, 252, 57) 0px 0px 1px inset,
        rgb(255, 93, 0) 0px 0px 4px;
    }

    input {
      width: 100%;
      height: 100%;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-style: normal;
      font-size: 15px;

      outline: none;
      border: none;
      background: none;
      overflow: visible;
    }
  }

  .change-button {
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
    height: 30px;
    padding: 0px 14px;
    border-radius: 6px;
    font-weight: 700;
    font-style: normal;
    font-size: 13px;
    color: rgb(20, 23, 34);
    background: rgb(255, 232, 26);
    box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 135, 25) 0px 0px 9px inset;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &:hover {
      filter: brightness(110%);
    }
  }

  .checkbox-container {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 16px;
    min-height: 50px;
    padding: 0px 16px;

    .input-checkbox {
      box-sizing: border-box;
      padding: 0;
      display: none;
    }
  }

  .social-media {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 16px;
    min-height: 50px;
    padding: 0px 16px;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    color: #b1b6c6;
  }

  .svg {
    fill: currentcolor;
    width: 18px;
    min-width: 18px;
    height: auto;
  }

  .subtitle-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(177, 182, 198);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;

    .text-icon {
      display: flex;
      align-items: center;
    }

    .total {
      span {
        margin-left: 4px;
        color: rgb(114, 242, 56);
      }
    }
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
  }

  .referral-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    transition: all 0.1s ease 0s;
    appearance: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    user-select: none;
    height: 30px;
    padding: 0px 14px;
    border-radius: 6px;
    font-weight: 700;
    font-style: normal;
    font-size: 13px;
    color: rgb(20, 23, 34);
    background: rgb(134, 244, 84);
    box-shadow: rgba(118, 255, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(59, 198, 14) 0px 0px 9px inset;

    &:hover {
      filter: brightness(110%);
    }
  }

  .section-divider {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgb(48, 53, 69);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
  }

  .submit-button {
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

    &:not(:disabled) {
      &:hover {
        filter: brightness(110%);
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  .required {
    color: rgb(255, 73, 73);
    vertical-align: middle;
    font-size: 12px;
  }

  .description-text {
    margin: 0px 0px 16px;
    line-height: 1.6;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
  }

  .title-button {
    display: flex;
    align-items: center;
  }

  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 4px;
  }
`;

export const StyledUserContainer = styled.div`
  border-radius: 8px;
  background: rgba(203, 215, 255, 0.03);
  padding: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  .rank-logo {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 70px;
    width: 70px;
    min-height: 70px;
    height: 70px;

    img {
      width: 96%;
    }
  }

  .user-info-container {
    flex: 1 1 0%;
    min-width: 0px;
    padding-left: 24px;
    width: 100%;
  }

  .user-name {
    padding-bottom: 16px;
    max-width: 100%;
    color: rgb(255, 255, 255);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 24px;
  }

  .progress-bar {
    width: 100%;
    height: 5px;
    border-radius: 99px;
    background: linear-gradient(
      90deg,
      rgb(229, 164, 128) 0%,
      rgb(229, 164, 128) 0%,
      rgba(203, 215, 255, 0.1) 0%,
      rgba(203, 215, 255, 0.1) 100%
    );
  }

  .level-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 8px;

    .level-section {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding-top: 5px;
      column-gap: 6px;

      .rank-info {
        color: rgb(177, 182, 198);
        font-weight: 500;
        font-style: normal;
        font-size: 12px;
      }
      .rank-title {
        text-transform: uppercase;
        color: rgb(229, 164, 128);
        font-weight: 700;
        font-style: normal;
        font-size: 12px;
      }

      .rank-small-logo {
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        min-width: 24px;
        width: 24px;
        min-height: 24px;
        height: 24px;

        img {
          width: 72%;
        }
      }
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
