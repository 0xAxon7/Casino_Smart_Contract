import React, { useContext } from "react";
import { Link } from "react-router-dom";

//assets
import FULL_LOGO from "../../../../assets/LOGO Gamblify/Full LOGO.png";
import SMALL_LOGO_NO_BG from "../../../../assets/LOGO Gamblify/LOGO PNG.png";
// import SMALL_LOGO_BLACK_BG from "../../../../assets/LOGO Gamblify/LOGO.png";
import { ReactComponent as MESSAGE_ICON } from "../../../../assets/images/message.svg";
import ChatBox from "../../ChatBox/ChatBox";

import { AppContext } from "../../../../context/AppContext";
import Button from "../../../Common/Buttons/Button";
import RegisterModal from "../../../Common/Modals/RegisterModal";
import AccountButton from "../AccountButton/AccountButton";
// import CashierModal from "./CashierModal/CashierModal";
import CashierModal from "../../../Modals/CashierModals/CashierModal";
import SearchModal from "../../../Modals/SearchModal/SearchModal";
import RewardsButton from "../RewardsButton/RewardsButton";
import TotalMoneyContainer from "../TotalMoneyContainer";
import { StyledNavBar } from "./styles";
import { useAuth } from "@/context/AuthContext";

const NavBar = () => {
  const {
    isChatBoxOpen,
    isMobileScreen,
    isTabletScreen,
    updateChatBox,
    updateLoggedIn,
  } = useContext(AppContext);

  const { user } = useAuth();

  return (
    <StyledNavBar>
      <div
        className="h-16 flex justify-between items-center p-3"
        style={{
          boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          background: "#1A1D29",
          zIndex: 11,
        }}
      >
        <div
          className={`logo-container ${
            isTabletScreen ? "logo-container-mobile" : ""
          }`}
        >
          <Link to="/ " className="flex h-10 flex-shrink-0 cursor-pointer">
            <img
              src={isMobileScreen ? SMALL_LOGO_NO_BG : FULL_LOGO}
              alt="logo"
            />
          </Link>
          {/* Rewards Button */}
          {user?.profile && (
            <div className="money-container">
              {isTabletScreen && !isMobileScreen ? (
                <TotalMoneyContainer money="$0.00" />
              ) : null}
              <RewardsButton />
            </div>
          )}
        </div>

        {user?.profile && (
          <>
            {/* Coins / Cashier / Buy Crypto Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              {!isTabletScreen && (
                <>
                  <TotalMoneyContainer money="$0.00" />

                  <CashierModal button={"Cashier"} />

                  <CashierModal button={"Buy Crypto"} />
                </>
              )}
            </div>
          </>
        )}

        <div style={{ display: "flex", alignItems: "center" }}>
          {!user?.profile && (
            <>
              <RegisterModal modalOption="login" />
              <RegisterModal modalOption="register" />
            </>
          )}

          {!isTabletScreen && (
            <div style={{ display: "flex" }}>
              {/* Account Section */}
              {user?.profile && <AccountButton />}

              <SearchModal />
              {isChatBoxOpen === false ? (
                <Button className="mr-5" onClick={() => updateChatBox(true)}>
                  <MESSAGE_ICON />
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>

      <ChatBox isChatBox={isChatBoxOpen} setIsChatBox={updateChatBox} />
    </StyledNavBar>
  );
};

export default NavBar;
