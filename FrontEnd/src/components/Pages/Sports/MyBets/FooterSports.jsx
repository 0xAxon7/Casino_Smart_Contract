import { ODDS_FORMAT_OPTIONS } from "../../../../assets/MockData/dropdownsData";
import DropdownMyBets from "../Common/MyBetsNavigation/DropdownMyBets";

import React, { useState } from "react";
import { StyledFooterSports } from "./styles";

const FooterSports = () => {
  const [selectedOddFormat, setSelectedOddFormat] = useState("European");

  const handleOddChange = (option) => {
    setSelectedOddFormat(option);
  };
  return (
    <StyledFooterSports>
      <div class="content">
        <div>
          <div class="odds-container">
            <div class="label" data-editor-id="oddsFormatSelectLabel">
              Odds Format
            </div>
            <DropdownMyBets
              options={ODDS_FORMAT_OPTIONS}
              selectedOption={selectedOddFormat}
              onSelectOption={handleOddChange}
              buttonClassName="button-dropdown"
            />
          </div>
        </div>
        <div class="description" data-editor-id="marketNoticeMessage">
          Although every effort is made to ensure data displayed on our site is
          accurate, this data is for information purposes and should be used as
          a guide only. In the event of any particular information being
          incorrect, we assume no liability for it.
        </div>
      </div>
    </StyledFooterSports>
  );
};

export default FooterSports;
