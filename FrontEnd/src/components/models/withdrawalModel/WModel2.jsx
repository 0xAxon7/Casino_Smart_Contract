import React from "react";

//assets
import BTC from "../../../assets/images/IMAGE (1).svg";
import COIN from "../../../assets/images/IMAGE (5).svg";
import ARROW from "../../../assets/modelImages/Frame (5).svg";

const WModel2 = () => {
  return (
    <div>
      {/* title */}
      <div
        style={{
          color: "#FFF",
          fontSize: "22px",
          textTransform: "uppercase",
          margin: "-10px 3.1pc",
        }}
      >
        <p style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
          <img
            src={ARROW}
            alt="arrow"
            style={{ width: "9px", height: "16px", marginTop: "3px" }}
          />

          <img
            src={BTC}
            alt="btc"
            style={{ width: "32px", height: "32px", marginLeft: "25px" }}
          />

          <span style={{ margin: "0 6px", width: "225px" }}>
            Withdraw Bitcoin
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

      {/* New div sec========================== */}

      <div
        style={{
          width: "725px",
          height: "378px",
          margin: "40px 40px",
          borderRadius: "8px",
          background: "rgba(203, 215, 255, 0.03)",
        }}
      >
        <div>
          <div>
            <p
              style={{
                width: "720px",
                color: "#B1B6C6",
                padding: "15px 25px",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
              }}
            >
              Please enter the Bitcoin wallet address you wish to receive the
              funds on. Once confirmed, the withdrawal is usually processed
              within a few minutes.
            </p>
          </div>

          {/* input sec================ */}

          <div>
            <div>
              <p
                style={{
                  width: "270px",
                  color: "#B1B6C6",
                  fontSize: "12px",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  display: "flex",
                  gap: "5px",
                  padding: "10px 25px",
                }}
              >
                Receiving Bitcoin address{" "}
                <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span>
              </p>
            </div>

            <div>
              <input
                type="text"
                style={{
                  width: "675px",
                  height: "58px",
                  margin: "5px 25px",
                  borderRadius: "6px",
                  background: "rgba(15, 17, 26, 0.55)",
                  padding: "0 10px",
                  color: "#fff",
                }}
              />
            </div>

            {/* NEW sec================ */}

            <div>
              <p
                style={{
                  width: "270px",
                  color: "#B1B6C6",
                  fontSize: "12px",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  display: "flex",
                  gap: "5px",
                  padding: "20px 25px",
                }}
              >
                Withdrawal amount{" "}
                <span style={{ color: "#FF4949", fontSize: "12px" }}>*</span>
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={COIN}
                  alt="coin"
                  style={{ position: "absolute", top: "28.2pc", left: "7.7pc" }}
                />
                <input
                  type="text"
                  style={{
                    width: "229px",
                    color: "#fff",
                    height: "52px",
                    padding: "0 50px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: "-6px 20px",
                    borderRadius: "6px",
                    background: "rgba(15, 17, 26, 0.55)",
                  }}
                />

                <p style={{ color: "#fff", fontSize: "18px" }}> = </p>
              </div>

              <div style={{ display: "flex" }}>
                <img
                  src={BTC}
                  alt="btc"
                  style={{
                    position: "absolute",
                    top: "28.1pc",
                    left: "25.3pc",
                    width: "20px",
                    height: "20px",
                  }}
                />

                <input
                  type="text"
                  style={{
                    width: "229px",
                    color: "#fff",
                    height: "52px",
                    padding: "0px 50px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: "-6px 20px",
                    borderRadius: "6px",
                    background: "rgba(15, 17, 26, 0.55)",
                  }}
                />

                <div
                  style={{
                    display: "inline-flex",
                    padding: "18px 30px",
                    margin: "-5px 0",
                    height: "50px",
                    borderRadius: "8px",
                    background: "#86F454",
                    boxShadow: "0px 0px 10px 0px rgba(118, 255, 25, 0.40)",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      marginTop: "-13px",
                      fontWeight: "400",
                      fontSize: "14px",
                      fontStyle: "normal",
                      color: "#141722",
                    }}
                  >
                    Request <br /> withdrawal
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p
                  style={{
                    width: "110px",
                    display: "flex",
                    gap: "10px",
                    margin: "15px 25px",
                    color: "#B1B6C6",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  Network Fee: <span>$1.13</span>
                </p>
              </div>

              <div style={{ margin: "0 25px" }}>
                <p
                  style={{
                    width: "525px",
                    color: "#B1B6C6",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  *You will receive the specified Bitcoin amount to your
                  withdrawal address
                </p>

                <p
                  style={{
                    width: "585px",
                    color: "#B1B6C6",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                >
                  *The value subtracted from your balance may vary between now
                  and the time we process your withdrawal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WModel2;
