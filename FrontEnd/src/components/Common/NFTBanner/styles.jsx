import styled from "styled-components";

export const StyledNFTBanner = styled.div`
  display: flex;
  ${(props) =>
    props.isLoansBanner
      ? `
  flex-direction: row;
  justify-content: space-between;`
      : `
  flex-direction: column;
  justify-content: center;
  `}
  align-items: flex-start;
  background-color: rgb(31, 35, 48);
  background-size: auto 100%;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    !props.isLoansBanner ? `url(${props.image})` : "none"};
  background: ${(props) =>
    props.isLoansBanner
      ? "radial-gradient(at 50% 0px, rgba(1, 255, 57, 0.2) 0%, transparent 75%)"
      : ""};

  border-radius: 8px;
  min-height: 210px;
  padding: 24px 32px;
  margin-bottom: 24px;

  .title-banner {
    max-width: 480px;
    margin-bottom: 22px;
    text-transform: uppercase;
    line-height: 38px;
    color: rgb(255, 255, 255);
    font-size: 32px;
    font-weight: 800;
    font-style: italic;
  }

  .subtitle-banner {
    padding: 16px 0px 32px;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    color: #b1b6c6;
  }

  .container-info-graphics {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    color: #b1b6c6;
  }

  .info-graphic {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 64px;
    padding: 0px 24px;
  }

  .info-value {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 800;
    font-style: normal;
    display: flex;
    align-items: center;
  }

  .info-title {
    padding-top: 4px;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
  }

  .hover:hover {
    background: rgba(203, 215, 255, 0.055);
  }

  .button-banner {
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
    height: 48px;
    padding: 0px 24px;
    border-radius: 8px;
    font-weight: 900;
    font-style: normal;
    font-size: 14px;
    color: rgb(20, 23, 34);

    &:hover {
      filter: brightness(110%);
    }
  }

  .button-first {
    background: rgb(134, 244, 84);
    box-shadow: rgba(118, 255, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(59, 198, 14) 0px 0px 15px inset;
  }

  .button-second {
    background: rgb(255, 232, 26);
    box-shadow: rgba(255, 176, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 135, 25) 0px 0px 15px inset;
  }
`;

export const StyledButtonsBanner = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: -13px 0px 19px;
  gap: 12px;

  .btn-switch {
    padding: 5px 0px;
  }
  .btn-active {
    width: 24px;
    height: 4px;
    border-radius: 99px;
    background: rgb(255, 255, 193);
    box-shadow: rgb(255, 93, 0) 0px 0px 10px 0px,
      rgb(255, 252, 57) 0px 0px 1px inset;
  }

  .btn-default {
    width: 24px;
    height: 4px;
    border-radius: 99px;
    background: rgba(203, 215, 255, 0.075);
  }
`;
