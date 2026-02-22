import React, { useState } from "react";
import { ReactComponent as VISA_IMG } from "../../../assets/images/Frame (18).svg";
import { ReactComponent as DEBIT_IMG } from "../../../assets/images/Frame (19).svg";
import { ReactComponent as PAY_IMG } from "../../../assets/images/Frame (20).svg";
import { ReactComponent as GOOGLE_IMG } from "../../../assets/images/Frame (21).svg";
import BitcoinContent from "./BitcoinContent";
import BuyCryptoContent from "./BuyCryptoContent";
import ERC20Content from "./ERC20Content";
import EthereumContent from "./EthereumContent";
import LitecoinContent from "./LitecoinContent";
import NFTContent from "./NFTContent";
import RollbitContent from "./RollbitContent";
import SolanaContent from "./SolanaContent";
import { StyledModalContent } from "./styles";

const DepositWithdrawContent = ({ option }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Use null instead of a boolean

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption("");
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "Bitcoin":
        return <BitcoinContent handleBack={handleBack} />;
      case "Ethereum":
        return <EthereumContent handleBack={handleBack} />;
      case "Litecoin":
        return <LitecoinContent handleBack={handleBack} />;
      case "Solana":
        return <SolanaContent handleBack={handleBack} />;
      case "Rollbit Coin":
        return <RollbitContent handleBack={handleBack} />;
      case "ERC-20":
        return <ERC20Content handleBack={handleBack} />;
      case "NFT":
        return <NFTContent handleBack={handleBack} />;
      case "Buy Crypto":
        return <BuyCryptoContent handleBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <StyledModalContent>
      {selectedOption ? (
        renderComponent()
      ) : (
        <>
          <h1 class="title">Deposit options</h1>
          <div class="options">
            <div class="option" onClick={() => handleOptionClick("Bitcoin")}>
              <div class="icons-container">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  size="32"
                  class="icon-img"
                  alt=""
                />
              </div>
              <div class="option-title">
                Bitcoin<div class="option-subtitle">BTC</div>
              </div>
            </div>
            <div class="option" onClick={() => handleOptionClick("Ethereum")}>
              <div class="icons-container">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  size="32"
                  class="icon-img"
                  alt=""
                />
              </div>
              <div class="option-title">
                Ethereum<div class="option-subtitle">ETH</div>
              </div>
            </div>
            <div class="option" onClick={() => handleOptionClick("Litecoin")}>
              <div class="icons-container">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png"
                  size="32"
                  class="icon-img"
                  alt=""
                />
              </div>
              <div class="option-title">
                Litecoin<div class="option-subtitle">LTC</div>
              </div>
            </div>
            <div class="option" onClick={() => handleOptionClick("Solana")}>
              <div class="icons-container">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png"
                  size="32"
                  class="icon-img"
                  alt=""
                />
              </div>
              <div class="option-title">
                Solana<div class="option-subtitle">SOL</div>
              </div>
            </div>
            <div
              class="option"
              onClick={() => handleOptionClick("Rollbit Coin")}
            >
              <div class="icons-container">
                <svg
                  height="128"
                  viewBox="0 0 128 128"
                  width="128"
                  xmlns="http://www.w3.org/2000/svg"
                  size="32"
                  style={{
                    fill: "currentcolor",
                    width: "32px",
                    minWidth: "32px",
                    height: "auto",
                  }}
                >
                  <g fill="none" fill-rule="evenodd">
                    <rect
                      fill="#fea101"
                      fill-rule="nonzero"
                      height="128"
                      rx="64"
                      width="128"
                    ></rect>
                    <path
                      d="m105.5 64c0-19.0538-15.4587-34.5-34.528-34.5-.89 0-1.7722.0336-2.6453.0997l-52.3267 2.3646 35.6073 3.4682-.0204.0138 12.7262.9537-14.3151.1924c-4.2458 3.2488-7.7148 7.4604-10.0802 12.3083l-12.8195 1.5457 11.5268 1.4596c-1.4101 3.7635-2.1811 7.8388-2.1811 12.094s.771 8.3305 2.1811 12.094l-11.5268 1.4596 12.8195 1.5457c2.3647 4.8465 5.8323 9.057 10.0765 12.3054l14.3188.1952-12.7263.9537c.0068.0046.0137.0092.0205.0139l-35.6073 3.4682 52.3267 2.3646c.8731.0661 1.7553.0997 2.6453.0997 19.0693 0 34.528-15.4462 34.528-34.5zm-47.476 0c0 7.1452 5.797 12.9375 12.948 12.9375s12.948-5.7923 12.948-12.9375-5.797-12.9375-12.948-12.9375-12.948 5.7923-12.948 12.9375z"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="option-title">
                Rollbit Coin<div class="option-subtitle">RLB</div>
              </div>
            </div>
            <div class="option" onClick={() => handleOptionClick("ERC-20")}>
              <div class="icons-container">
                <div class="multiple-icons">
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png"
                    size="32"
                    class="icon-img"
                    alt=""
                  />
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/18852.png"
                    size="32"
                    class="icon-img"
                    alt=""
                  />
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png"
                    size="32"
                    class="icon-img"
                    alt=""
                  />
                </div>
              </div>
              <div class="option-title">
                <div>
                  ERC-20<div class="option-subtitle">(USDx, APE, and more)</div>
                </div>
              </div>
            </div>
            <div class="option" onClick={() => handleOptionClick("NFT")}>
              <div class="icons-container">
                <img
                  src="https://rollbit.com/static/media/nfts-small-row-3.16563e82f1d06c321a44.png"
                  alt=""
                  className="nft-img"
                />
              </div>
              <div class="option-title">
                NFT<div class="option-subtitle">1000+ Collections</div>
              </div>
            </div>
            {option === "Withdraw" ? (
              <div
                class="option"
                onClick={() => handleOptionClick("Buy Crypto")}
              >
                <div class="icons-container">
                  <div class="paying-methods">
                    <VISA_IMG />
                    <PAY_IMG />
                    <DEBIT_IMG />
                    <GOOGLE_IMG />
                  </div>
                </div>
                <div class="option-title">Buy Crypto</div>
              </div>
            ) : null}
          </div>
        </>
      )}
    </StyledModalContent>
  );
};

export default DepositWithdrawContent;
