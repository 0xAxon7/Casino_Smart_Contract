import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../context/AppContext";
import SwitchToggleBets from "../../../../Common/SwitchToggle/SwitchToggleBets";
import { StyledBetslip } from "./styles";

const Betslip = () => {
  const { isTabletScreen } = useContext(AppContext);
  const [isQuickBetToggle, setIsQuickBetToggle] = useState(false);
  const [isBetsOpen, setIsBetsOpen] = useState(false);

  const handleQuickBetToggle = (e) => {
    setIsBetsOpen(true);
    setIsQuickBetToggle((prev) => !prev);
  };

  const handleBetslipToggle = () => {
    setIsBetsOpen((prev) => !prev);
  };

  return (
    <StyledBetslip
      data-cy="betslip"
      class="spt-bet-slip"
      style={{ zIndex: "20" }}
    >
      <div class="first-class">
        <div class="second-class">
          <div
            data-editor-id="betslipContent"
            class="third-class"
            style={{
              bottom: isBetsOpen
                ? isTabletScreen
                  ? "14px"
                  : "-40px"
                : isTabletScreen
                ? "126px"
                : "65px",
              transition: "bottom 0.5s ease-in-out", // Apply smooth transition
            }}
          >
            <div class="fourth-class">
              <div class="fifth-class" style={{ height: "161px" }}>
                <div>
                  <div>
                    <div
                      class={`container-betslip ${
                        isQuickBetToggle ? "toggled" : ""
                      }`}
                      data-editor-id="betslipHeader"
                      onClick={handleBetslipToggle}
                    >
                      <div class="left-container">
                        <div class="icon-container">
                          <svg
                            data-cy="ic-betslip"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            style={{
                              fill: "currentcolor",
                              color: "rgb(23, 25, 36)",
                              width: "auto",
                              height: "32px",
                            }}
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.125 2C6.84683 2 5 3.8804 5 6.2V25.8C5 28.1196 6.84683 30 9.125 30H22.875C25.1532 30 27 28.1196 27 25.8V6.2C27 3.8804 25.1532 2 22.875 2H9.125ZM11.5 21C10.6716 21 10 21.6716 10 22.5C10 23.3284 10.6716 24 11.5 24H20.5C21.3284 24 22 23.3284 22 22.5C22 21.6716 21.3284 21 20.5 21H11.5ZM10 16.5C10 15.6716 10.6716 15 11.5 15H20.5C21.3284 15 22 15.6716 22 16.5C22 17.3284 21.3284 18 20.5 18H11.5C10.6716 18 10 17.3284 10 16.5ZM11.5 9C10.6716 9 10 9.67157 10 10.5C10 11.3284 10.6716 12 11.5 12H20.5C21.3284 12 22 11.3284 22 10.5C22 9.67157 21.3284 9 20.5 9H11.5Z"
                            ></path>
                          </svg>
                        </div>
                        <span class="text">Betslip</span>
                        <svg
                          class="bt1422 bt1423"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrow-down"
                          style={{
                            rotate: isBetsOpen ? "" : "180deg",
                          }}
                        >
                          <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
                        </svg>
                      </div>
                      <div class="right-container">
                        <div
                          class="text"
                          data-editor-id="quickBetSwitcherLabel"
                        >
                          Quick Bet
                        </div>
                        <SwitchToggleBets
                          checked={isQuickBetToggle}
                          toggle={(e) => handleQuickBetToggle(e)}
                        />
                      </div>
                    </div>
                    <div class="bets-class">
                      <div>
                        <div class="bets-first-class">
                          <div
                            class="bets-second-class"
                            style={{ maxHeight: "880px" }}
                          >
                            <div class="bets-third-class">
                              <div class="bets-fourth-class">
                                <div class="bets-container">
                                  <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="bets-icon"
                                    data-editor-id="emptyBetSlipIcon"
                                  >
                                    <g clip-path="url(#clip0_19728_23370)">
                                      <path
                                        opacity="0.3"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                                        fill="#FFE81A"
                                      ></path>
                                      <path
                                        opacity="0.7"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M39.1395 42.6234C35.0096 45.9848 29.7401 48 24 48C18.3243 48 13.1088 46.0298 9 42.7361V14H12C12 15.6569 13.3431 17 15 17C16.6569 17 18 15.6569 18 14H21C21 15.6569 22.3431 17 24 17C25.6569 17 27 15.6569 27 14H30C30 15.6569 31.3431 17 33 17C34.6569 17 36 15.6569 36 14H39.1395V42.6234ZM16.5 24C15.6716 24 15 24.6716 15 25.5C15 26.3284 15.6716 27 16.5 27H31.5C32.3284 27 33 26.3284 33 25.5C33 24.6716 32.3284 24 31.5 24H16.5ZM16.5 31C15.6716 31 15 31.6716 15 32.5C15 33.3284 15.6716 34 16.5 34H27.5C28.3284 34 29 33.3284 29 32.5C29 31.6716 28.3284 31 27.5 31H16.5Z"
                                        fill="#FFE81A"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_19728_23370">
                                        <rect
                                          width="48"
                                          height="48"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <div class="bets-text">
                                    <div class="bets-text-title">
                                      Place your bets
                                    </div>
                                    <div
                                      class="bets-text-info"
                                      style={{ opacity: 0.7 }}
                                    >
                                      Your selections will appear in this area
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bt1473"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bt1391 bt1396" data-editor-id="virtualRaceOutcome"></div>
        </div>
      </div>
    </StyledBetslip>
  );
};

export default Betslip;
