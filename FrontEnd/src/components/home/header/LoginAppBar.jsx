import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import ARROW_DOWN from "../../../assets/images/Frame (33).svg";
import TREASURE from "../../../assets/images/IMAGE (44).png";
import COIN from "../../../assets/images/IMAGE (45).png";
import HEXAGON from "../../../assets/images/IMAGE (46).png";
import LOGO from "../../../assets/images/LOGO (1).png";
import MESSAGE_ICON from "../../../assets/images/MESSAGE.png";
import RECTANGLE from "../../../assets/images/Rectangle (1).png";
import SEARCH_ICON from "../../../assets/images/SEARCH.png";
import RCOIN from "../../../assets/modelImages/IMAGE (9).png";

//model assetss
import CLOSE from "../../../assets/modelImages/Frame (3).svg";
import ROLLBIT from "../../../assets/modelImages/IMAGE (8).png";

//components
import Profile from "../profile/Profile";

//models
import DModel1 from "../../models/depositModel/DModel1";
import Model2 from "../../models/rewardModel/AccountDropdown";
import Cop from "../../models/rewardModel/Cop";
import Model1 from "../../models/rewardModel/Model1";
import Model3 from "../../models/rewardModel/Model3";
import Model4 from "../../models/rewardModel/Model4";
import WModel1 from "../../models/withdrawalModel/WModel1";

