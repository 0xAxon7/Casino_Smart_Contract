import styled from "styled-components";

export const StyledBetslip = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  position: fixed;
  pointer-events: none;

  .first-class {
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
  }

  .second-class {
    width: 320px;
    bottom: -120px;
    margin: 0 4px;
    position: absolute;
    right: 0px;
  }

  .third-class {
    left: 0;
    right: 0;
    bottom: 65px;
    position: absolute;
    background: #212532;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.65);
    text-shadow: none;
    border-radius: 6px 6px 0 0;
    pointer-events: auto;
    z-index: 20;
  }

  .fourth-class {
    text-shadow: none;
    pointer-events: auto;
    transition: all 300ms ease-in-out;
    transform: translateY(-56px);
    box-sizing: border-box;
    word-break: keep-all;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .fifth-class {
    transition: height 300ms ease-in-out;
    will-change: height;
    box-sizing: border-box;
    word-break: keep-all;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .container-betslip {
    color: #171924;
    cursor: pointer;
    height: 56px;
    display: flex;
    padding: 0 16px;
    z-index: 1;
    position: relative;
    background: #ffe81a;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.42),
      0px 0px 10px rgba(255, 176, 25, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.2), inset 0px 0px 15px #ffb019;
    align-items: center;
    border-radius: 6px 6px 0px 0px;
    justify-content: space-between;
    box-sizing: border-box;
    word-break: keep-all;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      opacity: 0;
      z-index: -1;
      position: absolute;
      background: linear-gradient(to right, #ffe81a, #8d1aff);
      transition: opacity 300ms ease-in-out;
      border-radius: inherit;
    }
  }

  .container-betslip.toggled:before {
    opacity: 1;
  }

  .left-container {
    color: #171924;
    cursor: pointer;
    flex: 1;
    display: flex;
    font-size: 16px;
    min-width: 0;
    align-items: center;
    font-weight: 600;
    box-sizing: border-box;
    word-break: keep-all;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    .icon-container {
      color: #171924;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      width: 32px;
      height: 32px;
      margin-right: 8px;
      box-sizing: border-box;
      word-break: keep-all;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .text {
      overflow: hidden;
      font-size: 16px !important;
      margin-right: 4px;
      text-overflow: ellipsis;
    }
  }

  .arrow-down {
    fill: currentColor;
    flex: none;
    width: 16px;
    cursor: pointer;
    height: 16px;
    opacity: 0.5;
    margin-left: 4px;
  }

  .right-container {
    color: #171924;
    cursor: pointer;
    display: flex;
    flex-basis: 126px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    word-break: keep-all;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    .text {
      cursor: pointer;
      font-size: 10px !important;
      text-align: right;
      font-weight: 700;
      line-height: 12px;
      margin-right: 8px;
      text-transform: uppercase;
      box-sizing: border-box;
      word-break: keep-all;
    }
  }

  .bets-class {
    max-height: 920px;
    overflow: hidden;
    position: relative;
  }

  .bets-first-class {
    display: flex;
    flex-direction: column;
  }

  .bets-second-class {
    display: flex;
    z-index: 3;
    overflow: auto;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
  }

  .bets-third-class {
    flex: 1;
    position: relative;
    min-height: 105px;
    display: flex;
    overflow: hidden;
    max-height: 105px;
    flex-direction: column;
  }

  .bets-fourth-class {
    color: #ffffff;
    display: flex;
    padding: 24px 16px 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-direction: column;
    top: 0;
    position: absolute;
    min-width: 100%;
    opacity: 1;
  }

  .bets-container {
    color: #ffffff;
    pointer-events: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bets-icon {
    min-width: 48px;
    margin-right: 16px;
  }

  .bets-text {
    display: flex;
    flex-direction: column;

    .bets-text-title {
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
    }

    .bets-text-info {
      font-size: 12px;
      margin-top: 8px;
      font-weight: 600;
      line-height: 16px;
      opacity: 0.7;
    }
  }
`;
