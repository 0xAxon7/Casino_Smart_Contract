import styled from "styled-components";

export const StyleAccountButton = styled.div`
  display: flex;
  gap: 14px;
  position: relative;

  .account-button {
    min-height: 40px;
    margin-left: 12px;
    text-align: left;
    letter-spacing: 0px;

    & > * {
      margin-right: 8px;
    }

    & > :last-child {
      margin-right: 0px;
    }

    .rank-icon {
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      min-width: 30px;
      width: 30px;
      min-height: 30px;
      height: 30px;

      img {
        width: 96%;
      }
    }

    .account-text {
      color: rgb(255, 255, 255);
      padding-bottom: 4.5px;
      max-width: 76px;
      font-size: 12px;
      font-weight: 800;
      font-style: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .account-border {
      width: 100%;
      height: 5px;
      border-radius: 99px;
      background: linear-gradient(
        90deg,
        rgb(229, 164, 128) 0%,
        rgb(229, 164, 128) 0%,
        rgba(203, 215, 255, 0.1) 0%,
        rgba(203, 215, 255, 0.1) 100%
      );
    }

    svg {
      fill: currentcolor;
      width: 8px;
      min-width: 8px;
      height: auto;
      color: rgb(177, 182, 198);
    }

    &:hover {
      background: rgba(203, 215, 255, 0.055);
    }
  }
`;
