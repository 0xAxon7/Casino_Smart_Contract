import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import LOGO from "../../../assets/images/LOGO (1).png";
import RCOIN from "../../../assets/modelImages/IMAGE (9).png";

//model assetss
import CLOSE from "../../../assets/modelImages/Frame (3).svg";
import ROLLBIT from "../../../assets/modelImages/IMAGE (8).png";

//models
import CashierModal from "../../Modals/CashierModals/CashierModal";
import AccountButton from "./AccountButton/AccountButton";
import BuyCryptoModal from "./BuyCryptoModal/BuyCryptoModal";
import RewardsButton from "./RewardsButton/RewardsButton";
import TotalMoneyContainer from "./TotalMoneyContainer";

//Models

const UpdatedNavbar = () => {
  const [isCoupen, setisCoupen] = useState(false);
  const [isReferral, setisReferral] = useState(false);

  //closes all models when opened
  const ALLMODELS = () => {
    setisCoupen(false);
    setisReferral(false);
  };

  const CoupenModel = () => {
    return (
      <div
        style={{
          width: "805px",
          height: "530px",
          borderRadius: "10px",
          background: "#1A1D29",
          boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)",
          margin: "30px 25pc",
        }}
      >
        <div>
          <div
            style={{
              padding: "25px 35px",
              gap: "15px",
              display: "flex",
            }}
          >
            {/* button 1==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  margin: "10px 3px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                DEPOSIT
              </p>
            </div>

            {/* button 2==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  margin: "10px -5.8px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                WITHDRAW
              </p>
            </div>

            {/* button 3==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.08)",
              }}
            >
              <p
                style={{
                  color: "#FFFFC1",
                  margin: "10px -3px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                COUPONS
              </p>
            </div>

            {/* button 4==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  margin: "10px -4px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                REFERRALS
              </p>
            </div>

            {/* end btn sec============================
                 ===========================================
                 =================================
                ====================================== */}
            <div
              onClick={ALLMODELS}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginLeft: "16pc",
              }}
            >
              <img src={CLOSE} alt="close" />
            </div>
          </div>

          {/* img area */}

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "18px 0",
              }}
            >
              <img src={ROLLBIT} alt="rollbit" />
            </div>

            {/* text area */}

            <div style={{ width: "242" }}>
              <p
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "26.4px",
                }}
              >
                Redeem Coupon Code
              </p>
            </div>

            {/* input area */}

            <div style={{ margin: "30px 0" }}>
              <input
                type="text"
                style={{
                  width: "200px",
                  padding: "16px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "6px",
                  color: "#fff",
                  background: "rgba(15, 17, 26, 0.55)",
                }}
                placeholder="Enter Coupon Code..."
              />
            </div>

            {/* text area */}

            <div>
              <p
                style={{
                  color: "#B1B6C6",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                We regularly post these on our{" "}
                <span style={{ color: "#FFB018" }}>Twitter</span>
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "45px",
                  margin: "30px 0",
                  alignItems: "center",
                  gap: "5px",
                  borderRadius: "10px",
                  background: "#86F454",
                  boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
                }}
              >
                {" "}
                <p
                  style={{
                    padding: "12px 20px",
                    fontSize: "14px",
                  }}
                >
                  CLAIM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ReferralModel = () => {
    return (
      <div
        style={{
          width: "805px",
          height: "530px",
          borderRadius: "10px",
          background: "#1A1D29",
          boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)",
          margin: "30px 25pc",
        }}
      >
        <div>
          <div
            style={{
              padding: "25px 35px",
              gap: "15px",
              display: "flex",
            }}
          >
            {/* button 1==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  margin: "10px 3px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                DEPOSIT
              </p>
            </div>

            {/* button 2==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  margin: "10px -5.8px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                WITHDRAW
              </p>
            </div>

            {/* button 3==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <p
                style={{
                  color: "#B1B6C6",
                  margin: "10px -3px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                COUPONS
              </p>
            </div>

            {/* button 4==================== */}

            <div
              style={{
                display: "flex",
                textAlign: "center",
                width: "100px",
                height: "40px",
                padding: "2px 20px",
                gap: "10px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.08)",
              }}
            >
              <p
                style={{
                  color: "#FFFFC1",
                  margin: "10px -4px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                REFERRALS
              </p>
            </div>

            {/* end btn sec============================
               ===========================================
               =================================
               ====================================== */}

            <div
              onClick={ALLMODELS}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginLeft: "16pc",
              }}
            >
              <img src={CLOSE} alt="close" />
            </div>
          </div>

          {/* img area */}

          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0",
              }}
            >
              <img src={RCOIN} alt="coin" />
            </div>

            {/* text area */}

            <div style={{ width: "242" }}>
              <p
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "26.4px",
                }}
              >
                apply Referrals code
              </p>
            </div>

            {/* input area */}

            <div style={{ margin: "30px 0" }}>
              <input
                type="text"
                style={{
                  width: "200px",
                  padding: "16px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "6px",
                  color: "#fff",
                  background: "rgba(15, 17, 26, 0.55)",
                }}
                placeholder="Enter Referrals Code..."
              />
            </div>

            {/* text area */}

            <div>
              <p
                style={{
                  color: "#B1B6C6",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Don't have a code? Enter "Anoukha"
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "45px",
                  margin: "30px 0",
                  alignItems: "center",
                  gap: "5px",
                  borderRadius: "10px",
                  background: "#86F454",
                  boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
                }}
              >
                {" "}
                <p
                  style={{
                    padding: "12px 20px",
                    fontSize: "14px",
                  }}
                >
                  APPLY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: "1920px", height: "65px" }}>
      <div
        style={{
          width: "1915px",
          height: "65px",
          flexShrink: "0",
          background: "#1A1D29",
          boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              src={LOGO}
              alt="logo"
              style={{
                width: "160px",
                height: "39.017px",
                flexShrink: "0",
                margin: "12.5px 12px",
              }}
            />
          </Link>

          {/* Rewards Button */}
          <RewardsButton />

          {/* Coins / Cashier / Buy Crypto Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0 25pc",
              gap: "15px",
            }}
          >
            <TotalMoneyContainer money="$0.00" />

            <CashierModal />

            <BuyCryptoModal />
          </div>

          {/* Account Section */}
          <AccountButton />
        </div>
      </div>

      {/* models functions */}
      <div>
        {/* model 4 */}
        {isCoupen ? (
          <div
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
              background: "",
            }}
          >
            <CoupenModel />
          </div>
        ) : null}

        {/*  model 5 */}
        {isReferral ? (
          <div
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
              background: "",
            }}
          >
            <ReferralModel />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UpdatedNavbar;
