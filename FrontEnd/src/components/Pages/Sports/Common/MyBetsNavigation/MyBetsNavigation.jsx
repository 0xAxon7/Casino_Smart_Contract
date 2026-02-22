import React from "react";
import { MY_BETS_OPTIONS } from "../../../../../assets/MockData/dropdownsData";
import DropdownMyBets from "./DropdownMyBets";
import { StyledNavHeaderBtn, StyledNavigationHeader } from "./styles";

const MyBetsNavigation = ({
  buttons,
  onOptionChange,
  onDropdownChange,
  selectedOption,
  selectedOptionDropdown,
}) => {
  return (
    <StyledNavigationHeader>
      <div className="content-wrapper">
        {buttons.map((button, index) => (
          <StyledNavHeaderBtn
            key={index}
            onClick={() => onOptionChange(button.label)}
            isActive={button.label === selectedOption}
            style={{ textTransform: "uppercase" }}
          >
            {button.label}
          </StyledNavHeaderBtn>
        ))}
      </div>

      <DropdownMyBets
        options={MY_BETS_OPTIONS}
        selectedOption={selectedOptionDropdown}
        onSelectOption={onDropdownChange}
      />
    </StyledNavigationHeader>
  );
};

export default MyBetsNavigation;
