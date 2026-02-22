import React from "react";
import { StyledWinnerCard } from "./styles";

const WinnerCard = ({ imgSrc, cartIconSrc, username, price }) => {
  return (
    <StyledWinnerCard>
      <div className="card-content">
        <img src={imgSrc} alt="cart" className="card-image" />
        <div className="user-details">
          <img src={cartIconSrc} alt="cart" className="cart-icon" />
          <p className="username">{username}</p>
        </div>
        <p className="price">{`$${price}`}</p>
      </div>
    </StyledWinnerCard>
  );
};

export default WinnerCard;
