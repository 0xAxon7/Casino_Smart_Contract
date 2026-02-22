import React, { useContext, useState } from "react";

import { AppContext } from "../../../../AppContext";

import CLOSE from "../../../../assets/modelImages/Frame (3).svg";
import DModel1 from "../../../models/depositModel/DModel1";
import Cop from "../../../models/rewardModel/Cop";
import Model3 from "../../../models/rewardModel/Model3";
import WModel1 from "../../../models/withdrawalModel/WModel1";

const CashierModal = () => {
  const { openDropdown, toggleDropdown } = useContext(AppContext);

  const handleBtnClick = () => {
    toggleDropdown((prev) => (prev ? "" : "cashier"));
  };

  const [isFocus, setisFocus] = useState("Button1");

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

  return (
    <>
      <div
        onClick={handleBtnClick}
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

      {openDropdown === "cashier" ? (
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
              position: "fixed",
              top: "6pc",
              left: "25%",
              right: "25%",
            }}
          >
            {/* buttons */}
            <div
              style={{
                padding: "25px 35px",
                gap: "15px",
                display: "flex",
              }}
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

              <div
                onClick={() => toggleDropdown("")}
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
    </>
  );
};

export default CashierModal;
