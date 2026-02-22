import React from "react";

import { StyledPageContainer } from "../Casino/styles";
import NFTNavigationHeader from "./NFTNavigationHeader";

import { BUTTONS_NFT_MARKETPLACE } from "../../../assets/MockData/mockData";
import { ReactComponent as MARKETPLACE } from "../../../assets/images/Marketplace.svg";
import NotFound from "../../Common/NotFound/NotFound";
import PageTitle from "../../Common/PageTitle/PageTitle";

const NFTBox = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={MARKETPLACE} title="NFT Marketplace" />

      <NFTNavigationHeader buttons={BUTTONS_NFT_MARKETPLACE} />
      <div className="content-container">
        <NotFound text="YOU DON'T HAVE ANY BOX YET" />
      </div>
    </StyledPageContainer>
  );
};

export default NFTBox;
