import React from "react";
import { StyleStats } from "./styles";

const Stats = ({ stats }) => {
  return (
    <StyleStats>
      {stats.map((stat, index) => (
        <div className="stat-container">
          <div className="title">{stat.title}</div>
          <div className="value-container">
            <div className="value">{stat.value}</div>
          </div>
        </div>
      ))}
    </StyleStats>
  );
};

export default Stats;
