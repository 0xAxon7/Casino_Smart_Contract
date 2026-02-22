import React from "react";
import { StyledHoverableImgMainHome } from "./styles";

const HoverableImgMainHome = ({ src, alt }) => {
  return (
    <div>
      <StyledHoverableImgMainHome>
        <img src={src} alt={alt} className="image-card" />
      </StyledHoverableImgMainHome>
    </div>
  );
};

export default HoverableImgMainHome;
