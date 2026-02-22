import React from "react";

import { ReactComponent as LIVE_MATCHES } from "../../../../../assets/images/live-matches.svg";
import LeagueInformation from "./LeagueInformation";
import { StyledCardHeader } from "./StyledSportCard";

const SportCardHeader = ({ sportType, country, league, date, isLive }) => {
  return (
    <StyledCardHeader>
      <LeagueInformation
        country={country}
        sportType={sportType}
        league={league}
        date={date}
      />
      <div className="w-full flex items-center justify-between">
        <div className="date-text">Tomorrow, 01:07</div>
        {isLive && <LIVE_MATCHES style={{ height: "16px" }} />}
      </div>
    </StyledCardHeader>
  );
};

export default SportCardHeader;
