import styled, { keyframes } from "styled-components";

const fadeAndSlideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
`;
const moveDown = keyframes`
  0% {
    transform: translate(0px, -100%);
  }
`;

export const StyleGameItem = styled.tr`
  height: 40px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background: rgba(203, 215, 255, 0.03);

  .game {
    white-space: nowrap;
    overflow: hidden;
    max-width: 200px;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;

    &:first-of-type {
      padding-left: 24px;
      border-radius: 4px 0px 0px 4px;
    }
    &:not(:last-of-type) {
      padding-right: 16px;
    }

    > div {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      min-height: 28px;
      font-variant-numeric: tabular-nums;
    }

    .game-icon {
      position: relative;
      width: 24px;
      padding-bottom: 24px;
      overflow: hidden;
      display: block;
      margin-right: 8px;
      border-radius: 3px;
    }

    img {
      position: absolute;
      top: 0px;
      left: -6%;
      width: 112%;
      height: 113%;
      border-radius: 4px;
    }
  }

  .player {
    white-space: nowrap;
    overflow: hidden;
    max-width: 120px;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;

    &:last-of-type {
      padding-right: 16px;
    }

    > div {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      min-height: 28px;
      font-variant-numeric: tabular-nums;
    }

    .icon-name {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      column-gap: 6.00858px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      .icon {
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        min-width: 21px;
        width: 21px;
        min-height: 21px;
        height: 21px;

        img {
          width: 72%;
        }
      }

      .name {
        color: white;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .table-value {
    white-space: nowrap;
    overflow: hidden;
    font-family: "Geogrotesque Wide", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;

    &:last-of-type {
      padding-right: 24px;
      border-radius: 0px 4px 4px 0px;
    }

    > div {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      min-height: 28px;
      font-variant-numeric: tabular-nums;
      -webkit-box-pack: end;
      justify-content: flex-end;
    }
  }
`;

export const StyleTableView = styled.div`
  position: relative;

  &::after {
    background: linear-gradient(rgba(26, 29, 41, 0) 0%, rgb(26, 29, 41) 75%);
    content: "";
    z-index: 2;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 30%;
    width: 100%;
    pointer-events: none;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 4px;
  }

  thead {
    z-index: 2;
    height: 40px;
    position: relative;
    background: rgb(31, 35, 48);
  }

  tbody {
    > tr:nth-of-type(2n + 1) {
      animation: 0.5s ease-out 0s 1 normal none running ${fadeAndSlideDown};
    }
    > tr:nth-of-type(2n) {
      animation: 0.5s ease-out 0s 1 normal none running ${moveDown};
    }
  }

  .th-collection {
    text-transform: uppercase;
    color: rgb(103, 109, 124);
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;

    &:first-of-type {
      padding-left: 24px;
      border-radius: 4px 0px 0px 4px;
    }

    &:not(:last-of-type) {
      padding-right: 16px;
    }

    > div {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .th-borrow {
    text-transform: uppercase;
    color: rgb(103, 109, 124);
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;

    &:not(:last-of-type) {
      padding-left: 16px;
    }

    &:last-of-type {
      padding-right: 24px;
      border-radius: 0px 4px 4px 0px;
    }

    > div {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      justify-content: flex-end;
    }
  }
`;
