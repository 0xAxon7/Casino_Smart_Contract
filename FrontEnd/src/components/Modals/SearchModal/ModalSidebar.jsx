import React from "react";
import { StyledModalSidebar } from "./styles";

import { ReactComponent as AK_ORIGINALS } from "../../../assets/images/AK Originals.svg";
import { ReactComponent as BONUS_BATTLES } from "../../../assets/images/Bonus_Battle.svg";
import { ReactComponent as CASINO_IMG } from "../../../assets/images/Frame (9).svg";
import { ReactComponent as GAME_SHOWS } from "../../../assets/images/Hat.svg";
import { ReactComponent as LIVE_CASINO } from "../../../assets/images/Live Casino.svg";
import { ReactComponent as WITH_SIDEBETS } from "../../../assets/images/WithSidebets.svg";

const BUTTONS_CASINO = [
  { icon: <BONUS_BATTLES />, category: "Casino", label: "Casino" },
  { icon: <CASINO_IMG />, category: "Casino", label: "All Games" },
  { icon: <AK_ORIGINALS />, category: "Casino", label: "Rollbit" },
  { icon: <CASINO_IMG />, category: "Casino", label: "Slots" },
  { icon: <GAME_SHOWS />, category: "Casino", label: "Shows" },
  { icon: <LIVE_CASINO />, category: "Casino", label: "Live" },
  { icon: <WITH_SIDEBETS />, category: "Casino", label: "Sidebets" },
  { icon: <BONUS_BATTLES />, category: "Casino", label: "Battles" },
];

const ModalSidebar = ({ selectedCategory, onCategoryChange }) => {
  return (
    <StyledModalSidebar>
      {BUTTONS_CASINO.map((button, index) => (
        <div
          className={`option ${
            button.label === selectedCategory ? "active" : ""
          }`}
          onClick={() => {
            onCategoryChange(button.label);
          }}
        >
          {button.icon && (
            <div
              className={`icon ${
                button.label === selectedCategory ? "active-icon" : ""
              }`}
            >
              {button.icon}
            </div>
          )}
          {button.label}
        </div>
      ))}
    </StyledModalSidebar>
  );
};

export default ModalSidebar;
