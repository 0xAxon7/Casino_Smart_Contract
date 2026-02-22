import React, { useState } from "react";

import { StyledPageContainer } from "../Casino/styles";

import { ReactComponent as PORTFOLIO_IMG } from "../../../assets/images/Frame (13).svg";
import PageIsInDevelopmentStage from "../../Common/PageNotReady/PageIsInDevelopmentStage";
import PageTitle from "../../Common/PageTitle/PageTitle";
import CryptoTrading from "../../Modals/CryptoTrading";
import CryptoTradingRisky from "../../Modals/CryptoTradingRisky";

const CryptoPortfolio = () => {
  const [isRiskyModalOpen, setIsRiskyModalOpen] = useState(true);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);

  const closeRiskyModal = () => {
    setIsRiskyModalOpen(false);
  };
  const closeWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
  };

  return (
    <StyledPageContainer>
      <PageTitle icon={PORTFOLIO_IMG} title="Crypto Portfolio" />

      <PageIsInDevelopmentStage />

      <CryptoTradingRisky isOpen={isRiskyModalOpen} onClose={closeRiskyModal} />
      <CryptoTrading isOpen={isWelcomeModalOpen} onClose={closeWelcomeModal} />
    </StyledPageContainer>
  );
};

export default CryptoPortfolio;
