import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { ReactComponent as SUPPORT } from "../../../assets/images/Frame (65).svg";
import { StyledSupportButton } from "./styles";

const SupportButton = () => {
  const { pathname } = useLocation();
  const { isChatBoxOpen, isChatBoxCollapsed } = useContext(AppContext);

  const isOnSportsPage = pathname.includes("/sports");

  return (
    <Link to="https://t.me/casino_crafters" target="_blank">
      <StyledSupportButton
        style={{
          right: isOnSportsPage
            ? "348px"
            : isChatBoxOpen
            ? isChatBoxCollapsed
              ? "256px"
              : "348px"
            : "8px",
        }}
      >
        <SUPPORT />
      </StyledSupportButton>
    </Link>
  );
};

export default SupportButton;
