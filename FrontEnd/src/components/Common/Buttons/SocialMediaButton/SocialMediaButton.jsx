import React from "react";
import { StyledSocialMediaButton } from "./StyledSocialMediaButton";

const SocialMediaButton = ({ socialIcon: Icon, socialName, url }) => {
  const handleClick = () => {
    // Redirect to the specified URL when the button is clicked
    window.open(url, "_blank");
  };

  return (
    <StyledSocialMediaButton onClick={handleClick}>
      <Icon className="icon-img" style={{ width: "17px", height: "17px" }} />
      <p className="btn-text">{socialName}</p>
    </StyledSocialMediaButton>
  );
};

export default SocialMediaButton;
