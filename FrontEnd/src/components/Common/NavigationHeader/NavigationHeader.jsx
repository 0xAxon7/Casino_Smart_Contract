import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { ReactComponent as AK_ORIGINALS } from "../../../assets/images/AK Originals.svg";
import { ReactComponent as BONUS_BATTLES } from "../../../assets/images/Bonus_Battle.svg";
import { ReactComponent as CASINO_IMG } from "../../../assets/images/Frame (9).svg";
import { ReactComponent as GAME_SHOWS } from "../../../assets/images/Hat.svg";
import { ReactComponent as LIVE_CASINO } from "../../../assets/images/Live Casino.svg";
import { ReactComponent as WITH_SIDEBETS } from "../../../assets/images/WithSidebets.svg";
import { StyledNavHeaderBtn, StyledNavigationHeader } from "./styles";

const BUTTONS_CASINO = [
  { icon: <CASINO_IMG />, label: "Lobby", url: "/casino" },
  { icon: <AK_ORIGINALS />, label: "Rollbit", url: "/ak-originals" },
  { icon: <CASINO_IMG />, label: "Slots", url: "/slots" },
  { icon: <GAME_SHOWS />, label: "Shows", url: "/game-shows" },
  { icon: <LIVE_CASINO />, label: "Live", url: "/live-casino" },
  { icon: <WITH_SIDEBETS />, label: "Sidebets", url: "/with-sidebets" },
  { icon: <BONUS_BATTLES />, label: "Battles", url: "/bonus-battles" },
];

const BUTTONS_NFT = [
  { label: "Lobby", url: "/casino" },
  { label: "Rollbit", url: "/ak-originals" },
  { label: "Slots", url: "/slots" },
  { label: "Shows", url: "/game-shows" },
  { label: "Live", url: "/live-casino" },
  { label: "Sidebets", url: "/with-sidebets" },
  { label: "Battles", url: "/bonus-battles" },
];

const NavigationHeader = ({ isNftPage }) => {
  const { selectedOption, updateSelectedOption } = useContext(AppContext);
  const [buttons, setButtons] = useState(
    isNftPage ? BUTTONS_NFT : BUTTONS_CASINO
  );

  return (
    <StyledNavigationHeader>
      <div className="content-wrapper">
        {buttons.map((button, index) => (
          <Link
            to={button.url}
            onClick={() => updateSelectedOption(button.url)}
          >
            <StyledNavHeaderBtn
              className={button.url === selectedOption ? "active" : ""}
            >
              {button.icon && (
                <div
                  className={`btn-icon ${
                    button.url === selectedOption ? "active-icon" : ""
                  }`}
                >
                  {button.icon}
                </div>
              )}
              {button.label}
            </StyledNavHeaderBtn>
          </Link>
        ))}
      </div>
    </StyledNavigationHeader>
  );
};

export default NavigationHeader;
