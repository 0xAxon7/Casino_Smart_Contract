import React from "react";

//assets
import ERROR from "../../../assets/images/Frame (62).svg";
import TRANSACTION from "../../../assets/images/Frame 184.svg";
import QRCODE from "../../../assets/images/IMAGE (48).png";
import COIN from "../../../assets/images/IMAGE (5).svg";
import ARROW from "../../../assets/modelImages/Frame (5).svg";
import LTC from "../../../assets/modelImages/IMAGE (50).png";

const DModel6 = () => {
  return (
    <div
      style={{
        width: "805px",
        height: "704px",
        borderRadius: "10px",
        background: "#1A1D29",
        boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)",
        margin: "30px 25pc",
      }}
    >
      <div>
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
              src={LTC}
              alt="ltc"
              style={{ width: "32px", height: "32px", marginLeft: "25px" }}
            />

            <span style={{ margin: "0 6px", width: "210px" }}>
              Deposit Laticoin
            </span>
            <p
              style={{
                width: "422px",
                color: "#FFB018",
                textTransform: "none",
                fontSize: "14px",
                marginLeft: "-15px",
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
            height: "286px",
            margin: "50px 40px",
            borderRadius: "8px",
            background: "rgba(203, 215, 255, 0.03)",
          }}
        >
          <div>
            <p
              style={{
                width: "500px",
                padding: "25px 20px",
                color: "#B1B6C6",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              Send the amount of Laticoin of your choice to the following
              address to receive the equivalent in Coins.
            </p>
          </div>

          <div style={{ display: "flex", margin: "-10px 20px", gap: "10px" }}>
            <div>
              <img src={ERROR} alt="error" />
            </div>
            <p
              style={{
                width: "442px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                color: "#FFB018",
                margin: "0px 0",
              }}
            >
              Only deposit over the LTC network. Do not use BNB or BSC networks
            </p>
          </div>

          <div>
            <img
              src={QRCODE}
              alt="qrcode"
              style={{
                height: "150px",
                width: "150px",
                marginTop: "-4.6pc",
                marginLeft: "34.6pc",
              }}
            />
          </div>

          <div>
            <p
              style={{
                width: "254px",
                textTransform: "uppercase",
                margin: "0px 20px",
                color: "#fff",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              Your personal laticoin deposit address
            </p>
            <div></div>

            <div
              style={{
                display: "flex",
                width: "135.8px",
                margin: "10px 35.6pc",
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
                margin: "-48px 19px",
                width: "540px",
                padding: "8px",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
                borderRadius: "6px",
                background: "rgba(15, 17, 26, 0.55)",
              }}
            >
              <p style={{ marginLeft: "10px", color: "#fff" }}>
                JY1kbvMPfVSXDUPEWBSpxxBxSyfAdgaE4q
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
                      top: "32.8pc",
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
                    src={LTC}
                    alt="ltc"
                    style={{
                      position: "absolute",
                      top: "32.8pc",
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
                  The value of LTC may change between now and the time we
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
                      Don't have any Laticoin ?
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
};

export default DModel6;
