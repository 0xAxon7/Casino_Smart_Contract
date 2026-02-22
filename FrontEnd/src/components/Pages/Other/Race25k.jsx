import React from "react";

import { StyledPageContainer } from "../Casino/styles";

import { ReactComponent as AWARD_IMG } from "../../../assets/images/Frame (17).svg";
import PageIsInDevelopmentStage from "../../Common/PageNotReady/PageIsInDevelopmentStage";
import PageTitle from "../../Common/PageTitle/PageTitle";

const Race25K = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={AWARD_IMG} title="25K Race" />

      <PageIsInDevelopmentStage />
    </StyledPageContainer>
  );
};

export default Race25K;
