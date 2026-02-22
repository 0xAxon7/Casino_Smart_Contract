import React, { useState } from "react";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Arrow-Down.svg";
import { ReactComponent as LINK_IMG } from "../../../assets/images/link.svg";
import { calculateArrowMargin } from "../NFTCard/NFTCard";
import Description from "./Description";

const DetailsContainer = ({ nftDetails }) => {
  const {
    nftImageSrc,
    subtitle,
    price,
    title,
    moreInfoLink,
    openSeaLink,
    authorLink,
    authorName,
    prices,
  } = nftDetails.detailsContainerInfo;

  const { currentPrice } = nftDetails;

  console.log("detailsContainerInfo", nftDetails.detailsContainerInfo);
  const arrowMargin = calculateArrowMargin(prices, currentPrice);

  const [showDescription, setShowDescription] = useState(false);

  const onClickMoreDetails = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="container-nft">
      <div className="nft-img">
        <div style={{ cursor: "pointer" }}>
          <img src={nftImageSrc} alt="nft" />
        </div>
      </div>
      <div className="container-info">
        <div className="subtitle">
          <a href={moreInfoLink}>{subtitle}</a>
          <span style={{ margin: "0px 3px" }}>·</span>
          <span>{price}</span>
        </div>
        <div className="title">{title}</div>
        <div className="links">
          <a href={moreInfoLink} target="blank" className="link">
            <LINK_IMG />
            More Info
          </a>
          <a href={openSeaLink} target="blank" className="link">
            <LINK_IMG />
            OpenSea
          </a>
        </div>
        <a
          href={authorLink}
          target="blank"
          className="author"
          style={{ marginBottom: "20px" }}
        >
          Created By
          <span style={{ color: "rgb(255, 255, 255)", marginLeft: "4px" }}>
            {authorName}
          </span>
        </a>
        <div className="description">
          <Description
            description={nftDetails.detailsContainerInfo}
            className={showDescription ? "open" : ""}
          />
          <div className="description-button" onClick={onClickMoreDetails}>
            {showDescription ? "Less" : "More"}
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              size="8"
              direction="down"
              top="-0.5"
              className="css-smdox2"
              style={{
                marginLeft: "4px",
                rotate: showDescription ? "180deg" : "",
              }}
            >
              <path
                d="M0.934258 -6.17707e-07L7.06574 -8.16755e-08C7.46509 -4.67634e-08 7.70329 0.445072 7.48177 0.77735L4.41602 5.37596C4.21811 5.67283 3.78189 5.67283 3.58397 5.37596L0.518233 0.777349C0.296715 0.445072 0.534911 -6.52619e-07 0.934258 -6.17707e-07Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div style={{ maxWidth: "340px" }}>
          <div style={{ marginTop: "14px", marginBottom: "4px" }}>
            <div className="prices">
              {prices.map((price, index) => (
                <div key={index}>{price}</div>
              ))}
            </div>
            <div className="price-gradient"></div>
            <div
              className="arrow-current-price"
              style={{ marginLeft: arrowMargin }}
            >
              <ARROW_DOWN />
              <div>{currentPrice}K</div>
            </div>
            <div className="button-section">
              <button className="buy">BUY</button>
              <button className="bet">BET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;
