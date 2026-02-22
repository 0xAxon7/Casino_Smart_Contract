import React from "react";
import { ReactComponent as STEAM } from "../../../assets/images/Frame (22).svg";
import { ReactComponent as TWITCH } from "../../../assets/images/Frame (23).svg";
import { ReactComponent as METAMASK } from "../../../assets/images/Frame (24).svg";
import SocialMediaButton from "../Buttons/SocialMediaButton/SocialMediaButton";

import FULL_LOGO from "../../../assets/LOGO Gamblify/Full LOGO.png";
// import SMALL_LOGO_NO_BG from "../../../assets/LOGO Gamblify/LOGO PNG.png";
// import SMALL_LOGO_BLACK_BG from "../../../assets/LOGO Gamblify/LOGO.png";
import RegisterModal from "../Modals/RegisterModal";
import { StyledBanner } from "./StyledBanner";

const Banner = () => {
  return (
    <StyledBanner className="@container">
      <div className="main-content w-full @xl:w-auto">
        <img src={FULL_LOGO} alt="logo" style={{ maxHeight: "40px" }} />
        <p className="main-heading">
          Experience true innovation with the highest rewards program within the
          industry.
        </p>

        <RegisterModal buttonText="REGISTER NOW" modalOption="register" />

        <p className="or-join-with">Or join with</p>

        <div className="social-media-container flex-col @xl:flex-row">
          <SocialMediaButton
            socialIcon={STEAM}
            socialName={"Steam"}
            url={"https://steamcommunity.com"}
          />
          <SocialMediaButton
            socialIcon={TWITCH}
            socialName={"Twitch"}
            url={"https://www.twitch.tv"}
          />
          <SocialMediaButton
            socialIcon={METAMASK}
            socialName={"Metamask"}
            url={"https://metamask.io"}
          />
        </div>
      </div>

      <div className="side-text hidden @xl:block">
        <p className="leverage-text">1000X LEVERAGE CRYPTO FUTURES</p>
        <p className="small-text">
          Instant execution, 0% slippage, 0% fees on loss
        </p>
      </div>
    </StyledBanner>
  );
};

export default Banner;
