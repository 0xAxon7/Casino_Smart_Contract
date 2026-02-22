import styled from "styled-components";

export const StyledCashierModal = styled.div`
  width: 100%;
  padding: 24px 40px 40px;
`;

export const StyledModalContent = styled.div`
  .title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 24px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    word-break: break-word;
    gap: 12px;
    font-size: 22px;
    font-weight: 800;
  }

  .options {
    display: grid;
    -webkit-box-align: stretch;
    align-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }

  .option {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    display: inline-block;
    padding: 20px;
    cursor: pointer;

    .icons-container {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 14px;

      .multiple-icons {
        display: grid;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        gap: 6px;
        grid-template-columns: 1fr 1fr 1fr;
      }

      .icon-img {
        display: inline-block;
        border-radius: 999px;
        width: 32px;
        min-width: 32px;
        height: auto;
      }

      .nft-img {
        display: block;
        height: 32px;
      }

      .paying-methods {
        display: grid;
        -webkit-box-align: center;
        place-items: center;
        gap: 16px 12px;
        grid-template-columns: 1fr 1fr;
      }
    }

    .option-title {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      /* margin-bottom: 14px; */
      color: #fff;
    }

    .option-subtitle {
      margin-top: 4px;
      color: rgb(177, 182, 198);
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
    }
  }
`;

export const StyledNavigationCashier = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 6px;
  max-width: 100%;
  margin-bottom: 24px;

  .options-container {
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 12px;
    white-space: nowrap;
    overflow: auto hidden;

    .option {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 40px;
      min-height: 40px;
      padding: 0px 16px;
      border-radius: 8px;
      color: rgb(177, 182, 198);
      background: rgba(203, 215, 255, 0.03);
      text-transform: uppercase;
      transition: all 0.1s ease 0s;
      font-size: 14px;
      font-weight: 800;
      font-style: normal;
      cursor: pointer;
      user-select: none;

      &:hover {
        background: rgba(203, 215, 255, 0.075);
      }
    }

    .active-option {
      cursor: default;
      background: rgba(203, 215, 255, 0.075);
      color: rgb(255, 255, 193);
      text-shadow: rgb(255, 93, 0) 0px 0px 10px;

      &:hover {
        background: rgba(203, 215, 255, 0.075);
      }
    }
  }

  .next-btn {
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
    height: 30px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    text-transform: none;
    background: rgba(203, 215, 255, 0.03);
    width: 28px;
    padding: 0px;
    color: rgb(177, 182, 198);

    svg {
      fill: currentcolor;
      width: 6px;
      min-width: 6px;
      height: auto;
    }
  }
