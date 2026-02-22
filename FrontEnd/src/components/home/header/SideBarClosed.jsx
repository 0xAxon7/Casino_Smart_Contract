import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { SECTIONS } from "../../../assets/MockData/mockData";
import { ReactComponent as COLLAPSE_IMG } from "../../../assets/images/Frame (34).svg";
import MyPopover from "../../Common/Popover/MyPopover";
import { StyledClosedSidebar } from "./StyledSidebar";

const SideBarClosed = ({ toggleSideBar }) => {
  const [sections, setSections] = useState(SECTIONS);
  const { selectedOption, updateSelectedOption } = useContext(AppContext);

  return (
    <StyledClosedSidebar>
      <MyPopover
        icon={<COLLAPSE_IMG style={{ width: "25px", height: "25px" }} />}
        position="left"
        title="Collapse"
        onClick={() => toggleSideBar(true)}
      />

      {sections.map((section) =>
        section.options.map((option, optionIndex) => (
          <MyPopover
            parentOption={option}
            subOptions={option?.dropdownOptions}
            position="left"
            onClick={() => updateSelectedOption(option.sidebarUrl)}
          />
        ))
      )}
    </StyledClosedSidebar>
  );
};

export default SideBarClosed;
