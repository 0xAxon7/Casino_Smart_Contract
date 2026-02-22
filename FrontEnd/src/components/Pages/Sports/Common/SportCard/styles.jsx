import styled from "styled-components";
import { fadeAndSlideDown } from "../../../../Common/HoverableImage/styles";

export const StyledExtendedCard = styled.div`
  position: relative;

  .first-container {
    max-height: 302px;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
      scrollbar-width: none;
    }
  }

  .simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
  }

  .simplebar-height-auto-observer-wrapper {
    box-sizing: inherit !important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0;
  }

  .simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    z-index: 0;
  }

  .simplebar-offset {
    direction: inherit !important;
    box-sizing: inherit !important;
    resize: none !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }

  .simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
      scrollbar-width: none;
    }
  }

  .simplebar-content:after,
  .simplebar-content:before {
    content: " ";
    display: table;
  }

  .last-class {
    padding-bottom: 8px;
  }

  .bt528 {
    margin-top: 16px;
    text-align: left;
    padding-left: 8px;
    margin-bottom: 8px;
  }
  .bt521 {
    color: #ffffff;
    margin: 0;
    z-index: 4;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    font-weight: 600;
  }
  .bt527 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .bt522 .bt523 {
    -webkit-mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .bt523 {
    width: 100%;
    height: 16px;
    opacity: 0.5;
    overflow: hidden;
    font-size: 12px;
    box-sizing: border-box;
    line-height: 16px;
    border-radius: 2px;
  }

  .team-odds {
    flex: 1;
    position: relative;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const StyledHeaderDropdown = styled.div`
  top: 54px;
  left: 0;
  width: 100%;
  z-index: 99;
  overflow: hidden;
  position: absolute;
  padding-bottom: 50px;

  & > * {
    animation-delay: 0s;
    animation: 0.2s ease-in-out 0s 1 normal both running ${fadeAndSlideDown};
  }

  .bt6357 {
    color: #ffffff;
    width: 100%;
    position: relative;
    background: #171924;
    box-shadow: none;
    box-sizing: border-box;
    padding-top: 60px;
  }

  .bt7960 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .bt6360 {
    padding-inline: 5%;
    justify-content: center;
  }

  .bt6359 {
    display: flex;
    padding: 0 16px;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: left;
  }

  .bt7964 {
    justify-content: center;
  }

  .bt7961 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: left; */
  }

  .bt7964 .bt7963 {
    flex: initial;
    width: 100px;
  }

  .bt7963 {
    flex: 0 0 33.333%;
    display: flex;
    max-width: 33.333%;
    min-height: 70px;
    margin-bottom: 32px;
    justify-content: center;
  }

  .bt7962 {
    color: #ffffff;
  }

  .bt7965 {
    color: inherit;
    cursor: pointer;
    display: flex;
    max-width: 104px;
    box-sizing: border-box;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    text-decoration: none;
  }

  .bt7968 {
    width: 32px;
    height: 32px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    .fire-icon {
      color: #e23838;
      top: -8px;
      right: -8px;
      width: 20px;
      height: 20px;
      display: flex;
      z-index: 2;
      position: absolute;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      background-color: #fff;
    }
  }

  .bt7967 {
    opacity: 0.5;
    transition: opacity 0.5s;

    svg {
      fill: currentcolor;
      color: rgb(255, 255, 255);
      width: auto;
      height: 32px;
    }
  }

  .bt7970 {
    hyphens: auto;
    opacity: 0.7;
    font-size: 12px;
    margin-top: 8px;
    transition: opacity 0.5s;
  }

  .active {
    opacity: 1;
    color: #fff;
  }
`;
