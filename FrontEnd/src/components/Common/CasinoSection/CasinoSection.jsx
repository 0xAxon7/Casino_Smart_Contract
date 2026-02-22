import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

import { ReactComponent as CASINO } from "../../../assets/images/Frame (9).svg";
import CASINO_IMG_1 from "../../../assets/images/IMAGE (14).png";
import CASINO_IMG_2 from "../../../assets/images/IMAGE (15).png";
import CASINO_IMG_3 from "../../../assets/images/IMAGE (16).png";
import CASINO_IMG_4 from "../../../assets/images/IMAGE (17).png";
import CASINO_IMG_5 from "../../../assets/images/IMAGE (18).png";
import CASINO_IMG_6 from "../../../assets/images/IMAGE (19).png";
import useSlider from "../../../hooks/useSlider";
import HoverableImgMainHome from "../HoverableImage/HoverableImgMainHome";
import Slider from "../Slider/Slider";
import { StyledCasinoSection } from "./StyledCasinoSection";

const casinoImages = [
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_1,
  CASINO_IMG_6,
  CASINO_IMG_1,
  CASINO_IMG_2,
  CASINO_IMG_3,
  CASINO_IMG_4,
  CASINO_IMG_5,
  CASINO_IMG_1,
  CASINO_IMG_6,
];

const CasinoSection = () => {
  const { containerRef, scrollLeft, scrollRight } = useSlider();

  const CardsComponent = casinoImages.map((image, index) => {
    return (
      <HoverableImgMainHome key={index} src={image} alt={`casino-${index}`} />
    );
  });

  return (
    <StyledCasinoSection>
      <SectionHeader
        iconHeader={CASINO}
        casinoText="CASINO"
        sideButton="View All"
        sideButtonLink="/casino"
        hasRecommended={true}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />

      <Slider CardsComponent={CardsComponent} containerRef={containerRef} />
    </StyledCasinoSection>
  );
};

export default CasinoSection;
