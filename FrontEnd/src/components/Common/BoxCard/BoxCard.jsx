import React from "react";
import { StyledBoxCard } from "./styles";

const BoxCard = ({ imageSrc, title, amount }) => {
  return (
    <StyledBoxCard>
      <div className="box-wrapper">
        <div className="content">
          <img src={imageSrc} alt="cart" className="box-image" />
          <p className="box-title">{title}</p>
        </div>
        <p className="box-amount">{amount}</p>
      </div>
    </StyledBoxCard>
  );
};

export default BoxCard;
