import React from "react";

import useSlider from "../../../hooks/useSlider";
import SectionHeader from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";
import { StyleDepositedNFT } from "./styles";

const DepositedNFTsSection = () => {
  const { containerRef, scrollLeft, scrollRight } = useSlider();

  const CardsComponent = Array(4)
    .fill()
    .map(() => <StyleDepositedNFT />);

  return (
    <>
      <SectionHeader
        casinoText="0 DEPOSITED NFTS ELIGIBLE FOR LOAN"
        sideButton="View Portfolio"
        hasFilterOptions={false}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        style={{ marginBottom: "20px" }}
      />
      <Slider CardsComponent={CardsComponent} containerRef={containerRef} />
    </>
  );
};

export default DepositedNFTsSection;
