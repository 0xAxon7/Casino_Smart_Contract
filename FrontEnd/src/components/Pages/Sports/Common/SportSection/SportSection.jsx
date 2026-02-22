import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../../../context/AppContext";
import SportCard from "../SportCard/SportCard";
import SportsNavigation from "../SportsNavigation/SportsNavigation";
import NoSportFound from "./NoSportFound";
import SportsSectionTitle from "./SportsSectionTitle";
import {
  SportSectionContainer,
  StyledSportSection,
} from "./StyledSportSection";
import TopMatch from "./TopMatch/TopMatch";

const SportSection = ({
  titleIcon,
  isLive = false,
  hasBigContainer = true,
}) => {
  const { isTabletScreen } = useContext(AppContext);

  const containerRef = useRef(null);
  const [numColumns, setNumColumns] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [selectedSport, setSelectedSport] = useState("/soccer");

  useEffect(() => {
    const updateNumColumns = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setContainerWidth(containerWidth);
        if (containerWidth >= 1600) {
          setNumColumns(4);
        } else if (containerWidth >= 992) {
          setNumColumns(3);
        } else if (containerWidth >= 768) {
          setNumColumns(2);
        } else {
          setNumColumns(1);
        }
      }
    };

    updateNumColumns();

    window.addEventListener("resize", updateNumColumns);

    return () => {
      window.removeEventListener("resize", updateNumColumns);
    };
  }, []);

  const numElementsToShow = isTabletScreen ? (hasBigContainer ? 5 : 6) : 9;

  return (
    <SportSectionContainer>
      <SportsSectionTitle icon={titleIcon} name={"Top Matches"} />
      <SportsNavigation
        selectedSport={selectedSport}
        updateSelectedSport={setSelectedSport}
      />
      {selectedSport === "/soccer" ? (
        <StyledSportSection
          ref={containerRef}
          numColumns={numColumns}
          containerWidth={containerWidth}
        >
          {Array(numElementsToShow)
            .fill()
            .map((_, index) => (
              <SportCard key={index} isLive={isLive} />
            ))}
          {hasBigContainer && (
            <TopMatch icon={titleIcon} numColumns={numColumns} />
          )}
        </StyledSportSection>
      ) : (
        <NoSportFound />
      )}
    </SportSectionContainer>
  );
};

export default SportSection;
