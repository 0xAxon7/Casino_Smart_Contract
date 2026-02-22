import React, { useState } from "react";
import { styled } from "styled-components";

//assets
import ARROW from "../../../assets/modelImages/Frame (5).svg";

import RLB from "../../../assets/images/Frame (60).svg";
import SEARCH from "../../../assets/images/Frame (61).svg";
import ERROR from "../../../assets/images/Frame (62).svg";
import ERC from "../../../assets/images/Frame 160.svg";
import CRYPTO from "../../../assets/images/Frame 166.svg";
import TRANSACTION from "../../../assets/images/Frame 184.svg";
import BTC from "../../../assets/images/IMAGE (1).svg";
import ETH from "../../../assets/images/IMAGE (2).svg";
import LTC from "../../../assets/images/IMAGE (3).svg";
import SOL from "../../../assets/images/IMAGE (4).svg";
import QRCODE from "../../../assets/images/IMAGE (48).png";
import CHAIN from "../../../assets/images/IMAGE (49).png";
import COIN from "../../../assets/images/IMAGE (5).svg";
import NFT from "../../../assets/images/svg.svg";
import METAMASK from "../../../assets/modelImages/Frame (63).svg";

//overflow style
const StyledComponent = styled.div`
  &::-webkit-scrollbar {
    width: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: #1a1d29;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(203, 215, 255, 0.08);
  }
`;

