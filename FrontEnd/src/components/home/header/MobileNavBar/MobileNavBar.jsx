import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { ReactComponent as MESSAGE_ICON } from "../../../../assets/images/message.svg";
import Button from "../../../Common/Buttons/Button";
import CashierModal from "../../../Modals/CashierModals/CashierModal";
import SearchModal from "../../../Modals/SearchModal/SearchModal";
import AccountButton from "../AccountButton/AccountButton";
import { StyledMobileNavBar } from "./styles";
import { useAuth } from "@/context/AuthContext";

const MobileNavBar = () => {
  const {
    isChatBoxOpen,
    isLoggedIn,
    updateChatBox,
    updateSidebar,
    updateLoggedIn,
  } = useContext(AppContext);

  const { user } = useAuth();

  return (
    <StyledMobileNavBar>
      <div class="buttons-container">
        <button class="button" onClick={() => updateSidebar((prev) => !prev)}>
          <svg
            height="512"
            viewBox="0 0 512 512"
            width="512"
            size="15"
            class="css-3u5jvs"
          >
            <path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"></path>
            <path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"></path>
            <path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"></path>
          </svg>
        </button>
        {user?.profile && (
          <>
            <AccountButton />
            <CashierModal button={"Cashier"} />
          </>
        )}

        <SearchModal />

        {isChatBoxOpen === false ? (
          <Button className="button mr-5" onClick={() => updateChatBox(true)}>
            <MESSAGE_ICON />
          </Button>
        ) : null}
      </div>
    </StyledMobileNavBar>
  );
};

export default MobileNavBar;
