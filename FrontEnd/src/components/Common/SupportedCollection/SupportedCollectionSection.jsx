import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledSupportedCollectionSection } from "./styles";
import SupportedCollectionCard from "./SupportedCollectionCard";
import { AppContext } from "../../../context/AppContext";

const SupportedCollectionSection = () => {
  const { isSidebarOpen, isChatBoxOpen } = useContext(AppContext);

  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState("100%");

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        if (containerWidth >= 780) {
          setCardWidth("calc(50% - 12px)");
        } else {
          setCardWidth("100%");
        }
      }
    };

    updateCardWidth();

    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, [isSidebarOpen, isChatBoxOpen, containerRef]);

  return (
    <StyledSupportedCollectionSection ref={containerRef}>
      <SupportedCollectionCard cardWidth={cardWidth} />
      <SupportedCollectionCard cardWidth={cardWidth} />
      <SupportedCollectionCard cardWidth={cardWidth} />
      <SupportedCollectionCard cardWidth={cardWidth} />
      <SupportedCollectionCard cardWidth={cardWidth} />
      <SupportedCollectionCard cardWidth={cardWidth} />
      <SupportedCollectionCard cardWidth={cardWidth} />
    </StyledSupportedCollectionSection>
  );
};

export default SupportedCollectionSection;
