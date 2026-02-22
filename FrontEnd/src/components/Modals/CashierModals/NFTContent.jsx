import React from "react";

import PreviewExternalWallet from "../../Common/PreviewExternalWallet/PreviewExternalWallet";
import { StyledBitcoinContent } from "./styles";

const NFTContent = ({ handleBack }) => {
  return (
    <StyledBitcoinContent>
      <h1 class="title-actions">
        <div class="back-button" onClick={handleBack}>
          <svg viewBox="0 0 8 14" size="9" color="#fff" class="css-181vsso">
            <title>arrow</title>
            <g id="arrow" fill-rule="currentColor">
              <path
                d="M8,12.534 C8.00312077,12.1491981 7.86017338,11.7775349 7.6,11.494 L3.348,7 L7.6,2.506 C8.14019021,1.91980519 8.14019021,1.01719481 7.6,0.431 C7.34808121,0.156127315 6.99235127,-0.000378973093 6.6195,-0.000378973093 C6.24664873,-0.000378973093 5.89091879,0.156127315 5.639,0.431 L0.407,5.963 C-0.135688789,6.54706274 -0.135688789,7.45093726 0.407,8.035 L5.634,13.569 C5.88591879,13.8438727 6.24164873,14.000379 6.6145,14.000379 C6.98735127,14.000379 7.34308121,13.8438727 7.595,13.569 C7.8548547,13.2872672 7.99785194,12.9172619 7.995,12.534"
                id="Arrow-left-1"
              ></path>
            </g>
          </svg>
        </div>
        <img
          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
          size="32"
          class="coin-img"
          alt=""
        />
        Deposit NFT'S<div class="underline-text">View Transactions</div>
      </h1>
      <PreviewExternalWallet isCashierModal={true} />
    </StyledBitcoinContent>
  );
};

export default NFTContent;
