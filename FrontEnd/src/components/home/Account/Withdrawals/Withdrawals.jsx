import React from "react";

// assest

import { ReactComponent as BUGER } from "../../../../assets/images/Frame (50).svg";

import { useParams } from "react-router-dom";
import AccountPageTitle from "../Common/AccountPageTitle";
import AccountTabs from "../Common/AccountTabs/AccountTabs";
import { StyleProfile } from "../Profile/styles";

const tabs = [
  {
    url: "/account/withdrawals/ALL",
    label: "ALL CHAINS",
  },
  {
    url: "/account/withdrawals/BTC",
    label: "BTC",
  },
  {
    url: "/account/withdrawals/ETH",
    label: "ETH",
  },
  {
    url: "/account/withdrawals/LTC",
    label: "LTC",
  },
  {
    url: "/account/withdrawals/SOL",
    label: "SOL",
  },
  {
    url: "/account/withdrawals/NFT",
    label: "NFT",
  },
];

const Withdrawals = () => {
  const { tab } = useParams();

  const renderTabContent = () => {
    if (tab) {
      return (
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
              No Entries
            </p>
          </div>
        </div>
      );
    } else if (tab === "users") {
      return <div>Content for Referred Users tab</div>;
    } else {
      return <div>Invalid tab selected</div>;
    }
  };
  return (
    <StyleProfile>
      <AccountPageTitle icon={BUGER} title="Withdrawals" />

      <AccountTabs tabs={tabs} />

      {renderTabContent()}
    </StyleProfile>
  );
};

export default Withdrawals;
