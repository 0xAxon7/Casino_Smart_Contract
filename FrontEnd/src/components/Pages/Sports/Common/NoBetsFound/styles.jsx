import styled from "styled-components";

export const StyledNoBetsFound = styled.div`
  width: 100%;
  height: inherit;

  .container {
    color: #ffffff;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 24px 0;
    align-items: center;
    justify-content: center;
  }

  .content-block {
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  svg {
    width: 140px;
    height: auto;
    margin: 0 auto 56px;
  }

  .info-text {
    opacity: 0.5;
    font-size: 18px;
    text-align: center;
    line-height: 28px;
    letter-spacing: 0.4px;
  }

  .button {
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    font-family: inherit;
    font-optical-sizing: inherit;
    font-kerning: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    color: rgb(23, 25, 36);
    width: auto;
    border: none rgb(255, 232, 26);
    cursor: pointer;
    height: unset;
    margin: 0px;
    outline: none;
    padding: 11px 28px;
    overflow: visible;
    position: relative;
    background: rgb(255, 232, 26);
    box-shadow: rgba(0, 0, 0, 0.42) 0px 4px 20px,
      rgba(255, 176, 25, 0.4) 0px 0px 10px,
      rgba(255, 255, 255, 0.2) 0px 1px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -3px 0px inset,
      rgb(255, 176, 25) 0px 0px 15px inset;
    text-align: center;
    line-height: normal;
    border-radius: 8px;
    text-transform: uppercase;
    transition-delay: 0s;
    appearance: none;
    transition-duration: 0.5s;
    transition-property: backgroundColor, background;
    -webkit-font-smoothing: inherit;
    transition-timing-function: ease;
    font-size: 12px !important;

    border: none;
    cursor: pointer;
    outline: none;
    min-width: 176px;
    transition: 0.5s;
    font-weight: 700;
    line-height: 18px;
    text-transform: uppercase;
    margin-top: 32px;

    &:hover {
      background: rgba(255, 232, 26, 0.75);
      border-color: rgba(255, 232, 26, 0.75);
    }
  }
`;
