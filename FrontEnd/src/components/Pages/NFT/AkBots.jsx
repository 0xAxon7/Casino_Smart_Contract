import React from "react";

import {
  BUTTONS_NFT_MAIN,
  NFT_BANNER_OPTIONS,
} from "../../../assets/MockData/mockData";
import NFTBanner from "../../Common/NFTBanner/NFTBanner";
import NFTSection from "../../Common/NFTSection/NFTSection";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

const AKBots = () => {
  return (
    <StyledPageContainer>
      <NFTBanner bannerOptions={NFT_BANNER_OPTIONS} />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MAIN} />
      <div className="content-container">
        <SearchAndFilters />

        <NFTSection
          isLootbox={false}
          title="NFT DEALS"
          buttonText="View Marketplace"
          buttonLink="/nft/marketplace"
        />
      </div>
    </StyledPageContainer>
  );
};

export default AKBots;
