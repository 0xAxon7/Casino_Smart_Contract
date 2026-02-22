import styled from "styled-components";

export const StyledOpenedSidebar = styled.div`
  width: 240px;
  height: calc(100vh - 65px);
  flex: 0 0 auto;
  background: #1a1d29;
  top: 65px;
  left: 0;
  scroll-padding-top: 9rem;

  position: fixed;
  z-index: 10;
  transform: translateZ(0px);

  /* Define the common styles */

  .sidebar-content {
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
    height: 100%;
    background-color: rgb(31, 35, 48);
    overflow: hidden auto;

    &::-webkit-scrollbar {
      width: 0.6rem;
    }

    &::-webkit-scrollbar-track {
      background: #1a1d29;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background: rgba(203, 215, 255, 0.08);
    }
  }

  .other-text {
    color: #686d7b;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    display: flex;
    margin-block: 12px;
  }

  .other-section {
    display: flex;
    flex-direction: column;
  }

  .option-sidebar {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    height: 40px;
    min-height: 40px;
    border-radius: 8px;
    color: #b1b6c6;
    transition: all 0.1s ease 0s;
    padding-right: 6px;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }
  }

  .opened-dropdown {
    background: rgb(26, 29, 41) !important;
  }

  .option-active {
    background: rgba(203, 215, 255, 0.03);
  }

  .numbers-spacer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .activated {
    filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
    color: rgb(255, 255, 193) !important;
  }

  .icon-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    min-width: 36px;
    height: 20px;
    margin-right: 2px;
    color: #b1b6c6;
  }

  .icon-arrow {
    width: 30px;
    height: 30px;
  }

  .info-text {
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .info-number {
    width: 46px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
  }

  .count {
    width: 14px;
    color: #b1b6c6;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 13.2px;
  }

  .divider {
    min-height: 25px;
    margin-top: auto;
  }

  .payment {
    padding: 25px 20px;
    margin: 0px -16px -20px;
    background: rgba(203, 215, 255, 0.03);

    .payment-methods {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-top: 20px;
      margin-left: -2px;
    }

    .buy-crypto {
      width: 100%;
      letter-spacing: 0.5px;
      padding: 0px 20px;

      color: rgb(255, 255, 255);
      background: rgba(203, 215, 255, 0.075);
    }
  }
`;

export const StyledClosedSidebar = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1f2330;
  width: 55px;
  position: fixed;
  top: 64px;
  z-index: 10;

  .link {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 55px;
    height: 40px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }
  }

  .activated {
    filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 8px;
  }

  svg {
    color: #b1b6c6;
  }
`;
