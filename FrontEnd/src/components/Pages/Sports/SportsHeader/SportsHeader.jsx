import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledSportNavOption, StyledSportsHeader } from "./StyledSportsHeader";

import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { ReactComponent as ARROW_DOWN } from "../../../../assets/images/Arrow-Down.svg";
import { ReactComponent as MY_BETS } from "../../../../assets/images/MyBets.svg";
import { ReactComponent as AMERICAN_FOOTBALL } from "../../../../assets/images/american-football.svg";
import { ReactComponent as BASEBALL } from "../../../../assets/images/baseball.svg";
import { ReactComponent as BASKETBALL } from "../../../../assets/images/basketball.svg";
import { ReactComponent as BOXING } from "../../../../assets/images/boxing.svg";
import { ReactComponent as E_BATTLES } from "../../../../assets/images/e-battles.svg";
import { ReactComponent as ROCKET_LEAGUE } from "../../../../assets/images/e-boxing-icon.svg";
import { ReactComponent as E_PADDLEBOARD } from "../../../../assets/images/e-paddleboard-icon.svg";
import { ReactComponent as E_BASEBALL } from "../../../../assets/images/eBaseball.svg";
import { ReactComponent as FIFA } from "../../../../assets/images/fifa.svg";
import { ReactComponent as FOOTBALL } from "../../../../assets/images/football.svg";
import { ReactComponent as HANDBALL } from "../../../../assets/images/handball.svg";
import { ReactComponent as HEADPHONES } from "../../../../assets/images/headphones-icon.svg";
import { ReactComponent as HOME } from "../../../../assets/images/home-icon.svg";
import { ReactComponent as ICE_HOCKEY } from "../../../../assets/images/ice-hockey.svg";
import { ReactComponent as LIVE } from "../../../../assets/images/live-icon.svg";
import { ReactComponent as MMA } from "../../../../assets/images/mma-icon.svg";
import { ReactComponent as NBA_2K } from "../../../../assets/images/nba-2k.svg";
import { ReactComponent as PADDLEBOARD } from "../../../../assets/images/paddleboard-icon.svg";
import { ReactComponent as RUGBY } from "../../../../assets/images/rugby-icon.svg";
import { ReactComponent as SEARCH } from "../../../../assets/images/search-icon.svg";
import { ReactComponent as STAR } from "../../../../assets/images/star-icon.svg";
import { ReactComponent as TABLE_TENNIS } from "../../../../assets/images/table-tennis-icon.svg";
import { ReactComponent as TENNIS } from "../../../../assets/images/tennis-icon.svg";
import { ReactComponent as VOLLEYBALL } from "../../../../assets/images/volleyball.svg";
import FireIcon from "../Common/SportCard/FireIcon";
import SportHeaderDropdown from "../Common/SportCard/SportHeaderDropdown";

