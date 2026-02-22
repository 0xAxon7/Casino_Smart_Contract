import React from "react";

//components
import Banner from "../../Common/Banner/Banner";
import BonusCardSection from "../../Common/BonusCard/BonusCardSection";
import BoxesSection from "../../Common/BoxCard/BoxesSection";
import CasinoSection from "../../Common/CasinoSection/CasinoSection";
import CryptoSection from "../../Common/CryptoCard/CryptoSection";
import NTFSection from "../../Common/NFTCard/NTFSectionWithHeader";
import StepsSection from "../../Common/StepSection/StepsSection";
import LiveWinsSection from "../../Common/WinnerCard/LiveWinsSection";
import NewTableView from "./NewTableView";

const steps = [
  {
    number: "01",
    text: "Register Account",
  },
  {
    number: "02",
    text: "Make a Deposit and Play",
  },
  {
    number: "03",
    text: "Receive Rewards",
  },
];

const MainHome = ({ update }) => {
  return (
    <div className="@container">
      <Banner />

      {/* Homepage main image area */}

      <StepsSection
        hasMarginBottom={true}
        steps={steps}
        className="@xl:block hidden"
      />

      {/* image area frame main */}

      <LiveWinsSection title="Live wins" hasFilters={true} />

      {/* casino view */}

      <CasinoSection />

      {/* Crypto view */}

      <CryptoSection />

      {/* Bonus */}

      <BonusCardSection />

      {/* Daily Bonuses */}

      <BoxesSection />

      {/* NFT LOOT BOXES */}

      <NTFSection
        title="NFT Lootboxes"
        buttonText="View All"
        buttonLink="/nft/lootboxes/play"
      />

      {/* table view */}
      <NewTableView />
    </div>
  );
};

export default MainHome;
