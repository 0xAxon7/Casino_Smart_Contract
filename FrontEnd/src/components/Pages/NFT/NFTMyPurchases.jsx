import React from "react";

import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { BUTTONS_NFT_MARKETPLACE } from "../../../assets/MockData/mockData";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import NotFound from "../../Common/NotFound/NotFound";
import PageTitle from "../../Common/PageTitle/PageTitle";

const NFTMyPurchases = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="NFT Marketplace" />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MARKETPLACE} />
      <div className="content-container">
        <SearchAndFilters hasSortByOptions={true} />
        {/* <NFTSectionWithHeader isLootbox={false} /> */}
        <NotFound text="YOU DON'T HAVE ANY PURCHASES YET" />
      </div>
    </StyledPageContainer>
  );
};

export default NFTMyPurchases;
