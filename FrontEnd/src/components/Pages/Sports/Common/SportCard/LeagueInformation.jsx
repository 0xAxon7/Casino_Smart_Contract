import React from "react";

import { ReactComponent as ARROW_RIGHT } from "../../../../../assets/images/arrow-right.svg";
import { ReactComponent as FOOTBALL } from "../../../../../assets/images/football-icon.svg";
import { ReactComponent as STATISTICS } from "../../../../../assets/images/statistics.svg";
import { StyledLeagueInformation } from "./StyledSportCard";

const LeagueInformation = ({ sportType, country, league, date }) => {
  const SPORT_ICON = sportType === "football" ? FOOTBALL : FOOTBALL;

  return (
    <StyledLeagueInformation>
      <div className="icon-text-container">
        <SPORT_ICON />
        <div className="header-text">
          <div>{country} </div>
          <ARROW_RIGHT />
          <div>{league}</div>
        </div>
      </div>
      {date ? (
        <div className="header-text">{date}</div>
      ) : (
        <STATISTICS style={{ width: "32px" }} />
      )}
    </StyledLeagueInformation>
  );
};

export default LeagueInformation;
