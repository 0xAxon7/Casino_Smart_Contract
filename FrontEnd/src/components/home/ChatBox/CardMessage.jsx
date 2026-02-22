import React from "react";
import { StyledCardMessage } from "./styles";

const CardMessage = ({ rankIcon, playerName, messageText }) => {
  return (
    <StyledCardMessage>
      <div class="container-name" size="13">
        <div size="19.5" class="icon">
          <img src={rankIcon} alt="" scale="0.96" />
        </div>
        <div class="name">{playerName}:</div>
      </div>
      <span class="message">{messageText}</span>
    </StyledCardMessage>
  );
};

export default CardMessage;
