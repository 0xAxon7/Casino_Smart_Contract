import React from "react";
import { StyleChallengesCard } from "./styles";

import RANK_ICON from "../../../assets/images/rank-icon-gold.png";
import CHALLENGES_ROLLBIT from "../../../assets/images/roll-bit-challenges.webp";
import FEATURED_TITLE from "../../../assets/images/tile-label-featured.svg";

const ChallengesCard = () => {
  return (
    <StyleChallengesCard>
      <div class="card-image">
        <img src={CHALLENGES_ROLLBIT} alt="Rollbot Bonanza" />
      </div>
      <div class="card-text">
        <p class="description">First to hit x1,000.00 with min $1,000.00 bet</p>
        <div class="prize-pot">
          <div class="key">Prize Pot</div>
          <div class="value">$4,000.00</div>
        </div>
        <div class="creator">
          <div class="key">Creator</div>
          <div class="value" size="12">
            <div size="18" class="rank-icon">
              <img src={RANK_ICON} alt="Gold 1" scale="0.72" />
            </div>
            <div class="name">Razer</div>
          </div>
        </div>
      </div>
      <div class="featured">
        <img src={FEATURED_TITLE} alt="Featured" />
        <span>Featured</span>
      </div>
    </StyleChallengesCard>
  );
};

export default ChallengesCard;
