import React from "react";

//assets

import ROLLBIT from "../../../assets/modelImages/IMAGE (8).png";

const Cop = () => {
  return (
    <div>
      {/* img area */}

      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "18px 0",
          }}
        >
          <img src={ROLLBIT} alt="rollbit" />
        </div>

        {/* text area */}

        <div style={{ width: "242" }}>
          <p
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "26.4px",
            }}
          >
            Redeem Coupon Code
          </p>
        </div>

        {/* input area */}

        <div style={{ margin: "30px 0" }}>
          <input
            type="text"
            style={{
              width: "200px",
              padding: "16px",
              alignItems: "center",
              gap: "10px",
              borderRadius: "6px",
              color: "#fff",
              background: "rgba(15, 17, 26, 0.55)",
            }}
            placeholder="Enter Coupon Code..."
          />
        </div>

        {/* text area */}

        <div>
          <p
            style={{
              color: "#B1B6C6",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            We regularly post these on our{" "}
            <span style={{ color: "#FFB018" }}>Twitter</span>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "45px",
              margin: "30px 0",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              background: "#86F454",
              boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
            }}
          >
            {" "}
            <p style={{ padding: "12px 20px", fontSize: "14px" }}>CLAIM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cop;
