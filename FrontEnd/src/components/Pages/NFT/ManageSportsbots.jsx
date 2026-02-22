import React from "react";

import { useParams } from "react-router-dom";
import { BUTTONS_MANAGE_SPORTSBOTS } from "../../../assets/MockData/mockData";
import { ReactComponent as NFT_IMG } from "../../../assets/images/Frame (11).svg";
import ManageTopSection from "../../Common/NFTSection/ManageTopSection";
import NFTSection from "../../Common/NFTSection/NFTSection";
import NotFound from "../../Common/NotFound/NotFound";
import PageTitle from "../../Common/PageTitle/PageTitle";
import SearchAndFilters from "../../Common/SearchAndFilters/SearchAndFilters";
import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

const TABS = {
  PORTFOLIO: "portfolio",
  MARKETPLACE: "marketplace",
  CLAIMED: "claimed",
};

const topSectionData = [
  { name: "Bonuses: Available Now", value: "", showInfo: false },
  { name: "Profit Claimed:", value: "0.00%", showInfo: true },
  { name: "Freebets Claimed:", value: "0.00%", showInfo: true },
  { name: "Number of Claims:", value: "0", showInfo: true },
  // Add more data items as needed
];

const ManageSportsbots = () => {
  const { tab } = useParams();

  const renderContent = () => {
    switch (tab) {
      case TABS.PORTFOLIO:
        return (
          <>
            <SearchAndFilters hasSortByOptions={true} />
            <NotFound text="NO NFTS FOUND" />
          </>
        );

      case TABS.MARKETPLACE:
        return (
          <>
            <SearchAndFilters
              hasSwitchToggle={true}
              labelSwitchToggle="Mine Only"
              hasSortByOptions={true}
              hasTraitsOptions={true}
            />
            <NFTSection isLootbox={false} />
          </>
        );

      case TABS.CLAIMED:
        return (
          <>
            <SearchAndFilters hasSortByOptions={true} />
            <NotFound text="NO SPORTSBOTS FOUND" />
          </>
        );

      default:
        return (
          <>
            <NotFound text="NO NFTS FOUND" />
          </>
        );
    }
  };

  return (
    <StyledPageContainer>
      <PageTitle icon={NFT_IMG} title="SPORTS ROLLBOTS" />

      <ManageTopSection data={topSectionData} />

      <NFTNavigationHeader buttons={BUTTONS_MANAGE_SPORTSBOTS} />

      <div className="content-container">{renderContent()}</div>
    </StyledPageContainer>
  );
};

export default ManageSportsbots;
