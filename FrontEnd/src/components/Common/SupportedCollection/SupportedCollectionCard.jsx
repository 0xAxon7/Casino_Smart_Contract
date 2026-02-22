import React, { useEffect, useRef, useState } from "react";
import { StyledSupportedCollection } from "./styles";
import { Link } from "react-router-dom";

const SupportedCollectionCard = ({ cardWidth }) => {
  return (
    <StyledSupportedCollection cardWidth={cardWidth}>
      <Link to={"#"}>
        <div class="image-collection"></div>
        <div class="content-section">
          <div class="avatar"></div>
          <div class="text">
            <div class="title-container">
              <div class="title">Crypto Punks</div>
            </div>
            <div class="description">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York ...
            </div>
          </div>
        </div>
      </Link>
    </StyledSupportedCollection>
  );
};

export default SupportedCollectionCard;
