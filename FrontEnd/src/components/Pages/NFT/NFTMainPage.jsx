import React from "react";

import {
  BUTTONS_NFT_MAIN,
  NFT_BANNER_OPTIONS,
} from "../../../assets/MockData/mockData";
import { ReactComponent as NFT_IMG } from "../../../assets/images/Frame (11).svg";
import NFTBanner from "../../Common/NFTBanner/NFTBanner";
import NTFSection from "../../Common/NFTCard/NTFSectionWithHeader";
import HeaderCollection from "../../Common/SupportedCollection/HeaderCollection";
import SupportedCollectionSection from "../../Common/SupportedCollection/SupportedCollectionSection";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

const NFTMainPage = () => {
  return (
    <StyledPageContainer>
      <NFTBanner bannerOptions={NFT_BANNER_OPTIONS} />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MAIN} />

      <LiveWinsSection
        icon={NFT_IMG}
        title="Recent nft wins"
        hasFilters={false}
      />

      <NTFSection
        title="NFT DEALS"
        buttonText="View Marketplace"
        buttonLink="/nft/marketplace"
        isLootbox={false}
      />

      <NTFSection
        title="NFT LOOTBOXES"
        buttonText="View All"
        buttonLink="/nft/lootboxes/play"
        isLootbox={true}
      />

      <div style={{ paddingTop: "32px" }}>
        <HeaderCollection />
        <SupportedCollectionSection />
      </div>
    </StyledPageContainer>
  );
};

export default NFTMainPage;
