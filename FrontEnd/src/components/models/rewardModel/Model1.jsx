import React from "react";

//assets

import COIN from "../../../assets/modelImages/IMAGE (1).png";
import BUCKET1 from "../../../assets/modelImages/IMAGE (2).png";
import BUCKET2 from "../../../assets/modelImages/IMAGE (3).png";
import BUCKET3 from "../../../assets/modelImages/IMAGE (4).png";
import BUCKET4 from "../../../assets/modelImages/IMAGE (5).png";
import REBOTE from "../../../assets/modelImages/IMAGE (6).png";
import CARD from "../../../assets/modelImages/IMAGE (7).png";

const options = [
  {
    icon: COIN,
    name: "CALENDAR",
    buttonType: "CLAIM",
  },
  {
    icon: BUCKET1,
    name: "DAILY BONUS",
    buttonType: "ADD",
  },
  {
    icon: BUCKET2,
    name: "WEEKLY BONUS",
    buttonType: "ADD",
  },
  {
    icon: BUCKET3,
    name: "MONTHLY BONUS",
    buttonType: "ADD",
  },
  {
    icon: BUCKET4,
    name: "RAKEBACK",
    buttonType: "ADD",
  },
  {
    icon: REBOTE,
    name: "ROLLBACK",
    buttonType: "ADD",
  },
  {
    icon: CARD,
    name: "FREE SIDEBET",
    buttonType: "CLAIM",
  },
];

const Model1 = () => {
  return (
    <>
      {options.map((option, index) => (
        <div
          key={index}
          style={{
            padding: "12px",
            marginBottom: "8px",
            display: "flex ",
            justifyContent: "space-between",
          }}
        >
          <div className="flex items-center">
            <img
              src={option.icon}
              alt="icon"
              style={{ width: "44px", height: "26px" }}
            />

            <div
              style={{ padding: "-10px 0", margin: "-8px 13px", color: "#fff" }}
            >
              <p>{option.name}</p>
              {option.buttonType === "CLAIM" ? (
                <p
                  style={{
                    color: "#72F238",
                    fontSize: "14px",
                    display: "flex",
                    gap: "7px",
                  }}
                >
                  Pending: <span>$0.00</span>
                </p>
              ) : null}
            </div>
          </div>

          <button
            style={{
              display: "flex",
              padding: "10px 14px",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "10px",
              background: option.buttonType === "CLAIM" ? "#86F454" : "#FFE81A",
              boxShadow:
                option.buttonType === "CLAIM"
                  ? "0px 0px 10px 0px rgba(118, 255, 25, 0.40)"
                  : "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
            }}
          >
            {option.buttonType}
          </button>
        </div>
      ))}
    </>
  );
};
export default Model1;
