import React from "react";

import { StyledPageContainer } from "../Casino/styles";

import { ReactComponent as LOTTERY_IMG } from "../../../assets/images/Frame (15).svg";
import PageIsInDevelopmentStage from "../../Common/PageNotReady/PageIsInDevelopmentStage";
import PageTitle from "../../Common/PageTitle/PageTitle";

const AKLottery = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={LOTTERY_IMG} title="AK Lottery" />

      <PageIsInDevelopmentStage />
    </StyledPageContainer>
  );
};

export default AKLottery;
