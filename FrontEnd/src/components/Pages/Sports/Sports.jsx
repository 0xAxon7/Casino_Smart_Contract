import React, { useContext } from "react";

import SportSection from "./Common/SportSection/SportSection";

import { AppContext } from "../../../context/AppContext";
import { ReactComponent as LIVE_MATCHES } from "../../../assets/images/live-matches.svg";
import { ReactComponent as TOP_MATCHES } from "../../../assets/images/top-matches.svg";
import NoSportFound from "./Common/SportSection/NoSportFound";
import FooterSports from "./MyBets/FooterSports";
import {
  SportsBannerImage,
  StyledSportsContainer,
} from "./StyledSportsContainer";

const Sports = () => {
  const { sportsSelectedOption } = useContext(AppContext);

  return (
    <StyledSportsContainer>
      {sportsSelectedOption === "/home" || sportsSelectedOption === "" ? (
        <>
          <SportsBannerImage />
          <SportSection titleIcon={<TOP_MATCHES />} hasBigContainer={true} />
          <SportSection
            titleIcon={<LIVE_MATCHES />}
            isLive={true}
            hasBigContainer={true}
          />
          <SportSection titleIcon={<LIVE_MATCHES />} />
        </>
      ) : (
        <NoSportFound />
      )}
      <FooterSports />
    </StyledSportsContainer>
  );
};

export default Sports;
