import React from "react";
import { StyledHoverableImage } from "./styles";

const HoverableImage = ({ src, alt }) => {
  return (
    <div>
      <StyledHoverableImage>
        <img src={src} alt={alt} className="image-card" />
      </StyledHoverableImage>
    </div>
  );
};

export default HoverableImage;