`;

export const StyledCouponsContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 24px;

  img {
    display: inline-block;
    flex: 0 0 auto;
    line-height: 0;
    width: 153px;
    min-width: 153px;
    height: auto;
  }

  .title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 24px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    word-break: break-word;
    gap: 12px;
    font-size: 22px;
    font-weight: 800;
    font-style: normal;
  }

  .input-container {
    width: 100%;
    max-width: 220px;
    margin-bottom: 24px;

    input {
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

      width: 100%;
      height: 100%;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-style: normal;
      font-size: 15px;
      overflow: visible;
      background: rgba(15, 17, 26, 0.55);

      &:focus-within {
        border: 1px solid rgb(255, 255, 193);
        box-shadow: rgb(255, 252, 57) 0px 0px 1px inset,
          rgb(255, 93, 0) 0px 0px 4px;
      }
    }
  }

  .info-text {
    font-size: 14px;
    font-weight: 500;
    font-style: normal;

    a {
      cursor: pointer;
      color: rgb(255, 176, 24);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .claim-button {
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
    background: rgb(134, 244, 84);
    box-shadow: rgba(118, 255, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(59, 198, 14) 0px 0px 12px inset;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const StyledBitcoinContent = styled.div`
  .title-actions {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 24px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    word-break: break-word;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 22px;
    font-weight: 800;
    font-style: normal;

    .back-button {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      height: 32px;
      width: 32px;
      cursor: pointer;
      user-select: none;

      svg {
        fill: currentcolor;
        width: 9px;
        min-width: 9px;
        height: auto;
      }
    }

    .coin-img {
      display: inline-block;
      border-radius: 999px;
      width: 32px;
      min-width: 32px;
      height: auto;
    }

    .underline-text {
      text-transform: none;
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
      cursor: pointer;
      color: rgb(255, 176, 24);

      &:hover {
        text-decoration: underline;
        color: rgb(255, 176, 24);
      }
    }
  }

  .buy-crypto-text {
    margin-bottom: 16px;
    line-height: 1.6;
    color: rgb(177, 182, 198);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;

    span {
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: rgb(255, 176, 24);
      }
    }
  }

  .warning-text {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 12px;
    margin-bottom: 16px;
    line-height: 1.6;
    color: rgb(255, 176, 24);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;

    svg {
      fill: currentcolor;
      width: 20px;
      min-width: 20px;
      height: auto;
      filter: drop-shadow(rgba(255, 176, 24, 0.6) 0px 0px 5px);
    }
  }

  .qr-code-container {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    padding: 24px;

    .info-text {
      margin-bottom: 16px;
      line-height: 1.6;
      color: rgb(177, 182, 198);
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
    }

    .question-text {
      margin-top: 16px;
      color: rgb(177, 182, 198);
      font-size: 12px;
      font-weight: 500;
      font-style: normal;

      span {
        cursor: pointer;
        color: rgb(255, 176, 24);

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .qr-code {
      width: 150px;
      height: 150px;
      margin-left: 32px;
    }

    .label {
      display: inline-block;

      text-transform: uppercase;
      color: rgb(177, 182, 198);
      margin-bottom: 10px;
      font-size: 12px;
      font-weight: 800;
      font-style: normal;

      color: rgb(255, 255, 255);
      margin: 16px 0px 12px;
    }

    .address-container {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding: 8px;
      border-radius: 6px;
      word-break: break-word;
      color: rgb(255, 255, 255);
      background: rgba(15, 17, 26, 0.55);
      font-size: 14px;
      font-weight: 500;
      font-style: normal;

      .copy-button {
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

        &:hover {
          filter: brightness(110%);
        }
      }
    }
  }

  .exchange-rate-container {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    margin-top: 16px;
    padding: 24px;

    .inputs-container {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      .input {
        display: flex;
        align-items: center;
        height: 40px;
        min-height: 40px;
        width: 100%;
        padding: 0px 5px 0px 15px;
        border-radius: 6px;
        border: 1px solid transparent;
        background: rgba(15, 17, 26, 0.55);
        transition: background 0.1s ease 0s;

        input {
          width: 100%;
          height: 100%;
          color: rgb(255, 255, 255);
          font-weight: 700;
          font-style: normal;
          font-size: 14px;

          outline: none;
          border: none;
          background: none;
        }

        &:focus-within {
          border: 1px solid rgb(255, 255, 193);
          box-shadow: rgb(255, 252, 57) 0px 0px 1px inset,
            rgb(255, 93, 0) 0px 0px 4px;
        }

        img {
          display: inline-block;
          flex: 0 0 auto;
          line-height: 0;
          width: 20px;
          min-width: 20px;
          height: auto;
        }
        .dollar-sign {
          color: rgb(255, 255, 255);
          font-weight: 700;
          font-style: normal;
          margin-right: 2px;
          margin-top: 2px;
        }
      }

      .equal-sign {
        color: rgb(255, 255, 255);
        margin: 0px 16px;
        font-size: 16px;
        font-weight: 700;
        font-style: normal;
      }
    }

    .info-text {
      margin-bottom: 16px;
      line-height: 1.6;
      color: rgb(177, 182, 198);
      font-size: 14px;
      font-weight: 500;
      font-style: normal;

      font-size: 12px;
      margin: 16px 0px 0px;
      text-align: center;
    }
  }

  .buy-crypto-container {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    padding: 24px;
    margin-top: 16px;
    gap: 12px;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;

    .buy-button {
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
      height: 30px;
      padding: 0px 14px;
      border-radius: 6px;
      font-weight: 700;
      font-style: normal;
      font-size: 13px;
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      background: rgba(203, 215, 255, 0.03);

      &:hover {
        background: rgba(203, 215, 255, 0.055);
      }
    }

    .payment-methods {
      display: flex;
      flex-wrap: wrap;
      -webkit-box-align: center;
      align-items: center;
      margin-left: auto;
      gap: 12px;

      svg {
        fill: currentcolor;
        width: 47px;
        min-width: 47px;
        height: auto;
      }
    }
  }

  .buy-crypto-platforms {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    gap: 16px;
    padding-top: 12px;

    button {
      display: inline-flex;
      width: 130px;
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
      padding: 0px 20px;
      border-radius: 8px;
      font-family: "Geogrotesque Wide", sans-serif;
      font-weight: 800;
      font-style: normal;
      font-size: 14px;
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      background: rgba(203, 215, 255, 0.03);
    }
  }
`;
