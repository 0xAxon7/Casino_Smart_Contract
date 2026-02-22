import React from "react";

//assets

import ARROW from "../../../assets/modelImages/Frame (5).svg";
import BTN1 from "../../../assets/modelImages/Frame 126.svg";
import BTN2 from "../../../assets/modelImages/Frame 127.svg";
import BTN3 from "../../../assets/modelImages/Frame 128.svg";

const Model4 = () => {
  return (
    <div>
      {/* img area */}

      <div>
        <div
          style={{
            color: "#FFF",
            fontSize: "22px",
            textTransform: "uppercase",
            margin: "-20px 3.1pc",
          }}
        >
          <p
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <img
              src={ARROW}
              alt="arrow"
              style={{ width: "9px", height: "16px", marginTop: "3px" }}
            />{" "}
            <span style={{ margin: "0 13px" }}>Buy crypto using cards</span>{" "}
          </p>
        </div>

        <div
          style={{
            width: "830px",
            color: "#B1B6C6",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.8",
            margin: "45px 39px",
          }}
        >
          <p>
            While we look for a reliable card payment processor, you can
            purchase crypto using your card via the <br /> recommended
            third-party services below. After purchasing the crypto, you can
            <span style={{ color: "#FFB018", padding: "0 5px" }}>
              deposit it directly to your AK account
            </span>
          </p>
        </div>

        {/* images */}

        <div style={{ margin: "55px 39px", display: "flex", gap: "15px" }}>
          <img src={BTN1} alt="btn1" />
          <img src={BTN2} alt="btn2" />
          <img src={BTN3} alt="btn3" />
        </div>
      </div>
    </div>
  );
};

export default Model4;
