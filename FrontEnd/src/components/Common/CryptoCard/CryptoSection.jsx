import React from "react";
import CryptoCard from "./CryptoCard";

import { ReactComponent as CRYPTO } from "../../../assets/images/Frame (12).svg";

import CRYPTO_IMG_1 from "../../../assets/images/IMAGE (21).png";
import CRYPTO_IMG_2 from "../../../assets/images/IMAGE (22).png";
import CRYPTO_IMG_3 from "../../../assets/images/IMAGE (23).png";
import CRYPTO_IMG_4 from "../../../assets/images/IMAGE (24).png";
import CRYPTO_IMG_5 from "../../../assets/images/IMAGE (25).png";
import CRYPTO_IMG_6 from "../../../assets/images/IMAGE (26).png";
import CRYPTO_IMG_7 from "../../../assets/images/IMAGE (27).png";
import useSlider from "../../../hooks/useSlider";
import SectionHeader from "../SectionHeader/SectionHeader";
import Slider from "../Slider/Slider";

//model images

const cryptoData = [
  {
    imageSrc: CRYPTO_IMG_1,
    symbol: "BTC",
    value: "23,035.14",
    percentage: "-3.33%",
  },
  {
    imageSrc: CRYPTO_IMG_2,
    symbol: "ETH",
    value: "1,591.583",
    percentage: "-3.23%",
  },
  {
    imageSrc: CRYPTO_IMG_3,
    symbol: "DOGE",
    value: "0.080552",
    percentage: "-4.29%",
  },
  {
    imageSrc: CRYPTO_IMG_4,
    symbol: "LTC",
    value: "91.9767",
    percentage: "-2.39%",
  },
  {
    imageSrc: CRYPTO_IMG_5,
    symbol: "BNB",
    value: "300.485",
    percentage: "-2.44%",
  },
  {
    imageSrc: CRYPTO_IMG_6,
    symbol: "XRP",
    value: "0.374977",
    percentage: "-3.11%",
  },
  {
    imageSrc: CRYPTO_IMG_7,
    symbol: "LINK",
    value: "7.53857",
    percentage: "-3.09%",
  },
  {
    imageSrc: CRYPTO_IMG_4,
    symbol: "LTC",
    value: "91.9767",
    percentage: "-2.39%",
  },
  {
    imageSrc: CRYPTO_IMG_1,
    symbol: "BTC",
    value: "23,035.14",
    percentage: "-3.33%",
  },
  {
    imageSrc: CRYPTO_IMG_2,
    symbol: "ETH",
    value: "1,591.583",
    percentage: "-3.23%",
  },
  {
    imageSrc: CRYPTO_IMG_3,
    symbol: "DOGE",
    value: "0.080552",
    percentage: "-4.29%",
  },
  {
    imageSrc: CRYPTO_IMG_4,
    symbol: "LTC",
    value: "91.9767",
    percentage: "-2.39%",
  },
  {
    imageSrc: CRYPTO_IMG_5,
    symbol: "BNB",
    value: "300.485",
    percentage: "-2.44%",
  },
  {
    imageSrc: CRYPTO_IMG_6,
    symbol: "XRP",
    value: "0.374977",
    percentage: "-3.11%",
  },
  {
    imageSrc: CRYPTO_IMG_7,
    symbol: "LINK",
    value: "7.53857",
    percentage: "-3.09%",
  },
  {
    imageSrc: CRYPTO_IMG_4,
    symbol: "LTC",
    value: "91.9767",
    percentage: "-2.39%",
  },
];

const CryptoSection = () => {
  const { containerRef, scrollLeft, scrollRight } = useSlider();

  const CardsComponent = cryptoData.map((crypto, index) => (
    <CryptoCard
      key={index}
      imageSrc={crypto.imageSrc}
      symbol={crypto.symbol}
      value={crypto.value}
      percentage={crypto.percentage}
    />
  ));

  return (
    <>
      <SectionHeader
        iconHeader={CRYPTO}
        casinoText="CRYPTO FEATURES"
        sideButton="Trade"
        hasRecommended={true}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      <Slider CardsComponent={CardsComponent} containerRef={containerRef} />
    </>
  );
};

export default CryptoSection;
