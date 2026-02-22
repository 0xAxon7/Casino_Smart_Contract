import React, { useContext, useEffect, useRef, useState } from "react";

import { ReactComponent as ARROW_DOWN } from "@/assets/images/Frame (33).svg";
import TREASURE from "@/assets/images/IMAGE (44).png";
import Model1 from "@/components/models/rewardModel/Model1";
import { AppContext } from "@/context/AppContext";

const RewardsButton = () => {
  const { openDropdown, toggleDropdown, isTabletScreen } =
    useContext(AppContext);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dropdownRef = useRef(null);

  const handleBtnClick = () => {
    toggleDropdown((prev) => (prev ? "" : "rewards"));
  };

  const handleCloseDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      toggleDropdown("");
    }
  };

  const handleBtnClickWithPropagation = (event) => {
    // Prevent the click event from reaching the window click event
    event.stopPropagation();
    handleBtnClick();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 440);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    window.addEventListener("click", handleCloseDropdown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleCloseDropdown);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={handleBtnClickWithPropagation}
        style={{
          display: "inline-flex",
          padding: "7px 12px",
          alignItems: "center",
          gap: "10px",
          borderRadius: "8px",
          background: "rgba(203, 215, 255, 0.03)",
          cursor: "pointer",
        }}
      >
        <img
          src={TREASURE}
          alt="treasure"
          style={{ width: "26px", height: "26px" }}
        />
        <p
          style={{
            width: "58px",
            color: "#fff",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "14.4px",
            textTransform: "uppercase",
          }}
        >
          Rewards
        </p>
        <ARROW_DOWN style={{ width: "8px", height: "6px", color: "#b1b6c6" }} />
      </div>
      {openDropdown === "rewards" ? (
        <div
          ref={dropdownRef}
          className="rewards-container"
          style={{
            right: isTabletScreen ? "10px" : null,
            left: isTabletScreen ? (isSmallScreen ? "0px" : null) : "15px",
          }}
        >
          <div className="container-items">
            <div style={{ padding: "16px" }}>
              <Model1 />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RewardsButton;
