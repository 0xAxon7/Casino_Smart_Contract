import styled from "styled-components";

export const StyleModal = styled.div`
  .modal-panel {
    display: inline-block;
    position: relative;
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    max-height: 88vh;
    vertical-align: middle;
    border-radius: 10px;
    background: rgb(26, 29, 41);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px,
      rgba(255, 255, 255, 0.04) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.25) 0px -4px 0px inset;
    color: #b1b6c6;
  }

  .overflow-modal {
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-corner,
    ::-webkit-scrollbar-track {
      background: 0 0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(203, 215, 255, 0.1);
      border-radius: 6px;
    }
  }

  @media (min-width: 1024px) {
    .modal-panel {
      max-height: 100%;
    }
  }
`;

export const StyleSidebetsWelcome = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 580px;
  vertical-align: middle;
  border-radius: 10px;
  background: rgb(26, 29, 41);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px,
    rgba(255, 255, 255, 0.04) 0px 1px 0px inset,
    rgba(0, 0, 0, 0.25) 0px -4px 0px inset;

  .content-container {
    width: 100%;
    padding: 32px;
  }
`;

export const StyleNFTMarketplaceWelcome = styled.div`
  background-position: 68% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.url});
  border-radius: 10px;
  max-width: 710px;

  .content-container {
    padding: 48px;
    background: linear-gradient(90deg, rgb(26, 29, 41) 0%, transparent 100%);
    border-radius: 10px;
  }

  .heading {
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

  p {
    max-width: 282px;
    margin: 16px 0px 24px;
    line-height: 1.6;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
  }

  .acknowledge-button {
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
    width: auto;
    height: 48px;
    padding: 0px 24px;
    border-radius: 8px;
    font-weight: 800;
    font-style: normal;
    font-size: 14px;
    color: rgb(20, 23, 34);
    background: rgb(255, 232, 26);
    box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 135, 25) 0px 0px 15px inset;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const StyleBonusBattleWelcome = styled.div`
  width: 100%;
  padding: 32px;

  .heading {
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

  .description {
    line-height: 1.6;
    color: rgb(177, 182, 198);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;

    p {
      margin: 0px 0px 16px;
    }

    ul {
      color: rgb(255, 255, 255);
      /* padding-left: 19px; */
      margin-bottom: 1rem;

      li {
        padding-bottom: 20px;
      }
    }

    > img {
      display: block;
      width: 100%;
      margin: 0px auto 16px;
      border-radius: 8px;
    }
  }

  .more-info {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 8px;
    padding: 16px 24px;
    margin-bottom: 24px;

    .text {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      text-transform: uppercase;
      color: rgb(177, 182, 198);
      font-size: 13px;
      font-weight: 800;
      font-style: normal;
    }

    .faq-text {
      text-transform: none;
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
      cursor: pointer;
      color: rgb(255, 176, 24);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  input {
    display: none;
  }

  .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    height: 18px;
    margin: 0px;
    padding-left: 28px;
    cursor: pointer;
    text-transform: uppercase;
    white-space: nowrap;
    color: rgb(177, 182, 198);
    font-size: 13px;
    font-weight: 800;
    font-style: normal;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      height: 18px;
      width: 18px;
      border: 1px solid rgb(48, 53, 69);
      border-radius: 4px;
      background: rgb(16, 18, 27);

      svg {
        fill: currentcolor;
        width: 11px;
        min-width: 11px;
        height: auto;
        display: none;
        position: absolute;
        top: 4px;
        left: 3px;
        color: rgb(20, 23, 34);
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

  .view-sidebets-button {
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
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    text-transform: none;
    color: rgb(177, 182, 198);
    background: rgba(203, 215, 255, 0.075);

    &:hover {
      background: rgba(203, 215, 255, 0.1);
    }
  }

  .acknowledge-button {
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
    width: auto;
    height: 48px;
    padding: 0px 24px;
    border-radius: 8px;
    font-weight: 800;
    font-style: normal;
    font-size: 14px;
    color: rgb(20, 23, 34);
    background: rgb(255, 232, 26);
    box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 135, 25) 0px 0px 15px inset;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const StyledCloseButton = styled.div`
  position: sticky;
  z-index: 2;
  transform: translate(-20px, 26px);
  top: 0px;
  height: 0px;
  display: flex;
  justify-content: flex-end;

  .button-close {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 99px;
    cursor: pointer;
    background: rgb(26, 29, 41);

    svg {
      vertical-align: middle;
      overflow: hidden;
      fill: currentcolor;
      width: 20px;
      min-width: 20px;
      height: auto;
      transition: color 0.1s ease 0s;
      color: rgb(177, 182, 198);

      &:hover {
        color: rgb(255, 255, 255);
      }
    }
  }
`;
