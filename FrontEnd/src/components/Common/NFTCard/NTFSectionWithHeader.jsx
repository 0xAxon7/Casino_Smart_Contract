import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import NFTCard from "./NFTCard";

import { Link } from "react-router-dom";
import { NFTS_DATA } from "../../../assets/MockData/mockData";
import { ReactComponent as NFT_IMG } from "../../../assets/images/Frame (11).svg";
import useSlider from "../../../hooks/useSlider";
import Slider from "../Slider/Slider";

const NFTSectionWithHeader = ({ isLootbox, title, buttonText, buttonLink }) => {
  const { containerRef, scrollLeft, scrollRight } = useSlider();

  const CardsComponent = NFTS_DATA.map((card, index) => (
    <Link to={`/nft/details/${card.id}`} key={index}>
      <NFTCard
        imageSrc={card.imageSrc}
        title={card.title}
        subTitle={card.subTitle}
        amount={card.amount}
        buttonText={card.buttonText}
        prices={card.prices}
        currentPrice={card.currentPrice}
        hasPercentageText={card.hasPercentageText}
        isLootbox={isLootbox}
        isSliderElement={true}
      />
    </Link>
  ));

  return (
    <>
      <SectionHeader
        iconHeader={NFT_IMG}
        casinoText={title}
        sideButton={buttonText}
        sideButtonLink={buttonLink}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        style={{ marginBottom: "20px" }}
      />
      <Slider CardsComponent={CardsComponent} containerRef={containerRef} />
    </>
  );
};

export default NFTSectionWithHeader;
