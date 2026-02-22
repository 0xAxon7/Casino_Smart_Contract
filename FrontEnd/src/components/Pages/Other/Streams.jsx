import React from "react";

import { StyledPageContainer } from "../Casino/styles";

import { ReactComponent as VIDEO_IMG } from "../../../assets/images/Frame (16).svg";
import PageIsInDevelopmentStage from "../../Common/PageNotReady/PageIsInDevelopmentStage";
import PageTitle from "../../Common/PageTitle/PageTitle";

const Streams = () => {
  return (
    <StyledPageContainer>
      <PageTitle icon={VIDEO_IMG} title="Streams" />

      <PageIsInDevelopmentStage />
    </StyledPageContainer>
  );
};

export default Streams;
