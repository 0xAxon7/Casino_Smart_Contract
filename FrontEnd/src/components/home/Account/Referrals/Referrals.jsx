import React from "react";

// assest

import { useParams } from "react-router-dom";
import { ReactComponent as FLOW } from "../../../../assets/images/Frame (49).svg";
import AccountPageTitle from "../Common/AccountPageTitle";
import AccountTabs from "../Common/AccountTabs/AccountTabs";
import { StyleProfile } from "../Profile/styles";
import ReferralBanner from "./ReferralBanner";

const tabs = [
  {
    url: "/account/referrals/codes",
    label: "Referral Codes",
  },
  {
    url: "/account/referrals/users",
    label: "Referred Users",
  },
];

const Referrals = () => {
  const { tab } = useParams();

  // Depending on the selected tab, render the appropriate content
  const renderTabContent = () => {
    if (tab === "codes") {
      // console.log("Content for Referral Codes tab");
    } else if (tab === "users") {
      // console.log("Content for Referred Users tab");
    } else {
      // console.log("Invalid tab selected");
    }
  };

  return (
    <StyleProfile>
      <AccountPageTitle icon={FLOW} title="Referrals" />

      <ReferralBanner />

      <AccountTabs tabs={tabs} />

      {renderTabContent()}

      <div className="section-container">
        <form>
          <div>
            <div>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  placeholder="Create new referral code"
                  id="rollbit-field-62399"
                  value=""
                />
                <button
                  className="change-button"
                  disabled=""
                  type="submit"
                  style={{ marginRight: "4px" }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div style={{ margin: "0 auto", padding: "24px 0px" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "23px 32px",
            alignItems: "flex-start",
            gap: "10px",
            borderRadius: "8px",
            background: "rgba(15, 17, 26, 0.55)",
          }}
        >
          <p
            style={{
              color: "#676D7C",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "21.6px",
              textTransform: "uppercase",
            }}
          >
            No Referrals Found
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="section-divider">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              width: "100%",
              color: "#B1B6C6",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16.8px",
            }}
          >
            If you're a content creator, make sure to check out our{" "}
            <span
              style={{
                color: "#FFB018",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16.8px",
              }}
            >
              Partnership Program
            </span>
            .
          </p>
        </div>
      </div>
    </StyleProfile>
  );
};

export default Referrals;
