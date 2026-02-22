import React, { useState } from "react";

import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { BUTTONS_NFT_MARKETPLACE } from "../../../assets/MockData/mockData";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import NFTSection from "../../Common/NFTSection/NFTSection";
import PageTitle from "../../Common/PageTitle/PageTitle";
import NFTMarketplaceWelcome from "../../Modals/NFTMarketplaceWelcome";

const Marketplace = () => {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);

  const closeWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
  };

  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="Nft Marketplace" />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MARKETPLACE} />
      <div className="content-container">
        <SearchAndFilters hasSortByOptions={true} hasCollectionOptions={true} />

        <NFTSection isLootbox={false} />
      </div>

      <NFTMarketplaceWelcome
        isOpen={isWelcomeModalOpen}
        onClose={closeWelcomeModal}
      />
    </StyledPageContainer>
  );
};

export default Marketplace;
