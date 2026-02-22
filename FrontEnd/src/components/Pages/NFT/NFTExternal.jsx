import React from "react";

import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { BUTTONS_MY_NFTs } from "../../../assets/MockData/mockData";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import NotFound from "../../Common/NotFound/NotFound";
import PageTitle from "../../Common/PageTitle/PageTitle";

const NFTExternal = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="My Nfts" />

      <NFTNavigationHeader buttons={BUTTONS_MY_NFTs} />
      <div className="content-container">
        <SearchAndFilters />
        {/* <NFTSectionWithHeader isLootbox={false} /> */}
        <NotFound text="NO WINS FOUND" />
      </div>
    </StyledPageContainer>
  );
};

export default NFTExternal;
