import React from "react";

//assets
import { ReactComponent as MONEY } from "../../../../assets/images/Frame (53).svg";
import { ReactComponent as SWITCH } from "../../../../assets/images/Frame (55).svg";
import { ReactComponent as CIRCLE } from "../../../../assets/images/Frame 507.svg";
import COIN from "../../../../assets/images/IMAGE (47).png";
import AccountPageTitle from "../Common/AccountPageTitle";
import { StyleProfile } from "../Profile/styles";

const BalancesPage = () => {
  return (
    <StyleProfile>
      <AccountPageTitle icon={MONEY} title="Balances" />

      <div className="section-container">
        <div className="title-container">
          <h3 className="section-title" style={{ margin: "0" }}>
            Balances
          </h3>
          <button class="referral-button">Create Referral Balance</button>
        </div>
        <div class="subtitle-container">
          <div class="text-icon">
            <SWITCH className="svg" style={{ width: "14px", height: "14px" }} />
            Switch Balance
          </div>
          <div class="total">
            Total:<span>$0.00</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "40px 16px",
            marginTop: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            borderRadius: "10px",
            background: "rgba(15, 17, 26, 0.55)",
            height: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              margin: "-20px 0",
            }}
          >
            <div>
              <CIRCLE />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "6px",
              }}
            >
              <p
                style={{
                  width: "32px",
                  color: "#fff",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Main
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <img
                  src={COIN}
                  alt="CIRCLE"
                  style={{ width: "17px", height: "16px" }}
                />
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
                  $0.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleProfile>
  );
};

export default BalancesPage;
