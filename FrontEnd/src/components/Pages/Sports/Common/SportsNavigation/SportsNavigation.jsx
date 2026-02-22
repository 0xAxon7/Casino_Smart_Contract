import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BASKETBALL } from "../../../../../assets/images/basketball.svg";
import { ReactComponent as BOXING } from "../../../../../assets/images/boxing.svg";
import { ReactComponent as E_BASEBALL } from "../../../../../assets/images/eBaseball.svg";
import { ReactComponent as E_SHOOTER } from "../../../../../assets/images/eShooter.svg";
import { ReactComponent as FIFA } from "../../../../../assets/images/fifa.svg";
import { ReactComponent as FOOTBALL } from "../../../../../assets/images/football.svg";
import { ReactComponent as HANDBALL } from "../../../../../assets/images/handball.svg";
import { ReactComponent as ICE_HOCKEY } from "../../../../../assets/images/ice-hockey.svg";
import { ReactComponent as NBA_2K } from "../../../../../assets/images/nba-2k.svg";
import { ReactComponent as VOLLEYBALL } from "../../../../../assets/images/volleyball.svg";
import { StyledNavHeaderBtn, StyledNavigationHeader } from "./styles";

const buttons = [
  { icon: <FOOTBALL />, label: "Soccer", url: "/soccer" },
  {
    icon: <BASKETBALL />,
    label: "Basketball",
    url: "/basketball",
  },
  { icon: <ICE_HOCKEY />, label: "Ice Hockey", url: "/ice-hockey" },
  { icon: <FIFA />, label: "Fifa", url: "/fifa" },
  { icon: <VOLLEYBALL />, label: "Volleyball", url: "/volleyball" },
  { icon: <E_SHOOTER />, label: "eShooter", url: "/e-shooter" },
  { icon: <E_BASEBALL />, label: "eBaseball", url: "/e-baseball" },
  { icon: <HANDBALL />, label: "Handball", url: "/handball" },
  { icon: <BOXING />, label: "Boxing", url: "/boxing" },
  { icon: <NBA_2K />, label: "NBA 2K", url: "/nba-2k" },
];

const SportsNavigation = ({ selectedSport, updateSelectedSport }) => {
  return (
    <StyledNavigationHeader>
      <div className="content-wrapper">
        {buttons.map((button, index) => {
          const buttonIsActive = button.url === selectedSport;
          return (
            // <Link to={button.url} onClick={() => setSelectedOption(button.url)}>
            <Link to={"#"} onClick={() => updateSelectedSport(button.url)}>
              <StyledNavHeaderBtn isActive={buttonIsActive}>
                <div className="btn-icon">{button.icon}</div>
                {button.label}
              </StyledNavHeaderBtn>
            </Link>
          );
        })}
      </div>
    </StyledNavigationHeader>
  );
};

export default SportsNavigation;
