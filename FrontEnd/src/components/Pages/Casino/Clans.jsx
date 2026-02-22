import React from "react";

import { StyledPageContainer } from "../Casino/styles";

import { ReactComponent as CLANS_IMG } from "../../../assets/images/Frame (14).svg";
import PageIsInDevelopmentStage from "../../Common/PageNotReady/PageIsInDevelopmentStage";
import PageTitle from "../../Common/PageTitle/PageTitle";

const Clans = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={CLANS_IMG} title="Clans" />

      <PageIsInDevelopmentStage />
    </StyledPageContainer>
  );
};

export default Clans;
