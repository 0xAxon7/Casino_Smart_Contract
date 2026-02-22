import React from "react";

const TeamContainer = ({ teamLogo, teamName, teamScore }) => {
  return (
    <div className="team-container">
      <div className="team-name">
        <div className="team-icon">{teamLogo}</div>
        <div className="name">{teamName}</div>
      </div>
      {teamScore && <div className="team-score">{teamScore}</div>}
    </div>
  );
};

export default TeamContainer;
