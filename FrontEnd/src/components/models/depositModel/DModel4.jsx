import React from "react";

import ERROR from "../../../assets/images/Frame (62).svg";
import TRANSACTION from "../../../assets/images/Frame 184.svg";
import BTC from "../../../assets/images/IMAGE (1).svg";
import ETH from "../../../assets/images/IMAGE (22).png";
import QRCODE from "../../../assets/images/IMAGE (48).png";
import COIN from "../../../assets/images/IMAGE (5).svg";
import CLOSE from "../../../assets/modelImages/Frame (3).svg";
import ARROW from "../../../assets/modelImages/Frame (5).svg";

function DModel4() {
  return (
    <div
      style={{
        width: "805px",
        height: "797px",
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
              background: "rgba(203, 215, 255, 0.08)",
            }}
          >
            <p
              style={{
                color: "#FFFFC1",
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
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "16pc",
            }}
          >
            <img src={CLOSE} alt="close" />
          </div>
        </div>

        {/* heading sec==================== */}

        <div
          style={{
            color: "#FFF",
            fontSize: "22px",
            textTransform: "uppercase",
            margin: "-10px 3.1pc",
          }}
        >
          <p
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <img
              src={ARROW}
              alt="arrow"
              style={{ width: "9px", height: "16px", marginTop: "3px" }}
            />

            <img
              src={ETH}
              alt="eth"
              style={{ width: "32px", height: "32px", marginLeft: "25px" }}
            />

            <span style={{ margin: "0 6px", width: "210px" }}>
              Deposit Ethereum
            </span>
            <p
              style={{
                width: "422px",
                color: "#FFB018",
                textTransform: "none",
                fontSize: "14px",
                marginLeft: "10px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              View Transactions
            </p>
          </p>
        </div>

        {/* main sec==================== */}

        <div
          style={{
            width: "725px",
            height: "380px",
            margin: "50px 40px",
            borderRadius: "8px",
            background: "rgba(203, 215, 255, 0.03)",
          }}
        >
          <div>
            <p
              style={{
                width: "454px",
                padding: "25px 20px",
                color: "#B1B6C6",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              Send the amount of Bitcoin of your choice to the following address
              to receive the equivalent in Coins.
            </p>
          </div>

          <div style={{ display: "flex", margin: "0 20px", gap: "10px" }}>
            <div>
              <img src={ERROR} alt="error" />
            </div>
            <p
              style={{
                width: "420px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                color: "#FFB018",
                margin: "-10px 0",
              }}
            >
              Only deposit over the Ethereum network. Do not use BNB or BSC
              networks
            </p>
          </div>

          <div style={{ display: "flex", margin: "35px 20px", gap: "10px" }}>
            <div>
              <img src={ERROR} alt="error" />
            </div>
            <p
              style={{
                width: "440px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                color: "#FFB018",
                margin: "-10px 0",
              }}
            >
              Do NOT send NFT's to this ETH deposit address. In order to recover
              NFTs deposited to this address an administrative fee will be
              charged.
            </p>
          </div>

          <div>
            <img
              src={QRCODE}
              alt="qrcode"
              style={{
                height: "150px",
                width: "150px",
                marginTop: "-11.2pc",
                marginLeft: "34.6pc",
              }}
            />
          </div>

          <div>
            <p
              style={{
                width: "254px",
                textTransform: "uppercase",
                margin: "30px 20px",
                color: "#fff",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              Your personal Bitcoin deposit address
            </p>
            <div></div>

            <div
              style={{
                display: "flex",
                width: "135.8px",
                margin: "-20px 35.6pc",
                height: "38px",
                padding: "7px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "6px",
                background: "#FFE81A",
                boxShadow: "0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
              }}
            >
              <p style={{ width: "100px" }}>Copy address</p>
            </div>

            <div
              style={{
                display: "flex",
                margin: "-37px 19px",
                width: "540px",
                padding: "8px",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                borderRadius: "6px",
                background: "rgba(15, 17, 26, 0.55)",
              }}
            >
              <p
                style={{
                  marginLeft: "10px",
                  color: "rgba(255, 255, 255, 0.70)",
                }}
              >
                60120B271AD09bFB5a7FBE70x11b1214E1afE67933
              </p>
            </div>

            {/* sec 1============================== */}

            <div style={{ display: "flex", gap: "10px", margin: "55px 20px" }}>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    color: "#B1B6C6",
                  }}
                >
                  Missing contract ETH deposit?
                </p>
              </div>

              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  color: "#FFB018",
                }}
              >
                Request deposit address sweep
              </p>
            </div>

            {/* sec 2============================== */}

            <div style={{ display: "flex", gap: "10px", margin: "-40px 20px" }}>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    color: "#B1B6C6",
                  }}
                >
                  Looking for ERC-20 deposit options?
                </p>
              </div>

              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  color: "#FFB018",
                }}
              >
                Deposit ERC-20 tokens
              </p>
            </div>

            {/* INPUT coin section====================================== */}

            <div
              style={{
                width: "725px",
                height: "123px",
                margin: "-5.5pc 0",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <div style={{ display: "flex", margin: "140px 0" }}>
                <div style={{ display: "flex" }}>
                  <img
                    src={COIN}
                    alt="coin"
                    style={{
                      position: "absolute",
                      top: "38.9pc",
                      left: "29.7pc",
                    }}
                  />
                  <input
                    type="text"
                    style={{
                      width: "317px",
                      color: "#fff",
                      padding: "10px 50px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  />

                  <p
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      marginTop: "28px",
                    }}
                  >
                    =
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <img
                    src={BTC}
                    alt="btc"
                    style={{
                      position: "absolute",
                      top: "38.9pc",
                      left: "52.8pc",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <input
                    type="text"
                    style={{
                      width: "317px",
                      color: "#fff",
                      padding: "10px 50px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  />
                </div>
              </div>

              <div>
                <p
                  style={{
                    width: "511px",
                    color: "#B1B6C6",
                    fontSize: "12px",
                    margin: "-8.5pc 8.3pc",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  The value of BTC may change between now and the time we
                  receive your payment
                </p>
              </div>

              <div
                style={{
                  width: "725px",
                  height: "78px",
                  borderRadius: "8px",
                  background: "rgba(203, 215, 255, 0.03)",
                  margin: "170px 0",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "28px 25px",
                    }}
                  >
                    <p
                      style={{
                        color: "#B1B6C6",
                        margin: "3px 0",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                      }}
                    >
                      Don't have any Bitcoin ?
                    </p>

                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        margin: "-5px 30px",
                        width: "120px",
                        height: "40px",
                        padding: "2px 26px",
                        gap: "10px",
                        borderRadius: "8px",
                        background: "rgba(203, 215, 255, 0.03)",
                      }}
                    >
                      <p
                        style={{
                          color: "#fff",
                          margin: "10px -5.8px",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "16.8px",
                        }}
                      >
                        BUY CRYPTO
                      </p>
                    </div>
                    <div
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <img
                        src={TRANSACTION}
                        alt="transaction"
                        style={{ marginLeft: "100px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DModel4;
