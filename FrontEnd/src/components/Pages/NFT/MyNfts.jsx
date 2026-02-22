import React from "react";

import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { BUTTONS_MY_NFTs } from "../../../assets/MockData/mockData";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import NFTSection from "../../Common/NFTSection/NFTSection";
import PageTitle from "../../Common/PageTitle/PageTitle";

const MyNFTs = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="My Nfts" />

      <NFTNavigationHeader buttons={BUTTONS_MY_NFTs} />
      <div className="content-container">
        <SearchAndFilters />
        <NFTSection isLootbox={false} />
        {/* <NotFound text="NO NFTS FOUND" /> */}
      </div>
    </StyledPageContainer>
  );
};

export default MyNFTs;
