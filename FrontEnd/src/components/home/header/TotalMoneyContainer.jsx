import React from "react";

import COIN from "../../../assets/images/IMAGE (45).png";

const TotalMoneyContainer = ({ money }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "11px 14px",
        alignItems: "flex-start",
        gap: "10px",
        borderRadius: "6px",
        background: "#10121B",
      }}
    >
      <img src={COIN} alt="" style={{ width: "20px", height: "19px" }} />
      <p
        style={{
          width: "39px",
          color: "#fff",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "16.8px",
        }}
      >
        {money}
      </p>
    </div>
  );
};

export default TotalMoneyContainer;
