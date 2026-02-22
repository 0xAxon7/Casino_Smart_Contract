import React from "react";
import { StyledSlider } from "./StyledSlider";

const Slider = ({ CardsComponent, containerRef }) => {
  return <StyledSlider ref={containerRef}>{CardsComponent}</StyledSlider>;
};

export default Slider;