const DModel1 = () => {
  const tableRows = Array(10).fill(null);

  const [isCoin, setisCoin] = useState("");

  if (isCoin === "bitCoin") {
    return (
      <>
        <StyledComponent style={{ overflowY: "scroll", overflowX: "hidden" }}>
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
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <img
                onClick={() => setisCoin("")}
                src={ARROW}
                alt="arrow"
                style={{
                  width: "9px",
                  height: "16px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
              />

              <img
                src={BTC}
                alt="btc"
                style={{ width: "32px", height: "32px", marginLeft: "25px" }}
              />

              <span style={{ margin: "0 6px" }}>Deposit Bitcoin</span>
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
              height: "286px",
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
                Send the amount of Bitcoin of your choice to the following
                address to receive the equivalent in Coins.
              </p>
            </div>

            <div>
              <img
                src={QRCODE}
                alt="qrcode"
                style={{
                  height: "150px",
                  width: "150px",
                  marginTop: "-4pc",
                  marginLeft: "34.6pc",
                }}
              />
            </div>

            <div>
              <p
                style={{
                  width: "254px",
                  textTransform: "uppercase",
                  margin: "10px 20px",
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
                  margin: "0px 35.6pc",
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
                  margin: "-39px 20px",
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
                  EXTEPrYKv8PL6fyAiF3DSVPoRKjZTb7LYn
                </p>
              </div>

              <div
                style={{
                  width: "725px",
                  height: "123px",
                  margin: "5.5pc 0",
                  borderRadius: "8px",
                  background: "rgba(203, 215, 255, 0.03)",
                }}
              >
                {/* INPUT coin section====================================== */}

                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={COIN}
                        alt="coin"
                        style={{ marginLeft: "10px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      marginTop: "28px",
                    }}
                  >
                    =
                  </p>

                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={BTC}
                        alt="coin"
                        style={{ marginLeft: "10px", height: "20px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      width: "511px",
                      color: "#B1B6C6",
                      fontSize: "12px",
                      margin: "0 8.3pc",
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
                    margin: "40px 0",
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
        </StyledComponent>
      </>
    );
  }

  if (isCoin === "ethereum") {
    return (
      <>
        <StyledComponent
          style={{ overflow: "scroll", overflowX: "hidden", height: "26pc" }}
        >
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
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <img
                onClick={() => setisCoin("")}
                src={ARROW}
                alt="arrow"
                style={{
                  width: "9px",
                  height: "16px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
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
                Send the amount of Bitcoin of your choice to the following
                address to receive the equivalent in Coins.
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
                Do NOT send NFT's to this ETH deposit address. In order to
                recover NFTs deposited to this address an administrative fee
                will be charged.
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

              <div
                style={{ display: "flex", gap: "10px", margin: "55px 20px" }}
              >
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

              <div
                style={{ display: "flex", gap: "10px", margin: "-40px 20px" }}
              >
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
                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={COIN}
                        alt="coin"
                        style={{ marginLeft: "10px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      marginTop: "28px",
                    }}
                  >
                    =
                  </p>

                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={ETH}
                        alt="coin"
                        style={{ marginLeft: "10px", height: "20px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
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
        </StyledComponent>
      </>
    );
  }

  if (isCoin === "litecoin") {
    return (
      <>
        <StyledComponent style={{ overflowY: "scroll", overflowX: "hidden" }}>
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
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <img
                onClick={() => setisCoin("")}
                src={ARROW}
                alt="arrow"
                style={{
                  width: "9px",
                  height: "16px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
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
                Only deposit over the LTC network. Do not use BNB or BSC
                networks
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
                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={COIN}
                        alt="coin"
                        style={{ marginLeft: "10px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      marginTop: "28px",
                    }}
                  >
                    =
                  </p>

                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={LTC}
                        alt="coin"
                        style={{ marginLeft: "10px", height: "20px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
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
        </StyledComponent>
      </>
    );
  }

  if (isCoin === "solana") {
    return (
      <>
        <StyledComponent
          style={{ overflowY: "scroll", overflowX: "hidden", height: "26pc" }}
        >
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
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <img
                onClick={() => setisCoin("")}
                src={ARROW}
                alt="arrow"
                style={{
                  width: "9px",
                  height: "16px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
              />

              <img
                src={SOL}
                alt="sol"
                style={{ width: "32px", height: "32px", marginLeft: "25px" }}
              />

              <span style={{ margin: "0 6px", width: "210px" }}>
                Deposit SOLANA
              </span>
              <p
                style={{
                  width: "422px",
                  color: "#FFB018",
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft: "-27px",
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
              height: "349px",
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
                Send the amount of Solana of your choice to the following
                address to receive the equivalent in Coins.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                margin: "0 20px",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div>
                <img src={ERROR} alt="error" />
              </div>
              <p
                style={{
                  width: "450px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  color: "#FFB018",
                }}
              >
                Only deposit over the Solana network. Do not use BNB or BSC
                networks
              </p>
            </div>

            <div style={{ display: "flex", margin: "35px 20px", gap: "10px" }}>
              <div>
                <img src={ERROR} alt="error" />
              </div>
              <p
                style={{
                  width: "454px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  color: "#FFB018",
                  margin: "-10px 0",
                }}
              >
                Solana is a highly experimental blockchain. Deposits and
                withdrawals might be routinely delayed for extended periods of
                time. Use at your own risk.
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
                Your personal SOLANA deposit address
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
                <p style={{ marginLeft: "10px", color: "#fff" }}>
                  VzPWa8u38i9vo3EFye7SUFGYHdUJgRB3n1HU1evQSQ3
                </p>
              </div>

              {/* sec 1============================== */}

              <div
                style={{ display: "flex", gap: "10px", margin: "55px 20px" }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      color: "#B1B6C6",
                    }}
                  >
                    Missing SOL deposit?
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

              {/* INPUT coin section====================================== */}

              <div
                style={{
                  width: "725px",
                  height: "123px",
                  margin: "-6.5pc 0",
                  borderRadius: "8px",
                  background: "rgba(203, 215, 255, 0.03)",
                }}
              >
                <div style={{ display: "flex", margin: "140px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={COIN}
                        alt="coin"
                        style={{ marginLeft: "10px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      marginTop: "28px",
                    }}
                  >
                    =
                  </p>

                  <div
                    style={{
                      display: "flex",
                      width: "317px",
                      color: "#fff",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      margin: "20px 20px",
                      borderRadius: "6px",
                      background: "rgba(15, 17, 26, 0.55)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "280px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={SOL}
                        alt="coin"
                        style={{ marginLeft: "10px", height: "20px" }}
                      />
                      <input
                        type="text"
                        style={{
                          background: "transparent",
                          width: "15pc",
                          height: "2.7pc",
                          outline: "none",
                        }}
                      />
                    </div>
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
                    The value of SOL may change between now and the time we
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
                        Don't have any Solana ?
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
        </StyledComponent>
      </>
    );
  }

  if (isCoin === "ERC") {
    return (
      <>
        <StyledComponent
          style={{ overflowY: "scroll", overflowX: "hidden", height: "26pc" }}
        >
          {/* icons */}

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
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <img
                onClick={() => setisCoin("")}
                src={ARROW}
                alt="arrow"
                style={{
                  width: "9px",
                  height: "16px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
              />

              <span style={{ margin: "0 23px" }}>Deposit ERC-20 Tokens</span>
            </p>
          </div>

          {/* search bar */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3pc 0",
              }}
            >
              <input
                type="text"
                style={{
                  display: "flex",
                  color: "#fff",
                  width: "725px",
                  padding: "15px 50px",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "6px",
                  background: "rgba(15, 17, 26, 0.55)",
                }}
              />
            </div>
            <div style={{ margin: "-5.4pc 3.5pc" }}>
              <img
                src={SEARCH}
                alt="search"
                style={{ width: "22px", height: "22px" }}
              />
            </div>
          </div>

          {/* table headings   */}
          <div style={{ display: "flex", margin: "8.5pc 4pc", gap: "16pc" }}>
            <div style={{ width: "46px" }}>
              <p
                style={{
                  color: "#B1B6C6",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  textTransform: "uppercase",
                }}
              >
                Crypto
              </p>
            </div>
            <div style={{ width: "34px" }}>
              <p
                style={{
                  color: "#B1B6C6",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  textTransform: "uppercase",
                  margin: "0 7pc",
                }}
              >
                Price
              </p>
            </div>
            <div style={{ width: "73px" }}>
              <p
                style={{
                  color: "#B1B6C6",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "14.4px",
                  textTransform: "uppercase",
                }}
              >
                Price 24h %
              </p>
            </div>
          </div>

          {tableRows.map((_, index) => (
            <div key={index} style={{ marginTop: "8pc" }}>
              <div
                style={{
                  display: "flex",
                  width: "735px",
                  padding: "15px 16px",
                  flexShrink: "0",
                  borderRadius: "8px",
                  background: "rgba(203, 215, 255, 0.03)",
                  margin: "-115px 1.8pc",
                  gap: "17.5pc",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={CHAIN}
                    alt="chain"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "999px",
                      marginLeft: "15px",
                    }}
                  />
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "16.8px",
                    }}
                  >
                    Polygon (MATIC)
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10.2pc",
                  }}
                >
                  <p
                    style={{
                      width: "63px",
                      color: "#fff",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "16.8px",
                    }}
                  >
                    $1.14821
                  </p>
                  <p
                    style={{
                      width: "41px",
                      color: "#72F238",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "16.8px",
                      margin: "0 -15px",
                    }}
                  >
                    0.35%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StyledComponent>
      </>
    );
  }

  if (isCoin === "nft") {
    return (
      <>
        <div>
          {/* Headings */}
          <div
            style={{
              color: "#FFF",
              fontSize: "22px",
              textTransform: "uppercase",
              margin: "-10px 3pc",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <img
                onClick={() => setisCoin("")}
                src={ARROW}
                alt="arrow"
                style={{
                  width: "9px",
                  height: "16px",
                  marginTop: "3px",
                  cursor: "pointer",
                }}
              />

              <span style={{ margin: "0 24px", width: "300px" }}>
                Deposit NFT's
              </span>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "422px",
                  color: "#FFB018",
                  textTransform: "none",
                  fontSize: "14px",
                  marginRight: "18pc",
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                View Transactions
              </p>
            </p>
          </div>

          {/* div background */}
          <div
            style={{
              width: "720px",
              height: "275px",
              borderRadius: "8px",
              background: "rgba(203, 215, 255, 0.03)",
              margin: "3pc 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "690px",
                  height: "243px",
                  background: "#1A1D29",
                  borderRadius: "8px",
                  marginTop: "15px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "28px",
                    margin: "40px 12.5pc",
                  }}
                >
                  <img src={METAMASK} alt="METAMASK" />

                  <div>
                    <p
                      style={{
                        color: "#B1B6C6",
                        textTransform: "none",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "22.4px",
                      }}
                    >
                      Connect your Ethereum wallet to deposit NFTs.
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      padding: "10px 20px",
                      alignItems: "flex-start",
                      gap: "10px",
                      borderRadius: "8px",
                      background: "#FFE81A",
                      boxShadow: " 0px 0px 10px 0px rgba(255, 176, 25, 0.40)",
                      cursor: "pointer",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        color: "#141722",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "16.8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Connect Metamask Wallet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <>
        <div>
          <div>
            <p
              style={{
                color: "#FFF",
                width: "189px",
                margin: "0 35px",
                textTransform: "uppercase",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "16.8px",
              }}
            >
              Deposit options
            </p>
          </div>
        </div>

        {/* icons sec=============== */}

        <div>
          <div style={{ display: "flex", marginTop: "15px" }}>
            <div
              onClick={() => setisCoin("bitCoin")}
              style={{
                display: "inline-flex",
                padding: "45px 0px",
                margin: "20px 35px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26 px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
                cursor: "pointer",
              }}
            >
              <img src={BTC} alt="btc" style={{ marginTop: "-20px" }} />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "106px",
                  margin: "0px 35px",
                  marginTop: "24px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Bitcoin (BTC)
              </p>
            </div>

            <div
              onClick={() => setisCoin("ethereum")}
              style={{
                display: "inline-flex",
                padding: "45px 0px",
                margin: "20px -22px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
                cursor: "pointer",
              }}
            >
              <img src={ETH} alt="eth" style={{ marginTop: "-20px" }} />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "106px",
                  margin: "0 35px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Ethereum (ETH)
              </p>
            </div>

            <div
              onClick={() => setisCoin("litecoin")}
              style={{
                display: "inline-flex",
                padding: "45px 0px",
                margin: "20px 35px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
                cursor: "pointer",
              }}
            >
              <img src={LTC} alt="ltc" style={{ marginTop: "-20px" }} />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "106px",
                  margin: "0 35px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Litecoin (LTC)
              </p>
            </div>

            <div
              onClick={() => setisCoin("solana")}
              style={{
                display: "inline-flex",
                padding: "45px 0px",
                margin: "20px -22px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
                cursor: "pointer",
              }}
            >
              <img src={SOL} alt="sol" style={{ marginTop: "-20px" }} />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "106px",
                  margin: "0 35px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Solana (SOL)
              </p>
            </div>
          </div>

          {/* next div=====================================================
                    ================================================================= */}

          <div style={{ display: "flex", margin: "-20px 0" }}>
            <div
              style={{
                display: "inline-flex",
                margin: "30px 35px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26 px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <img src={RLB} alt="rlb" style={{ marginTop: "25px" }} />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "108px",
                  margin: "35px 35px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Rollbit Coin (RLB)
              </p>
            </div>

            <div
              onClick={() => setisCoin("ERC")}
              style={{
                display: "inline-flex",
                margin: "30px -22px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
                cursor: "pointer",
              }}
            >
              <img src={ERC} alt="erc" style={{ marginTop: "15px" }} />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "106px",
                  margin: "0 35px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                ERC-20{" "}
              </p>
              <span
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  marginTop: "-24px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                (UsDx, APE, and more)
              </span>
            </div>

            <div
              onClick={() => setisCoin("nft")}
              style={{
                display: "inline-flex",
                margin: "30px 35px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
                cursor: "pointer",
              }}
            >
              <img
                src={NFT}
                alt="nft"
                style={{ marginTop: "15px", width: "68px", height: "68px" }}
              />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "106px",
                  margin: "0 35px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                NFT
              </p>
            </div>

            <div
              style={{
                display: "inline-flex",
                margin: "30px -22px",
                flexDirection: "column",
                alignItems: "center",
                gap: "26px",
                borderRadius: "8px",
                background: "rgba(203, 215, 255, 0.03)",
              }}
            >
              <img src={CRYPTO} alt="crypto" style={{ marginTop: "20px" }} />
              <p
                style={{
                  color: "#B1B6C6",
                  textAlign: "center",
                  width: "106px",
                  margin: "0 35px",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "16.8px",
                }}
              >
                Buy Crypto
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default DModel1;
