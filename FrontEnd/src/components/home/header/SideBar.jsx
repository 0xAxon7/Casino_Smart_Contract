import React, { useContext, useState } from "react";
import { ReactComponent as BALANCE_IMG } from "../../../assets/images/AK BALANCE.svg";

import { AppContext } from "../../../context/AppContext";
import { SECTIONS } from "../../../assets/MockData/mockData";
import { ReactComponent as VISA_IMG } from "../../../assets/images/Frame (18).svg";
import { ReactComponent as DEBIT_IMG } from "../../../assets/images/Frame (19).svg";
import { ReactComponent as ARROW_ICON } from "../../../assets/images/Frame (2).svg";
import { ReactComponent as PAY_IMG } from "../../../assets/images/Frame (20).svg";
import { ReactComponent as GOOGLE_IMG } from "../../../assets/images/Frame (21).svg";
import Button from "../../Common/Buttons/Button";
import DropdownOptions from "./DropdownOptions";
import SideBarClosed from "./SideBarClosed";
import SidebarOption from "./SidebarOption";
import { StyledOpenedSidebar } from "./StyledSidebar";

const SideBar = () => {
  const [sections, setSections] = useState(SECTIONS);
  const {
    isTabletScreen,
    selectedOption,
    isSidebarOpen,
    updateSelectedOption,
    updateSidebar,
  } = useContext(AppContext);

  const handleDropdownClick = (sectionIndex, optionIndex, sidebarUrl) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].options[optionIndex].isOpenedDropdown =
      !updatedSections[sectionIndex].options[optionIndex].isOpenedDropdown;

    // Check if a sub-option is selected, reset main option if needed
    const selectedSubOption =
      sections[sectionIndex].options[optionIndex].selectedSubOption;
    if (
      selectedSubOption !== null &&
      !updatedSections[sectionIndex].options[optionIndex].isOpenedDropdown
    ) {
      updatedSections[sectionIndex].selectedOption = sidebarUrl;
      updateSelectedOption(sidebarUrl);
    } else if (
      selectedSubOption !== null &&
      updatedSections[sectionIndex].options[optionIndex].isOpenedDropdown
    ) {
      updatedSections[sectionIndex].selectedOption = null;
    }

    setSections(updatedSections);
  };

  const handleSidebarOptionClick = (sectionIndex, optionIndex, sidebarUrl) => {
    const updatedSections = sections.map((section, idx) => ({
      ...section,
      options: section.options.map((option, optIdx) => ({
        ...option,
        selectedSubOption: null,
      })),
      selectedOption: idx === sectionIndex ? sidebarUrl : null,
    }));
    setSections(updatedSections);
    updateSelectedOption(sidebarUrl);
  };

  const handleDropdownOptionClick = (
    sectionIndex,
    mainOptionIndex,
    subOptionIndex,
    sidebarUrl
  ) => {
    const updatedSections = sections.map((section, idx) => ({
      ...section,
      selectedOption: null,
      options: section.options.map((option, optIdx) => ({
        ...option,
        selectedSubOption:
          idx === sectionIndex && optIdx === mainOptionIndex
            ? sidebarUrl
            : null,
      })),
    }));
    updateSelectedOption(sidebarUrl);
    setSections(updatedSections);
  };

  if (isTabletScreen && !isSidebarOpen) return null;

  return isSidebarOpen ? (
    <StyledOpenedSidebar>
      <div className="sidebar-content">
        <div>
          <BALANCE_IMG width={"100%"} />
        </div>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {sectionIndex === 0 ? (
              <div className="w-38 flex justify-between items-center cursor-pointer">
                <span className="other-text">{section.name}</span>
                <ARROW_ICON onClick={() => updateSidebar(false)} />
              </div>
            ) : (
              <span className="other-text">{section.name}</span>
            )}

            <div className="other-section">
              {section.options.map((option, optionIndex) => (
                <>
                  <SidebarOption
                    key={optionIndex}
                    onClick={() =>
                      handleSidebarOptionClick(
                        sectionIndex,
                        optionIndex,
                        option.sidebarUrl
                      )
                    }
                    onClickDropdown={() =>
                      handleDropdownClick(
                        sectionIndex,
                        optionIndex,
                        option.sidebarUrl
                      )
                    }
                    {...option}
                    isActive={option.sidebarUrl === selectedOption}
                    sidebarUrl={option.sidebarUrl}
                    isBiggerOption={true}
                  />

                  {option.isOpenedDropdown && option.dropdownOptions && (
                    <DropdownOptions
                      options={option.dropdownOptions}
                      onSubOptionClick={(subOptionIndex, sidebarUrl) =>
                        handleDropdownOptionClick(
                          sectionIndex,
                          optionIndex,
                          subOptionIndex,
                          sidebarUrl
                        )
                      }
                      activeSubOptionIndex={selectedOption}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        ))}
        <div className="divider" />

        <div className="payment">
          <Button className="buy-crypto">Buy Crypto</Button>

          <div className="payment-methods">
            <VISA_IMG />
            <DEBIT_IMG />
            <PAY_IMG />
            <GOOGLE_IMG />
          </div>
        </div>
      </div>
    </StyledOpenedSidebar>
  ) : (
    <SideBarClosed toggleSideBar={updateSidebar} />
  );
};

export default SideBar;
