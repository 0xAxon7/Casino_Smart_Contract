import React, { useContext, useEffect, useState } from "react";

//assets
import { ReactComponent as IMG1 } from "../../../assets/images/Frame (28).svg";

import { AppContext } from "../../../context/AppContext";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import GameInfoItem from "../../Common/TableView/GameInfoItem";
import { StyleTableView } from "../../Common/TableView/styles";

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

const NewTableView = () => {
  const { isTabletScreen } = useContext(AppContext);
  const filterOptions = ["All Bets", "High Rollers", "Lucky Bets", "Trades"];

  const [activeOption, setActiveOption] = useState(filterOptions[0]);
  const [uniqueKey, setUniqueKey] = useState(0);

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  const [data, setData] = useState(new Array(12).fill(gameInfoData[0]));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedData = [...data];
      updatedData.pop();

      updatedData.unshift(gameInfoData[0]);

      setData(updatedData);
      setUniqueKey((prevKey) => prevKey + 1); // Increment the key to force re-render
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [data]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <SectionHeader
        iconHeader={IMG1}
        casinoText="BETS"
        hasArrows={false}
        hasFilterOptions={true}
        onOptionChange={handleOptionChange}
        filterOptions={filterOptions}
      />

      <StyleTableView>
        <table>
          <thead>
            <tr>
              <th class="th-collection">
                <div>Game</div>
              </th>
              {!isTabletScreen && (
                <>
                  <th class="th-collection">
                    <div>Player/Clan</div>
                  </th>
                  <th class="th-borrow">
                    <div>Time</div>
                  </th>
                  <th class="th-borrow">
                    <div>Wager</div>
                  </th>
                </>
              )}

              <th class="th-borrow">
                <div>Multiplier</div>
              </th>
              <th class="th-borrow">
                <div>Payout</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((gameInfo, index) => (
              <GameInfoItem
                key={index}
                gameInfo={
                  isTabletScreen
                    ? {
                        name: gameInfo.name,
                        multiplier: gameInfo.multiplier,
                        payout: gameInfo.payout,
                      }
                    : gameInfo
                }
                index={index}
                uniqueKey={uniqueKey} // Pass the unique key to trigger re-render
              />
            ))}
          </tbody>
        </table>
      </StyleTableView>

      {/* end */}
    </div>
  );
};

export default NewTableView;
