import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { ReactComponent as PORTFOLIO_IMG } from "../../../assets/images/Frame (13).svg";
import CloseButtonModal from "../CloseButtonModal";
import Modal from "../Modal";
import CouponsReferralsContent from "./CouponsReferralsContent";
import DepositWithdrawContent from "./DepositWithdrawContent";
import NavigationCashier from "./NavigationCashier";
import { StyledCashierModal } from "./styles";

const CashierModal = ({ button }) => {
  const { selectedOptionCashier, isTabletScreen } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {!isTabletScreen ? (
        button === "Cashier" ? (
          <div
            onClick={handleOpenModal}
            style={{
              display: "inline-flex",
              padding: "10px 16px",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "#FFE81A",
              boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                color: "#141722",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16.8px",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Cashier
            </p>
          </div>
        ) : (
          <div
            onClick={handleOpenModal}
            style={{
              display: "inline-flex",
              padding: "10px 16px",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.08)",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16.8px",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Buy Crypto
            </p>
          </div>
        )
      ) : (
        <button className="button" onClick={handleOpenModal}>
          <PORTFOLIO_IMG />
        </button>
      )}

      <Modal maxWidth={805} isOpen={isOpen} onClose={setIsOpen}>
        <CloseButtonModal onClick={() => setIsOpen(false)} />
        <StyledCashierModal>
          <NavigationCashier />

          {selectedOptionCashier === "Deposit" ? (
            <DepositWithdrawContent option={selectedOptionCashier} />
          ) : null}

          {selectedOptionCashier === "Withdraw" ? (
            <DepositWithdrawContent option={selectedOptionCashier} />
          ) : null}

          {selectedOptionCashier === "Coupons" ? (
            <CouponsReferralsContent option={selectedOptionCashier} />
          ) : null}

          {selectedOptionCashier === "Referrals" ? (
            <CouponsReferralsContent option={selectedOptionCashier} />
          ) : null}
        </StyledCashierModal>
      </Modal>
    </>
  );
};

export default CashierModal;
