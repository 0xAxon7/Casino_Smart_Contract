import React from "react";
import { StyledCryptoCard } from "./styles";

const CryptoCard = ({ imageSrc, symbol, value, percentage }) => {
  return (
    <StyledCryptoCard>
      <div className="padding-wrapper">
        <div className="card-wrapper">
          <img src={imageSrc} alt="crypto" className="crypto-image" />
          <p className="symbol">{symbol}</p>
          <p className="value">{value}</p>
          <p className="percentage">{percentage}</p>
          <div className="leverage-info">
            <p className="leverage-text">1000 x Leverage</p>
          </div>
        </div>
      </div>
    </StyledCryptoCard>
  );
};

export default CryptoCard;
