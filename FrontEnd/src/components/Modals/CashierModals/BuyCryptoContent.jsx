import React from "react";

import { StyledBitcoinContent } from "./styles";

const BuyCryptoContent = ({ handleBack }) => {
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
        Buy Crypto Cards
      </h1>
      <div class="buy-crypto-text">
        While we look for a reliable card payment processor, you can purchase
        crypto using your card via the recommended third-party services below.
        After purchasing the crypto, you can{" "}
        <span className="underline-text">
          deposit it directly to your Rollbit account
        </span>
        .
      </div>
      <div class="warning-text">
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          size="20"
          color="#ffe500"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7013 1.19853C11.3182 0.522528 10.3443 0.522527 9.96124 1.19853L0.962978 17.0785C0.585235 17.7451 1.06679 18.5715 1.83301 18.5715H19.8295C20.5957 18.5715 21.0773 17.7451 20.6996 17.0785L11.7013 1.19853ZM11.5541 12.1603C11.777 12.1603 11.8456 12.0574 11.8627 11.8345L12.017 6.92026C12.017 6.68026 11.9484 6.5774 11.7084 6.5774H9.97127C9.73127 6.5774 9.64555 6.68026 9.64555 6.92026L9.81698 11.8345C9.83413 12.0574 9.9027 12.1603 10.1256 12.1603H11.5541ZM11.7084 15.806C11.9313 15.806 12.017 15.7203 12.017 15.4803V13.646C12.017 13.4231 11.9313 13.3203 11.7084 13.3203H9.97127C9.73127 13.3203 9.64555 13.4231 9.64555 13.646V15.4803C9.64555 15.7203 9.73127 15.806 9.97127 15.806H11.7084Z"
            fill="currentColor"
          ></path>
        </svg>
        Please ensure tokens such as MATIC are ERC-20 and only sent over the
        Ethereum (ETH) network.
      </div>
      <div class="buy-crypto-platforms">
        <a href="https://buy.moonpay.com/" target="_blank" rel="noreferrer">
          <button
            class="css-t4epbj"
            style={{
              background: "rgb(255, 255, 255)",
              color: "rgb(17, 17, 17)",
            }}
          >
            <img
              src="https://rollbit.com/static/media/moonpay.22244d1fb39c91d553d68689c18d53e3.svg"
              alt="MoonPay"
              style={{ width: "90px" }}
            />
          </button>
        </a>
        <a href="https://buy.chainbits.com/" target="_blank" rel="noreferrer">
          <button
            class="css-t4epbj"
            style={{ background: "rgb(255, 255, 255)" }}
          >
            <img
              src="https://rollbit.com/static/media/chainbits.0a013f0372da2ca86706.png"
              alt="Chainbits"
              style={{ width: "90px" }}
            />
          </button>
        </a>
        <a href="https://paybis.com/" target="_blank" rel="noreferrer">
          <button
            class="css-t4epbj"
            style={{ background: "rgb(255, 255, 255)" }}
          >
            <img
              src="https://rollbit.com/static/media/paybis.fded374340238cea4f30cceef87c6cd4.svg"
              alt="Paybis"
              style={{ width: "76px" }}
            />
          </button>
        </a>
      </div>
    </StyledBitcoinContent>
  );
};

export default BuyCryptoContent;
