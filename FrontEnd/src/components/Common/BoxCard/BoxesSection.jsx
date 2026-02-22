import React, { useState } from "react";

import { DAILY_BONUSES } from "../../../assets/MockData/mockData";
import { ReactComponent as BONUSES } from "../../../assets/images/Frame (29).svg";
import useSlider from "../../../hooks/useSlider";
import SectionHeader from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";
import BoxCard from "./BoxCard";

const BoxesSection = () => {
  const { containerRef, scrollLeft, scrollRight } = useSlider();
  const filterOptions = ["Day", "Week", "Month", "All"];

  const [activeOption, setActiveOption] = useState(filterOptions[0]);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const selectedCards = DAILY_BONUSES[activeOption] || [];

  const CardsComponent = selectedCards.map((boxData, index) => (
    <BoxCard key={index} {...boxData} />
  ));

  return (
    <>
      <SectionHeader
        iconHeader={BONUSES}
        casinoText="Daily Bonuses"
        sideButton="My Rewards"
        sideButtonLink="/nft/lootboxes/play"
        hasFilterOptions={true}
        onOptionChange={handleOptionChange}
        filterOptions={filterOptions}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      <Slider CardsComponent={CardsComponent} containerRef={containerRef} />
    </>
  );
};

export default BoxesSection;
