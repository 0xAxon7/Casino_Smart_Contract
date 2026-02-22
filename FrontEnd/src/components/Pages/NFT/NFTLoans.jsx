import React from "react";

import DepositedNFTsSection from "../../Common/DepositedNFTs/DepositedNFTsSection";
import NFTBanner from "../../Common/NFTBanner/NFTBanner";
import PreviewExternalWallet from "../../Common/PreviewExternalWallet/PreviewExternalWallet";
import StepsSection from "../../Common/StepSection/StepsSection";
import HeaderCollection from "../../Common/SupportedCollection/HeaderCollection";
import SupportedCollectionTable from "../../Common/SupportedCollection/SupportedCollectionTable";
import { StyledPageContainer } from "../Casino/styles";
import NFT_Banner from "./../../../assets/images/nft-banner.png";

const options = [
  {
    title: "LOAN YOUR NFTs FOR INSTANT USD,",
    subTitle:
      "Highest LTV on the market. Withdraw via ETH, BTC, LTC, SOL, USDT, USDC, APE.",
    color: "rgb(114, 242, 56)",
    image: NFT_Banner,
    url: "/nft/my-loans",
    infoGraphics: {
      loans: "175,038",
      totalLoanValue: "$106,762,138",
      activeLoans: "422",
      viewMyLoans: "",
    },
  },
];

const steps = [
  {
    number: "01",
    text: "Deposit your NFT",
  },
  {
    number: "02",
    text: "Loan your NFT for USD",
  },
  {
    number: "03",
    text: "Pay back within 7 days",
  },
];

const NFTLoans = () => {
  return (
    <StyledPageContainer className="@container">
      <NFTBanner bannerOptions={options} isLoansBanner={true} />

      <StepsSection steps={steps} className="@xl:block hidden" />

      <DepositedNFTsSection />

      <PreviewExternalWallet />

      <div style={{ paddingTop: "32px" }}>
        <HeaderCollection />
        <SupportedCollectionTable />
      </div>
    </StyledPageContainer>
  );
};

export default NFTLoans;
