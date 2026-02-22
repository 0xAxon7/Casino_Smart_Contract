import React from "react";

import {
  BUTTONS_NFT_MAIN,
  NFT_BANNER_OPTIONS,
} from "../../../assets/MockData/mockData";
import NFTBanner from "../../Common/NFTBanner/NFTBanner";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

const SportsAKBots = () => {
  return (
    <StyledPageContainer>
      <NFTBanner bannerOptions={NFT_BANNER_OPTIONS} />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MAIN} />
      <div className="content-container">
        <SearchAndFilters
          hasSwitchToggle={true}
          labelSwitchToggle={"Mine only"}
          hasSortByOptions={true}
          hasTraitsOptions={true}
        />
      </div>
    </StyledPageContainer>
  );
};

export default SportsAKBots;