const LoginAppBar = () => {
  const [isAccountBtn, setisAccountBtn] = useState(false);
  const [isCrypto, setisCrypto] = useState(false);
  const [isCoupen, setisCoupen] = useState(false);
  const [isDeposit, setisDeposit] = useState(false);
  const [isReferral, setisReferral] = useState(false);
  const [isFocus, setisFocus] = useState("");
  const [isRewardBtn, setisRewardBtn] = useState(false);

  const Button1 = () => {
    setisFocus("Button1");
  };
  const Button2 = () => {
    setisFocus("Button2");
  };
  const Button3 = () => {
    setisFocus("Button3");
  };
  const Button4 = () => {
    setisFocus("Button4");
  };
  const Button5 = () => {
    setisFocus("Button5");
  };

  //Models integrations

  const AccountBtnModel = () => {
    if (isAccountBtn === false) {
      setisAccountBtn(true);
      setisRewardBtn(false);
    } else {
      setisAccountBtn(false);
    }
  };

  const BuyCryptoBtn = () => {
    if (isCrypto === false) {
      setisCrypto(true);
      setisAccountBtn(false);
      setisFocus("Button5");
    } else {
      setisCrypto(false);
    }
  };

  // const OpenCoupenModel = () => {
  //   if (isCoupen === false) {

  //     setisCoupen(true)

  //   }
  //   else {
  //     setisCoupen(false);
  //   }
  // }

  const OpenDepositModel = () => {
    if (isDeposit === false) {
      setisDeposit(true);
      setisAccountBtn(false);
      setisFocus("Button1");
    } else {
      setisDeposit(false);
    }
  };

  const RewardBtnModel = () => {
    if (isRewardBtn === false) {
      setisRewardBtn(true);
      setisDeposit(false);
      setisAccountBtn(false);
    } else {
      setisRewardBtn(false);
    }
  };

  // const OpenReferralModel = () => {
  //   setisReferral(true)
  // }

  //closes all models when opened
  const ALLMODELS = () => {
    setisCoupen(false);
    setisCrypto(false);
    setisDeposit(false);
    setisReferral(false);
  };

  //Models

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
          <div style={{ padding: "25px 35px", gap: "15px", display: "flex" }}>
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
                <p style={{ padding: "12px 20px", fontSize: "14px" }}>CLAIM</p>
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
          <div style={{ padding: "25px 35px", gap: "15px", display: "flex" }}>
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
                <p style={{ padding: "12px 20px", fontSize: "14px" }}>APPLY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //login navbar
  return (
    <>
      <div
        style={{
          width: "1920px",
          height: "1003px",
          background: "#1A1D29",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          style={{
            width: "1915px",
            height: "65px",
            flexShrink: "0",
            background: "#1A1D29",
            boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
            position: "sticky",
            top: "0",
            left: "0",
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

            <div
              onClick={() => RewardBtnModel()}
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
              <img
                src={ARROW_DOWN}
                alt="arrow"
                style={{ width: "8px", height: "6px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0 25pc",
                gap: "15px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "11px 14px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "6px",
                  background: "#10121B",
                }}
              >
                <img
                  src={COIN}
                  alt=""
                  style={{ width: "20px", height: "19px" }}
                />
                <p
                  style={{
                    width: "39px",
                    color: "#fff",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                  }}
                >
                  $0.00
                </p>
              </div>
              <div
                onClick={() => OpenDepositModel()}
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
              <div
                onClick={() => BuyCryptoBtn()}
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
            </div>

            <div style={{ display: "flex", gap: "12px", marginLeft: "-1pc" }}>
              <div
                onClick={() => AccountBtnModel()}
                style={{
                  display: "flex",
                  width: "141px",
                  height: "40px",
                  flexShrink: "0",
                  borderRadius: "8px",
                  background: "rgba(203, 215, 255, 0.03)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={HEXAGON}
                  alt="hexagon"
                  style={{ width: "29px", height: "29px", margin: "5px 8px" }}
                />

                <div>
                  <p
                    style={{
                      width: "55px",
                      color: "#fff",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "15.6px",
                      letterSpacing: "0.5px",
                      margin: "8px 6px",
                    }}
                  >
                    Account
                  </p>
                  <img
                    src={RECTANGLE}
                    alt="rectangle"
                    style={{ width: "51px", height: "5px", margin: "-2px 6px" }}
                  />
                  <img
                    src={ARROW_DOWN}
                    alt="arrow"
                    style={{
                      width: "8px",
                      height: "6px",
                      margin: "-18px 70px",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <img src={SEARCH_ICON} alt="search" />
                <img src={MESSAGE_ICON} alt="msg" />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <Profile />
        </div>
      </div>{" "}
      {/* end++++++++++++++++++ */}
      {/* model show div 1 */}
      <div>
        {isRewardBtn ? (
          <>
            <div
              onClick={() => setisRewardBtn(false)}
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
                height: "625px",
                background: "#1F2330",
                width: "420px",
                position: "absolute",
                top: "3.9pc",
                left: "3pc",
                boxShadow: "0px 5px 8px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "6px",
              }}
            >
              <Model1 />
            </div>
          </>
        ) : null}

        {/*  model 2 */}

        {isAccountBtn ? (
          <>
            <div
              onClick={() => setisAccountBtn(false)}
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
                top: "3.7pc",
                left: "91.3pc",
                cursor: "pointer",
                background: "#1F2330",
                borderRadius: "6px",
                boxShadow: " 0px 5px 8px 0px rgba(0, 0, 0, 0.25)",
                width: "200px",
                height: "430px",
              }}
            >
              <Model2 />
            </div>
          </>
        ) : null}

        {/*  model 3 */}

        {isCrypto ? (
          <>
            <div
              onClick={() => setisCrypto(false)}
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
                background: "#000000aa",
              }}
            ></div>

            <div
              style={{
                width: "805px",
                height: isFocus === "Button5" ? "310px" : "530px",
                borderRadius: "10px",
                background: "#1A1D29",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)",
                margin: "30px 25pc",
                position: "fixed",
                top: "6pc",
                left: "4pc",
              }}
            >
              {/* buttons */}
              <div
                style={{ padding: "25px 35px", gap: "15px", display: "flex" }}
              >
                {/* button 1==================== */}

                <div
                  onClick={() => Button5()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button5"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button5" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => Button2()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button2"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button2" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => Button3()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button3"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button3" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => Button4()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button4"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button4" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => setisCrypto(false)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "16pc",
                    cursor: "pointer",
                  }}
                >
                  <img src={CLOSE} alt="close" />
                </div>
              </div>

              {isFocus === "Button3" ? <Cop /> : null}

              {isFocus === "Button4" ? <Model3 /> : null}

              {isFocus === "Button5" ? <Model4 /> : null}

              {isFocus === "Button2" ? <WModel1 /> : null}
            </div>
          </>
        ) : null}

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

        {/* Deoposit model 1 */}
        {isDeposit ? (
          <>
            <div
              onClick={() => setisDeposit(false)}
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
                background: "#000000aa",
              }}
            ></div>

            <div
              style={{
                width: "805px",
                height: "530px",
                borderRadius: "10px",
                background: "#1A1D29",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)",
                margin: "30px 25pc",
                position: "fixed",
                top: "6pc",
                left: "4pc",
              }}
            >
              {/* buttons */}
              <div
                style={{ padding: "25px 35px", gap: "15px", display: "flex" }}
              >
                {/* button 1==================== */}

                <div
                  onClick={() => Button1()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button1"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button1" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => Button2()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button2"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button2" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => Button3()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button3"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button3" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => Button4()}
                  style={{
                    display: "flex",
                    textAlign: "center",
                    width: "100px",
                    height: "40px",
                    padding: "2px 20px",
                    gap: "10px",
                    borderRadius: "8px",
                    background:
                      isFocus === "Button4"
                        ? "rgba(203, 215, 255, 0.08)"
                        : "rgba(203, 215, 255, 0.03)",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      color: isFocus === "Button4" ? "#FFFFC1" : "#B1B6C6",
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
                  onClick={() => setisDeposit(false)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "16pc",
                    cursor: "pointer",
                  }}
                >
                  <img src={CLOSE} alt="close" />
                </div>
              </div>

              {isFocus === "Button3" ? <Cop /> : null}

              {isFocus === "Button4" ? <Model3 /> : null}

              {isFocus === "Button1" ? <DModel1 /> : null}

              {isFocus === "Button2" ? <WModel1 /> : null}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default LoginAppBar;
