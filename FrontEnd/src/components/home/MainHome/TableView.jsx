import React, { useEffect, useRef, useState } from "react";

//assets
import { ReactComponent as IMG1 } from "../../../assets/images/Frame (28).svg";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import GameInfoItem from "../../Common/TableView/GameInfoItem";

const gameInfoData = [
  {
    name: "Temple Tumble",
    player: "Yaddle77",
    time: "10",
    bet: "2.00",
    multiplier: "0.00",
    payout: "0.00",
  },
];

const TableView = () => {
  const filterOptions = ["All Bets", "High Rollers", "Lucky Bets", "Trades"];

  const [activeOption, setActiveOption] = useState(filterOptions[0]);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const data = new Array(12).fill(gameInfoData[0]);

  const tableContainerRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const container = tableContainerRef.current;

    const scroll = () => {
      container.scrollTop -= scrollSpeed;

      // Reset scroll to the bottom when it reaches the top
      if (container.scrollTop <= 0) {
        container.scrollTop = container.scrollHeight;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="row">
        <SectionHeader
          iconHeader={IMG1}
          casinoText="BETS"
          hasArrows={false}
          hasFilterOptions={true}
          onOptionChange={handleOptionChange}
          filterOptions={filterOptions}
        />
        {/* table */}

        <div
          className="d-text"
          style={{
            color: "#686D7B",
            display: "flex",
            padding: "20px 20px",
            alignItems: "flex-start",
            justifyContent: "space-between",
            fontSize: "12px",
          }}
        >
          <div
            className="f"
            style={{
              display: "flex",
            }}
          >
            <p>GAMES</p>
          </div>
          <div className="main">
            <p>PLAYER/CLAN</p>
          </div>
          <div
            className="end"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "70px",
            }}
          >
            <p>TIME</p>
            <p>WAGER</p>
            <p>MULTIPLIER</p>
            <p>PAYOUT</p>
          </div>
        </div>

        {/* other table main */}
        <div style={{ height: "50%", overflow: "hidden" }}>
          <div
            ref={tableContainerRef}
            style={{ height: "100%", overflowY: "hidden" }}
          >
            {data.map((gameInfo, index) => (
              <GameInfoItem key={index} gameInfo={gameInfo} index={index} />
            ))}
          </div>
        </div>

        {/* end */}
      </div>
    </div>
  );
};

export default TableView;
