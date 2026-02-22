import styled from "styled-components";
import SEARCH_ICON from "../../../assets/images/navbar-search-icon.svg";
import { fadeAndSlideIn } from "../HoverableImage/styles";

export const StyledCryptoCoin = styled.div`
  color: #b1b6c6;
  font-size: 1rem;
  line-height: 1.2;
  box-sizing: border-box;
  padding-bottom: 12px;

  & > :nth-of-type(1) {
    animation-delay: 0s;
  }

  & * {
    animation: 0.2s ease-out 0s 1 normal both running ${fadeAndSlideIn};
  }

  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 5px 0px 15px;
    border-radius: 6px;
    border: 1px solid transparent;
    background: rgba(15, 17, 26, 0.55);
    transition: background 0.1s ease 0s;
    flex: 1 1 0%;
    min-width: 170px;
    animation-delay: 0s;
    height: 32px;
    min-height: 32px;
    margin-bottom: 8px;

    padding: 9px 4px 9px 40px;
    background: rgba(15, 17, 26, 0.55) url(${SEARCH_ICON}) no-repeat 13px center;
  }

  .coin-container {
    display: flex;
    align-items: center;
    min-height: 32px;
    margin: 0px -8px;
    padding: 0px 8px;
    border-radius: 5px;
    font-weight: 500;
    font-style: normal;
    color: rgb(255, 255, 255);
    text-decoration: none;
    animation-delay: 0s;
    font-size: 13px;

    &:hover {
      background: rgba(15, 17, 26, 0.4);
    }

    .coin-icon {
      display: inline-block;
      border-radius: 999px;
      width: 20px;
      min-width: 20px;
      height: auto;
    }

    .coin-name {
      margin: 0px 12px;
      color: rgb(177, 182, 198);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .coin-price {
      margin-left: auto;
      font-variant-numeric: tabular-nums;
    }

    .increase-icon {
      fill: currentColor;
      width: 8px;
      min-width: 8px;
      height: auto;
    }
  }

  .no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 8px 0px 0px;
    text-transform: uppercase;
    color: rgb(103, 109, 124);
    font-weight: 800;
    font-style: normal;
    font-size: 14px;
  }
`;
