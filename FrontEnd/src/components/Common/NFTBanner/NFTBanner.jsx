import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NFT_LOANS } from "../../../assets/images/NFT_Loans.svg";
import { ReactComponent as ARROW_RIGHT } from "../../../assets/images/arrow-line-right.svg";
import LOANS_BANNER from "../../../assets/images/nft-loans-banner.png";
import { StyledButtonsBanner, StyledNFTBanner } from "./styles";

const NFTBanner = ({ bannerOptions, isLoansBanner = false }) => {
  const [activeOption, setActiveOption] = useState(0);

  const handleOptionChange = (index) => {
    setActiveOption(index);
  };

  const { title, subTitle, color, buttonText, image, url, infoGraphics } =
    bannerOptions[activeOption];

  return (
    <>
      <StyledNFTBanner
        image={!isLoansBanner ? image : false}
        isLoansBanner={isLoansBanner}
      >
        {isLoansBanner ? (
          <div>
            <div className="title-banner">
              {title}{" "}
              {activeOption === 0 && <span style={{ color }}>0% FEES</span>}
            </div>
            {buttonText && (
              <Link to={url}>
                <button
                  className={`button-banner ${
                    activeOption === 0 ? "button-first" : "button-second"
                  }`}
                >
                  {buttonText}
                </button>
              </Link>
            )}
            {subTitle && <div class="subtitle-banner">{subTitle}</div>}
            {infoGraphics && (
              <div class="container-info-graphics">
                <div class="info-graphic">
                  <div class="info-value">{infoGraphics.loans}</div>
                  <div class="info-title">Loans</div>
                </div>
                <div class="info-graphic">
                  <div class="info-value">{infoGraphics.totalLoanValue}</div>
                  <div class="info-title">Total Loan Value</div>
                </div>
                <div class="info-graphic">
                  <div class="info-value">{infoGraphics.activeLoans}</div>
                  <div class="info-title">Active Loans</div>
                </div>
                <Link to={"/nft/my-loans"}>
                  <div class="info-graphic hover">
                    <div class="info-value">
                      <NFT_LOANS />
                      <ARROW_RIGHT />
                    </div>
                    <div class="info-title">View My Loans</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="title-banner">
              {title}{" "}
              {activeOption === 0 && <span style={{ color }}>0% FEES</span>}
            </div>
            {buttonText && (
              <Link to={url}>
                <button
                  className={`button-banner ${
                    activeOption === 0 ? "button-first" : "button-second"
                  }`}
                >
                  {buttonText}
                </button>
              </Link>
            )}
          </>
        )}
        {isLoansBanner && <img src={LOANS_BANNER} alt=""></img>}
      </StyledNFTBanner>

      {!isLoansBanner ? (
        <StyledButtonsBanner>
          {bannerOptions.map((_, index) => (
            <div
              key={index}
              className="btn-switch"
              onClick={() => handleOptionChange(index)}
              style={{ cursor: activeOption === index ? "default" : "pointer" }}
            >
              <div
                className={`btn-${
                  activeOption === index ? "active" : "default"
                }`}
              ></div>
            </div>
          ))}
        </StyledButtonsBanner>
      ) : null}
    </>
  );
};

export default NFTBanner;
