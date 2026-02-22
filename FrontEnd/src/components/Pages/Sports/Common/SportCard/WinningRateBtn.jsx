import React from "react";

const WinningRateBtn = ({ option, rate, style }) => {
  return (
    <div className="btn-sport" style={style ? style : {}}>
      <div className="text-btn">{option}</div>
      <div className="number-btn">{rate}</div>
    </div>
  );
};

export default WinningRateBtn;
