import React from "react";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Arrow-Down.svg";
import NFT from "../../../assets/images/IMAGE.svg";
import { StyledNFTCard } from "./styles";

export const calculateArrowMargin = (prices, currentPrice) => {
  if (!prices || prices.length < 3) return "28px";

  const [priceLeft, priceMiddle, priceRight] = prices;

  // Calculate the relative position of currentPrice in the range [priceLeft, priceRight]
  const relativePosition =
    (currentPrice - priceLeft) / (priceRight - priceLeft);

  // Calculate the margin-left for the arrow based on the relative position
  const marginLeft = `calc(${relativePosition * 100}% - 28px)`;

  return marginLeft;
};

const NFTCard = ({
  imageSrc,
  title,
  subTitle,
  amount,
  buttonText,
  isLootbox = true,
  prices,
  currentPrice,
  hasPercentageText,
  isSliderElement = false,
}) => {
  const arrowMargin = calculateArrowMargin(prices, currentPrice);

  return (
    <div>
      <StyledNFTCard isSliderElement={isSliderElement}>
        <div className="text-section">
          <p className="title">{title}</p>
          <span className="sub-title">
            {subTitle} <p className="amount">{amount}</p>
          </span>
        </div>

        <div className="image-section">
          <img src={imageSrc} alt="cart" />
          {hasPercentageText && (
            <div class="img-percentage-text">
              <div style={{ height: "3px" }}></div>
              <div class="percentage-text">
                <span>4.5%</span>
                <span>·</span>
                <span>10% </span>
                <span>·</span>
                <span>950</span>
                <span>·</span>
                <span>730K</span>
                <span>·</span>
                <span>x1.6</span>
              </div>
            </div>
          )}
        </div>

        <div className="info-section">
          <p className="info-text">
            <div className="name-img">
              <img src={NFT} alt="cart" />{" "}
              <span className="info-name">AKbot</span>
            </div>
            {isLootbox && <span className="item-count">7 Items</span>}
          </p>
        </div>

        {!isLootbox && (
          <div className="prices-container">
            <div className="prices">
              {prices.map((price) => (
                <div>${price}K</div>
              ))}
            </div>
            <div className="gradient-price" />
            <div
              className="arrow-current-price"
              style={{ marginLeft: arrowMargin }}
            >
              <ARROW_DOWN />
              <div>${currentPrice}K</div>
            </div>
          </div>
        )}

        {isLootbox ? (
          <div className="button-section">
            <button>{buttonText}</button>
          </div>
        ) : (
          <div className="button-section">
            <button className="buy">BUY</button>
            <button className="bet">BET</button>
          </div>
        )}
      </StyledNFTCard>
    </div>
  );
};

export default NFTCard;
