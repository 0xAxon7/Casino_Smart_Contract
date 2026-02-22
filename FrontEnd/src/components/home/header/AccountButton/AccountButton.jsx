import React, { useContext } from "react";

import { AppContext } from "../../../../context/AppContext";
//assets
import HEXAGON from "../../../../assets/images/IMAGE (46).png";
import { ReactComponent as USER } from "../../../../assets/modelImages/Frame (6).svg";
import Button from "../../../Common/Buttons/Button";
import AccountDropdown from "../../../models/rewardModel/AccountDropdown";
import { StyleAccountButton } from "./StyledAccountButton";
import { useAuth } from "@/context/AuthContext";

//model assetss

//models

const AccountButton = () => {
  const { openDropdown, toggleDropdown, isTabletScreen } =
    useContext(AppContext);
  const { user } = useAuth();

  const handleBtnClick = () => {
    toggleDropdown((prev) => (prev ? "" : "account"));
  };

  return (
    <StyleAccountButton>
      {isTabletScreen ? (
        <button class="button" onClick={handleBtnClick}>
          <USER />
        </button>
      ) : (
        <Button className="account-button" onClick={handleBtnClick}>
          <div size="30" class="rank-icon">
            <img src={user?.avatar || HEXAGON} alt="" scale="0.96" />
          </div>
          <div style={{ margin: "-2px 10px 0px 1px", minWidth: "50px" }}>
            <div class="account-text">Account</div>
            <div color="#E5A480" class="account-border"></div>
          </div>
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            size="8"
          >
            <path
              d="M0.934258 -6.17707e-07L7.06574 -8.16755e-08C7.46509 -4.67634e-08 7.70329 0.445072 7.48177 0.77735L4.41602 5.37596C4.21811 5.67283 3.78189 5.67283 3.58397 5.37596L0.518233 0.777349C0.296715 0.445072 0.534911 -6.52619e-07 0.934258 -6.17707e-07Z"
              fill="currentColor"
            ></path>
          </svg>
        </Button>
      )}
      {openDropdown === "account" ? (
        <>
          <div
            onClick={() => toggleDropdown("")}
            style={{
              position: "fixed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              cursor: "pointer",
              height: "100%",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: isTabletScreen ? "auto" : "50px",
              bottom: isTabletScreen ? "50px" : "auto",
              background: "#1F2330",
              borderRadius: "6px",
              boxShadow: " 0px 5px 8px 0px rgba(0, 0, 0, 0.25)",
              width: "200px",
              height: "430px",
              zIndex: "10",
            }}
          >
            <AccountDropdown userName="Pablo Escobar" />
          </div>
        </>
      ) : null}
    </StyleAccountButton>
  );
};

export default AccountButton;
