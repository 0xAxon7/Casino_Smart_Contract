import React, { useState } from "react";

import { ReactComponent as ARROW_DOWN } from "../../../../../assets/images/Arrow-Down.svg";
import { ReactComponent as ATLETICO_LOGO } from "../../../../../assets/images/Atletico-icon.svg";
import { ReactComponent as REAL_LOGO } from "../../../../../assets/images/Real-logo.svg";

import { DropdownBtn } from "../../../../Common/Buttons/DropdownBtn";
import ExtendedCard from "./ExtendedCard";
import SportCardHeader from "./SportCardHeader";
import { StyledSportCard } from "./StyledSportCard";
import TeamContainer from "./TeamContainer";
import WinningRateBtn from "./WinningRateBtn";

const SportCard = ({ isLive }) => {
  const [isExtended, setIsExtended] = useState(false);
  return (
    <StyledSportCard>
      <div className="card-container">
        <div className="card-content">
          <SportCardHeader
            country="Germany"
            league="Bundesliga"
            sportType="football"
            isLive={isLive}
          />

          <div className="playing-teams">
            <TeamContainer
              teamLogo={<ATLETICO_LOGO />}
              teamName="Atletico Bilbao"
              teamScore={"1"}
            />
            <TeamContainer
              teamLogo={<REAL_LOGO />}
              teamName="Real Madrid"
              teamScore={"2"}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="card-footer">
            <div className="team-options">
              <WinningRateBtn option="Team 13213" rate="3.4" />
              <WinningRateBtn option="draw" rate="1.8" />
              <WinningRateBtn option="Team 2" rate="2.1" />
            </div>
            <DropdownBtn
              onClick={() => setIsExtended((prev) => !prev)}
              className="dropdown-btn"
            >
              <ARROW_DOWN />
              {/* {isOpenedDropdown ? <ARROW_UP /> : <ARROW_DOWN />} */}
            </DropdownBtn>
          </div>
          {isExtended && <ExtendedCard />}
        </div>
      </div>
    </StyledSportCard>
  );
};

export default SportCard;
