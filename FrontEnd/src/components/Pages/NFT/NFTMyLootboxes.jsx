import React from "react";

import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { BUTTONS_NFT_LOOTBOXES } from "../../../assets/MockData/mockData";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import NotFound from "../../Common/NotFound/NotFound";
import PageTitle from "../../Common/PageTitle/PageTitle";

const NFTMyLootboxes = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="Nft Lootboxes" />

      <NFTNavigationHeader buttons={BUTTONS_NFT_LOOTBOXES} />
      <div className="content-container">
        <SearchAndFilters />
        {/* <NFTSectionWithHeader isLootbox={false} /> */}
        <NotFound text="NO LOOTBOXES FOUND" />
      </div>
    </StyledPageContainer>
  );
};

export default NFTMyLootboxes;
