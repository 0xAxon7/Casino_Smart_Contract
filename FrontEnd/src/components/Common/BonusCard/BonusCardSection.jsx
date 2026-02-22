import React from "react";
import { ReactComponent as BONUS } from "../../../assets/images/Frame (27).svg";
import BOUNUS1 from "../../../assets/images/IMAGE (29).png";
import BOUNUS2 from "../../../assets/images/IMAGE (30).png";
import BOUNUS3 from "../../../assets/images/IMAGE (31).png";
import useSlider from "../../../hooks/useSlider";
import SectionHeader from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";
import BonusCard from "./BonusCard";

const bonusCards = [
  {
    imageSrc: BOUNUS2,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "pending",
  },
  {
    imageSrc: BOUNUS1,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "pending",
  },
  {
    imageSrc: BOUNUS1,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "pending",
  },
  {
    imageSrc: BOUNUS3,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "live",
  },
  {
    imageSrc: BOUNUS3,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "live",
  },
  {
    imageSrc: BOUNUS2,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "pending",
  },
  {
    imageSrc: BOUNUS2,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "pending",
  },
  {
    imageSrc: BOUNUS1,
    bonusText: "Bonus Buy",
    bonusAmount: "$10",
    playerText: "Players",
    playerCount: "2/5",
    buttonText: "Unavailable",
    buttonStatus: "pending",
  },
];

const BonusCardSection = () => {
  const { containerRef, scrollLeft, scrollRight } = useSlider();

  const CardsComponent = bonusCards.map((card, index) => (
    <BonusCard
      key={index}
      imageSrc={card.imageSrc}
      bonusText={card.bonusText}
      bonusAmount={card.bonusAmount}
      playerText={card.playerText}
      playerCount={card.playerCount}
      buttonText={card.buttonText}
      buttonStatus={card.buttonStatus}
    />
  ));
  return (
    <>
      <SectionHeader
        iconHeader={BONUS}
        casinoText="BONUS BATTLES"
        sideButton="View All"
        sideButtonLink="/bonus-battles"
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      <Slider CardsComponent={CardsComponent} containerRef={containerRef} />
    </>
  );
};

export default BonusCardSection;
