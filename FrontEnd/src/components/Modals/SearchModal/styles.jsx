import styled from "styled-components";

export const StyledSearchContent = styled.div`
  .content-container {
    width: 100%;
    padding: 32px;
  }

  .div-container {
    display: flex;
    align-items: flex-start;
  }

  .game-container {
    flex: 1 1 0%;
    min-width: 0px;

    .title {
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
  }
`;

export const StyledModalSidebar = styled.div`
  border-radius: 8px;
  background: rgba(203, 215, 255, 0.03);
  width: 190px;
  margin-right: 32px;
  position: sticky;
  top: 32px;

  .option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 12px 0px 6px;
    height: 40px;
    min-height: 40px;
    transition: all 0.1s ease 0s;
    color: rgb(177, 182, 198);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }

    .active-icon {
      filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
    }

    &:first-of-type {
      border-radius: 8px 8px 0px 0px;
    }
    &:last-of-type {
      border-radius: 0px 0px 8px 8px;
    }

    .icon {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      width: 40px;
      min-width: 40px;

      svg {
        fill: currentcolor;
        width: 17px;
        min-width: 17px;
        height: auto;
      }
    }
  }

  .active {
    background: rgba(203, 215, 255, 0.03);
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 8px;
  }
`;
