import React from "react";
import { StyledTeamCard } from "./StyledTopMatch";

const TeamCard = ({ teamLogo, teamName, teamRating }) => {
  return (
    <StyledTeamCard>
      <img src={teamLogo} alt={`${teamName}-logo`} />
      <div>{teamName}</div>
      <div>{teamRating}</div>
    </StyledTeamCard>
  );
};

export default TeamCard;
