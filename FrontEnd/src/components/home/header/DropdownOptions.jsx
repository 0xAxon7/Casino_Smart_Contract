import React from "react";
import CryptoFuturesCoins from "../../Common/CryptoFuturesCoins/CryptoFuturesCoins";
import SidebarOption from "./SidebarOption";

const DropdownOptions = ({
  options,
  onSubOptionClick,
  activeSubOptionIndex,
}) => {
  console.log("options", options);
  return (
    <div className="dropdown-options">
      {options.map((option, optionIndex) =>
        option.text === "Crypto Futures" ? (
          <CryptoFuturesCoins key={optionIndex} />
        ) : (
          <div key={optionIndex}>
            <SidebarOption
              {...option}
              onClick={() => onSubOptionClick(optionIndex, option.sidebarUrl)}
              isActive={option.sidebarUrl === activeSubOptionIndex}
            />
          </div>
        )
      )}
    </div>
  );
};

export default DropdownOptions;