export const optionsSport = [
  { name: "Home", isFire: false, icon: <HOME />, url: "/home" },
  { name: "Live", isFire: false, icon: <LIVE />, url: "/live" },
  { name: "Star", isFire: false, icon: <STAR />, url: "/star" },
  { name: "Soccer", isFire: true, icon: <FOOTBALL />, url: "/soccer" },
  {
    name: "Basketball",
    isFire: true,
    icon: <BASKETBALL />,
    url: "/basketball",
  },
  {
    name: "Ice Hockey",
    isFire: true,
    icon: <ICE_HOCKEY />,
    url: "/ice-hockey",
  },
  {
    name: "Headphones",
    isFire: false,
    icon: <HEADPHONES />,
    url: "/headphones",
  },
  { name: "Fifa", isFire: false, icon: <FIFA />, url: "/fifa" },
  {
    name: "Volleyball",
    isFire: true,
    icon: <VOLLEYBALL />,
    url: "/volleyball",
  },
  { name: "Tennis", isFire: false, icon: <TENNIS />, url: "/tennis" },
  {
    name: "American Football",
    isFire: false,
    icon: <AMERICAN_FOOTBALL />,
    url: "/american-footbal",
  },
  { name: "MMA", isFire: true, icon: <MMA />, url: "/mma" },
  { name: "Baseball", isFire: false, icon: <BASEBALL />, url: "/baseball" },
  {
    name: "Paddleboard",
    isFire: false,
    icon: <PADDLEBOARD />,
    url: "/paddleboard",
  },
  {
    name: "E-Baseball",
    isFire: false,
    icon: <E_BASEBALL />,
    url: "/e-baseball",
  },
  { name: "Handball", isFire: false, icon: <HANDBALL />, url: "/handball" },
  {
    name: "Table Tennis",
    isFire: false,
    icon: <TABLE_TENNIS />,
    url: "/table-tennis",
  },
  { name: "E-Battles", isFire: false, icon: <E_BATTLES />, url: "/e-battles" },
  { name: "Boxing", isFire: false, icon: <BOXING />, url: "/boxing" },
  { name: "NBA-2k", isFire: false, icon: <NBA_2K />, url: "/nba-2k" },
  {
    name: "Rocket League",
    isFire: false,
    icon: <ROCKET_LEAGUE />,
    url: "/rocket-league",
  },
  { name: "Rugby", isFire: false, icon: <RUGBY />, url: "/rugby" },
  {
    name: "E-Paddleboard",
    isFire: false,
    icon: <E_PADDLEBOARD />,
    url: "/e-paddleboard",
  },
];

const SportsHeader = () => {
  const location = useLocation();

  const { isMobileScreen, sportsSelectedOption, updateSportsSelectedOption } =
    useContext(AppContext);

  const [numOptionsToDisplay, setNumOptionsToDisplay] = useState(
    optionsSport.length
  );
  const [resizeCount, setResizeCount] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const containerRef = useRef(null);

  const handleArrowDownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const updateQueryParams = () => {
      const urlParams = new URLSearchParams(location.search);
      const param = urlParams.get("bt-path");
      if (param) {
        updateSportsSelectedOption(param); // Update the global state
      }
    };

    // Call the function when the component mounts
    updateQueryParams();

    return () => {
      updateSportsSelectedOption("/home");
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const newResizeCount = Math.floor(
          containerRef.current.offsetWidth / (isMobileScreen ? 36 : 32)
        );
        if (newResizeCount !== resizeCount) {
          setResizeCount(newResizeCount);
          setNumOptionsToDisplay(
            Math.min(optionsSport.length, newResizeCount / 2)
          );
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resizeCount]);

  return (
    <StyledSportsHeader ref={containerRef}>
      <div className="navigation-options">
        {optionsSport.slice(0, numOptionsToDisplay).map((button, index) => {
          const buttonIsActive = button.url === sportsSelectedOption;
          return (
            <Link
              to={`/sports?bt-path=${encodeURIComponent(button.url)}`}
              onClick={() => updateSportsSelectedOption(button.url)}
              key={index}
            >
              <StyledSportNavOption isActive={buttonIsActive}>
                {button?.isFire && <FireIcon />}
                {button.icon}
              </StyledSportNavOption>
            </Link>
          );
        })}
        <div style={{ display: "flex" }}>
          <div style={{ position: "relative" }}>
            <a href="#nav2">
              <StyledSportNavOption onClick={handleArrowDownClick}>
                <ARROW_DOWN
                  style={{
                    width: "10px",
                    height: "10px",
                    rotate: isDropdownOpen ? "180deg" : "",
                  }}
                />
              </StyledSportNavOption>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-actions"></div>
      <Link
        to={"/my-bets"}
        onClick={() => updateSportsSelectedOption("myBets")}
      >
        <StyledSportNavOption isActive={sportsSelectedOption === "myBets"}>
          <MY_BETS />
        </StyledSportNavOption>
      </Link>
      <Link to={"#"} onClick={() => updateSportsSelectedOption("search")}>
        <StyledSportNavOption isActive={sportsSelectedOption === "search"}>
          <SEARCH />
        </StyledSportNavOption>
      </Link>
      {isDropdownOpen && <SportHeaderDropdown isOpen={isDropdownOpen} />}
    </StyledSportsHeader>
  );
};

export default SportsHeader;
