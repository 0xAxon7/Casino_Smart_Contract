import React from "react";

import { StyledPageContainer } from "../Casino/styles";

import { ReactComponent as JACKPOT_IMG } from "../../../assets/images/svg.svg";
import PageIsInDevelopmentStage from "../../Common/PageNotReady/PageIsInDevelopmentStage";
import PageTitle from "../../Common/PageTitle/PageTitle";

const Jackpot = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={JACKPOT_IMG} title="Jackpot" />

      <PageIsInDevelopmentStage />
    </StyledPageContainer>
  );
};

export default Jackpot;
