import React, { useEffect, useState } from "react";

import { BUTTONS_MY_BETS } from "../../../../assets/MockData/mockData";
import { ReactComponent as MY_BETS } from "../../../../assets/images/MyBets.svg";
import PageTitle from "../../../Common/PageTitle/PageTitle";
import MyBetsNavigation from "../Common/MyBetsNavigation/MyBetsNavigation";
import NoBetsFound from "../Common/NoBetsFound/NoBetsFound";
import FooterSports from "./FooterSports";
import { StyledMyBetsContainer } from "./styles";

const MyBets = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [selectedOptionDropdown, setSelectedOptionDropdown] =
    useState("Last Bets");
  const [loading, setLoading] = useState(false);

  const handleOptionChange = (option) => {
    setLoading(true); // Set loading state to true when the option changes.
    setSelectedOption(option);
  };

  const handleDropdownChange = (option) => {
    setLoading(true); // Set loading state to true when the option changes.
    setSelectedOptionDropdown(option);
  };

  // Simulate asynchronous data loading
  useEffect(() => {
    // You can use a real API call or mock data loading here
    setTimeout(() => {
      setLoading(false); // Set loading state to false when the data is loaded.
    }, 500); // Simulating a 2-second delay for data loading.
  }, [selectedOption, selectedOptionDropdown]);

  return (
    <StyledMyBetsContainer>
      <div className="bets-content">
        <PageTitle icon={MY_BETS} title="My Bets" />
        <MyBetsNavigation
          buttons={BUTTONS_MY_BETS}
          onOptionChange={handleOptionChange}
          onDropdownChange={handleDropdownChange}
          selectedOption={selectedOption}
          selectedOptionDropdown={selectedOptionDropdown}
        />

        <NoBetsFound isLoading={loading} />
      </div>

      <FooterSports />
    </StyledMyBetsContainer>
  );
};

export default MyBets;
