import React from "react";
import { StyledNotFound } from "./styles";

const NotFound = ({ text }) => {
  return (
    <StyledNotFound>
      <div class="not-found-text">{text}</div>
    </StyledNotFound>
  );
};

export default NotFound;
