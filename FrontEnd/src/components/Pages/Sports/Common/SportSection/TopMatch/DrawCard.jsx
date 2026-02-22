import React from "react";
import { StyledDrawCard } from "./StyledTopMatch";

const DrawCard = ({ rating }) => {
  return (
    <StyledDrawCard>
      <div className="draw-icon">X</div>
      <div>{rating}</div>
    </StyledDrawCard>
  );
};

export default DrawCard;
