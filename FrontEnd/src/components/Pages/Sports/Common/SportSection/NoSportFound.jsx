import React from "react";
import { ReactComponent as NO_BETS_FOUND } from "../../../../../assets/images/no-bets-found.svg";
import { StyledNoBetsFound } from "../NoBetsFound/styles";

const NoSportFound = () => {
  return (
    <StyledNoBetsFound>
      <div class="container">
        <div class="content-block" data-editor-id="emptyBetsBlock">
          <NO_BETS_FOUND />
          <div class="info-text">
            This Sport is Not Available Yet <br /> Choose a different one
          </div>
        </div>
      </div>
    </StyledNoBetsFound>
  );
};

export default NoSportFound;
