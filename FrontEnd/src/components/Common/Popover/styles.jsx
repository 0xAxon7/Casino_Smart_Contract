import styled from "styled-components";
import { fadeAndSlideIn } from "../HoverableImage/styles";

export const StyledPopover = styled.div`
  z-index: 1000;
  position: fixed;
  max-width: 208px;
  transform: translateZ(0px);
  animation: 0.2s ease-out 0s 1 normal both running ${fadeAndSlideIn};

  .container-popover {
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

  .simple-popover {
    height: 100%;
    border-radius: 6px;
    animation: 0.2s ease-out 0s 1 normal both running ${fadeAndSlideIn};
    transform: translateZ(0px);
    position: relative;
    padding: 7px 10px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: rgb(255, 255, 255);
    background: rgb(39, 43, 56);
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 8px -4px,
      rgba(0, 0, 0, 0.18) 0px 0px 20px 0px;

    .arrow {
      display: inline-block;
      position: absolute;
      width: 0px;
      height: 0px;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid rgb(39, 43, 56);
    }

    .arrow-left {
      left: -8px;
    }
    .arrow-right {
      right: -8px;
      rotate: 180deg;
    }
  }

  .title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-size: 14px;
    margin: 16px 16px 8px;
    font-weight: 800;
    font-style: normal;
  }

  .option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 12px;
    font-size: 14px;
    height: 40px;
    min-height: 40px;
    border-radius: 8px;
    transition: all 0.1s ease 0s;
    color: rgb(177, 182, 198);
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }

    .icon {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      width: 36px;
      min-width: 36px;
      margin-right: 2px;

      svg {
        fill: currentcolor;
        width: 20px;
        min-width: 20px;
        height: auto;
      }
    }
  }

  .active-option {
    background: rgba(203, 215, 255, 0.03);
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 8px;

    svg {
      filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
    }
  }
`;
