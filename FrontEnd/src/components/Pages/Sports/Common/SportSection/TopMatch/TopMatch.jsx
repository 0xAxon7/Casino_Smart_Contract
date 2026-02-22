import React, { useContext, useEffect, useState } from "react";
import LeagueInformation from "../../SportCard/LeagueInformation";
import { FullColumnWrapper } from "../FullColumnWrapper";
import {
  StyledBetButton,
  StyledBetsSection,
  StyledFooterSection,
  StyledInput,
  StyledPlaceBetButton,
  StyledRoundButton,
  StyledTopMatchContainer,
  StyledTopMatchContent,
  StyledTopMatchHeader,
} from "./StyledTopMatch";
import TeamCard from "./TeamCard";

import { AppContext } from "../../../../../../context/AppContext";
import { ReactComponent as ARROW_DOWN } from "../../../../../../assets/images/Arrow-Down.svg";
import { ReactComponent as ARROW_LEFT } from "../../../../../../assets/images/arrow-left-container.svg";
import { ReactComponent as ARROW_RIGHT } from "../../../../../../assets/images/arrow-right-container.svg";
import BORUSIA_LOGO from "../../../../../../assets/images/borusia-logo.png";
import CHELSEA_LOGO from "../../../../../../assets/images/chelsea-logo.png";
import DrawCard from "./DrawCard";

const betAmounts = [10, 100, 1000, 10000];

const StyledPriceDisplay = ({ value, onChange }) => {
  return <StyledInput type="text" value={value} onChange={onChange} />;
};

const eventStartTime = new Date("2023-11-08T01:07:00Z");

const calculateTimeRemaining = () => {
  const now = new Date();
  const difference = eventStartTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return { days, hours, minutes };
};

const TopMatch = ({ icon, numColumns }) => {
  const { isMobileScreen } = useContext(AppContext);

  const [selectedBetAmount, setSelectedBetAmount] = useState(betAmounts[0]);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  const handleBetButtonClick = (amount) => {
    setSelectedBetAmount(amount);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setSelectedBetAmount(newValue);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const { days, hours, minutes } = timeRemaining;

  return (
    <FullColumnWrapper numColumns={numColumns}>
      <StyledTopMatchContainer>
        <div className="center-content">
          <StyledTopMatchHeader>
            <div className="title">{icon} Top Matches</div>
            <div className="subtitle">Event Starts In</div>
            <div className="timer-container">
              <div className="time">
                {" "}
                {days.toString().padStart(2, "0")} :{" "}
                {hours.toString().padStart(2, "0")} :{" "}
                {minutes.toString().padStart(2, "0")}
              </div>
              <div className="time-text">
                <span>Days </span>
                <span> Hours </span>
                <span>Mins</span>
              </div>
            </div>
          </StyledTopMatchHeader>

          <StyledTopMatchContent>
            <LeagueInformation
              country="Germany"
              league="Bundesliga"
              sportType="football"
              date="Tomorrow, 01:07"
            />
            <div className="teams-container">
              <TeamCard
                teamLogo={BORUSIA_LOGO}
                teamName={"Borusia Dortmund"}
                teamRating={"1.85"}
              />
              <DrawCard rating={"3.5"} />
              <TeamCard
                teamLogo={CHELSEA_LOGO}
                teamName={"Chelsea London"}
                teamRating={"4.37"}
              />
            </div>
          </StyledTopMatchContent>

          <StyledBetsSection>
            <div className="bets-container">
              <StyledPriceDisplay
                value={`${selectedBetAmount}$`}
                onChange={handleInputChange}
              />
              {betAmounts.map((amount, index) =>
                isMobileScreen &&
                (index === betAmounts.length - 1 ||
                  index === betAmounts.length - 2) ? null : (
                  <StyledBetButton
                    key={amount}
                    isActive={+selectedBetAmount === amount}
                    onClick={() => handleBetButtonClick(amount)}
                  >
                    {amount}
                  </StyledBetButton>
                )
              )}
            </div>
            <StyledPlaceBetButton
              onClick={() => setSelectedBetAmount(betAmounts[0])}
            >
              PLACE BET
            </StyledPlaceBetButton>
          </StyledBetsSection>
        </div>

        <StyledFooterSection>
          <StyledRoundButton>
            <ARROW_LEFT />
          </StyledRoundButton>
          <div className="center-option">
            GO TO EVENTS <ARROW_DOWN />{" "}
          </div>
          <StyledRoundButton>
            <ARROW_RIGHT />
          </StyledRoundButton>
        </StyledFooterSection>
      </StyledTopMatchContainer>
    </FullColumnWrapper>
  );
};

export default TopMatch;
