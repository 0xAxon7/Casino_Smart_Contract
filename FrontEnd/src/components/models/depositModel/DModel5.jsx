import React from "react";

//assets
import ARROW from "../../../assets/modelImages/Frame (5).svg";
import METAMASK from "../../../assets/modelImages/Frame (63).svg";

const DModel5 = () => {
  return (
    <div
      style={{
        width: "805px",
        height: "459px",
        borderRadius: "10px",
        background: "#1A1D29",
        boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)",
        margin: "10pc",
      }}
    >
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
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <img
              src={ARROW}
              alt="arrow"
              style={{ width: "9px", height: "16px", marginTop: "3px" }}
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
            margin: "30px 40px",
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
    </div>
  );
};

export default DModel5;
