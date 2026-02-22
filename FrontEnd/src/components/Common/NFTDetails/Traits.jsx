import React from "react";
import { StyleTraits } from "./styles";

const Traits = ({ traits }) => {
  return (
    <StyleTraits>
      {traits.map((trait, index) => (
        <div className="trait" key={index}>
          <div className="trait-container">
            <div className="title">
              <div className="text">{trait.title}</div>
            </div>
            <div className="value">{trait.value}</div>
          </div>
        </div>
      ))}
    </StyleTraits>
  );
};

export default Traits;
