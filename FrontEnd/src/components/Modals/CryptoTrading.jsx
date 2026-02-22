import React from "react";
import Modal from "./Modal";
import { StyleNFTMarketplaceWelcome } from "./styles";

const CryptoTrading = ({ isOpen, onClose }) => {
  return (
    <Modal maxWidth={640} isOpen={isOpen}>
      <StyleNFTMarketplaceWelcome
        url={
          "https://rollbit.com/static/media/hero-rlb-bot.80736408d58b43236799.jpg"
        }
      >
        <div class="content-container">
          <h1 class="heading" style={{ margin: "0px" }}>
            CRYPTO TRADING
          </h1>
          <p>
            Crypto Trading is not an activity covered by our gaming license and
            is offered by Rollbit independently.
          </p>
          <button class="acknowledge-button" onClick={onClose}>
            I Acknowledge
          </button>
        </div>
      </StyleNFTMarketplaceWelcome>
    </Modal>
  );
};

export default CryptoTrading;
