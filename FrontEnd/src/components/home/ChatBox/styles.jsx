import styled from "styled-components";

export const StyledChatBoxContainer = styled.div`
  width: 340px;
  height: ${(props) =>
    props.isTabletScreen ? "calc(100vh - 64px - 50px)" : "calc(100vh - 64px)"};
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 64px;
  background: #1f2330;
  z-index: 8;

  color: #b1b6c6;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
  text-transform: uppercase;

  .top-actions-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-block: 10px;
    gap: 10px;
  }

  .chat-trades {
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    overflow: auto hidden;
  }

  .btn-chatbox {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 6px;
    height: 30px;
    min-height: 30px;
    padding: 0px 10px;
    border-radius: 6px;
    color: rgb(103, 109, 124);
    text-transform: uppercase;
    transition: all 0.1s ease 0s;
    font-size: 12px;
    font-weight: 800;
    font-style: normal;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: rgba(203, 215, 255, 0.03);
    }
  }

  .active-btn {
    background: rgba(203, 215, 255, 0.03);
    color: rgb(255, 255, 193);
    text-shadow: rgb(255, 93, 0) 0px 0px 10px;

    svg {
      filter: drop-shadow(rgb(255, 93, 0) 0px 0px 6px);
    }
  }

  .switch-icon {
    width: 9px;
    height: 14px;
  }

  .arrow-icon {
    width: 7px;
    height: 5px;
  }

  .chat-messages {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    min-height: 0px;
    padding-right: 4px;
    overflow-wrap: break-word;
    color: rgb(177, 182, 198);
    overflow: hidden auto;

    &::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }
    &::-webkit-scrollbar-corner,
    ::-webkit-scrollbar-track {
      background: 0 0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(203, 215, 255, 0.1);
      border-radius: 6px;
    }
  }

  .container-bets {
    flex: 1 1 0%;
    min-height: 0px;
    padding: 15px 8px 0px 0px;
    margin-right: -12px;
    overflow: hidden auto;
  }

  .section-title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 800;
    font-style: normal;
  }

  .active-bets {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 16px;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 24px 0px 48px;

    color: rgb(103, 109, 124);

    svg {
      fill: currentcolor;
      width: 16px;
      min-width: 16px;
      height: auto;
    }

    .text {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      text-transform: uppercase;
      font-weight: 800;
      font-style: normal;
      font-size: 14px;
    }
  }
`;

export const ChatContainer = styled.div`
  padding: 7px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(203, 215, 255, 0.03);
  border-radius: 6px;

  img {
    height: 12px;
    width: 11px;
  }

  p {
    width: 30px;
    color: #ffffc1;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    text-transform: uppercase;
  }
`;

export const SwitchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  .collapse-icon {
    fill: currentcolor;
    width: 22px;
    min-width: 22px;
    height: auto;
    cursor: pointer;
    color: rgb(134, 141, 166);

    &:hover {
      color: rgb(177, 182, 198);
    }
  }

  .collapsed {
    transform: rotate(180deg);
  }

  .cross-icon {
    fill: currentcolor;
    width: 20px;
    min-width: 20px;
    height: auto;
    cursor: pointer;
    color: rgb(134, 141, 166);

    &:hover {
      color: rgb(177, 182, 198);
    }
  }

  .container-buttons {
    display: flex;
    gap: 4px;
  }
`;

export const ImagePart = styled.div`
  display: inline-flex;
  padding: 30px 40px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  background: rgba(15, 17, 26, 0.55);
  margin: 0 auto;
  width: 100%;

  p {
    color: #b1b6c6;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 21.6px;
    text-transform: uppercase;
  }
`;

export const MessageInput = styled.input`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 40px;
  width: 100%;
  padding: 6px 5px 6px 15px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: rgba(15, 17, 26, 0.55);
  transition: background 0.1s ease 0s;
  position: relative;
  height: auto;
  margin: 0 auto;
  color: #fff;
  margin-top: auto;
`;

export const StyledIconSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px auto;
  width: 100%;

  & > div {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }

  img {
    width: 21px;
    height: 20px;
    flex-shrink: 0;
  }

  p {
    width: 37px;
    color: #b1b6c6;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.4px;
    text-transform: uppercase;
  }

  .emoji {
    width: 21px;
    height: 20px;
    flex-shrink: 0;
  }

  .settings {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    gap: 6px;
    align-items: center;

    .info-value {
      width: 24px;
      color: #b1b6c6;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      text-transform: uppercase;
    }

    .send-button {
      display: inline-flex;
      padding: 4px 8px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 6px;
      background: #86f454;
      box-shadow: 0px 0px 10px 0px rgba(118, 255, 25, 0.4);
      cursor: pointer;

      color: #141722;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;

      &:not(:disabled) {
        &:hover {
          filter: brightness(110%);
        }
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
  }
`;

export const StyledCardMessage = styled.div`
  font-size: 1rem;
  line-height: 1.2;
  overflow-wrap: break-word;
  color: rgb(177, 182, 198);
  box-sizing: border-box;
  position: relative;
  padding: 8px;
  background: rgba(203, 215, 255, 0.03);
  border-radius: 6px;
  margin-bottom: 8px;

  .container-name {
    align-items: center;
    cursor: pointer;
    column-gap: 5.5794px;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-flex;
    vertical-align: middle;
    margin-right: 5px;
    max-width: 100%;

    .icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 19.5px;
      width: 19.5px;
      min-height: 19.5px;
      height: 19.5px;

      img {
        width: 80%;
        vertical-align: middle;
      }
    }

    .name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      color: white;
      font-weight: 600;
    }
  }

  .message {
    vertical-align: middle;
    line-height: 22px;
    font-weight: 500;
    font-style: normal;
    font-size: 13px;
  }
`;
