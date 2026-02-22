import React from "react";
import { StyleReferralBanner } from "./styles";

const ReferralBanner = () => {
  return (
    <StyleReferralBanner>
      <div class="banner-title">Refer Friends And Get Rewarded</div>
      <div class="content-section">
        <div>
          <div class="text">Total Wagered</div>
          <div class="value">$0.00</div>
        </div>
        <div>
          <div class="text">Total Commission</div>
          <div class="value" style={{ color: "rgb(114, 242, 56)" }}>
            $0.00
          </div>
        </div>
      </div>
      <button class="button" disabled="" style={{ minWidth: "240px" }}>
        Nothing to Claim
      </button>
    </StyleReferralBanner>
  );
};

export default ReferralBanner;
