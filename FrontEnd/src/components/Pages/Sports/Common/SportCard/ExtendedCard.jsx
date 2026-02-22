import React from "react";
import WinningRateBtn from "./WinningRateBtn";
import { StyledExtendedCard } from "./styles";

const ExtendedCard = () => {
  return (
    <StyledExtendedCard>
      <div data-simplebar="init" class="first-container simplebar-scrollable-y">
        <div class="simplebar-wrapper" style={{ margin: "0px" }}>
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div
              class="simplebar-offset"
              style={{ right: "0px", bottom: "0px" }}
            >
              <div
                class="simplebar-content-wrapper"
                tabindex="0"
                role="region"
                aria-label="scrollable content"
                style={{ height: "auto", overflow: "hidden scroll" }}
              >
                <div class="simplebar-content" style={{ padding: "0px" }}>
                  <div
                    class="last-class"
                    style={{
                      height: "auto",
                      overflow: "hidden",
                      transition: "height 0.3s linear 0s",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div class="team-odds">
                        <div
                          class="bt521 bt522 bt528"
                          data-editor-id="simpleMarketTitle"
                          style={{ width: "auto" }}
                        >
                          <div class="bt523">Double chance</div>
                        </div>
                        <div class="bt527">
                          <WinningRateBtn
                            option="Team 13213"
                            rate="3.4"
                            style={{ maxWidth: "calc(33% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="draw"
                            rate="1.8"
                            style={{ maxWidth: "calc(33% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="Team 2"
                            rate="2.1"
                            style={{ maxWidth: "calc(33% - 8px)" }}
                          />
                        </div>
                      </div>
                      <div class="team-odds">
                        <div
                          class="bt521 bt522 bt528"
                          data-editor-id="simpleMarketTitle"
                          style={{ width: "auto" }}
                        >
                          <div class="bt523">Total</div>
                        </div>
                        <div class="bt527">
                          <WinningRateBtn
                            option="Team 13213"
                            rate="3.4"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="draw"
                            rate="1.8"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="Team 2"
                            rate="2.1"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="Team 13213"
                            rate="3.4"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="draw"
                            rate="1.8"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="Team 2"
                            rate="2.1"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                        </div>
                      </div>
                      <div class="team-odds">
                        <div
                          class="bt521 bt522 bt528"
                          data-editor-id="simpleMarketTitle"
                          style={{ width: "auto" }}
                        >
                          <div class="bt523">Handicap</div>
                        </div>
                        <div class="bt527">
                          <WinningRateBtn
                            option="Team 13213"
                            rate="3.4"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="draw"
                            rate="1.8"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="Team 2"
                            rate="2.1"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="Team 13213"
                            rate="3.4"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="draw"
                            rate="1.8"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="Team 2"
                            rate="2.1"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                        </div>
                      </div>
                      <div class="team-odds">
                        <div
                          class="bt521 bt522 bt528"
                          data-editor-id="simpleMarketTitle"
                          style={{ width: "auto" }}
                        >
                          <div class="bt523">Both teams to score</div>
                        </div>
                        <div class="bt527">
                          <WinningRateBtn
                            option="Team 13213"
                            rate="3.4"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                          <WinningRateBtn
                            option="draw"
                            rate="1.8"
                            style={{ maxWidth: "calc(50% - 8px)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="simplebar-placeholder"
            style={{ width: "100%", height: "520px" }}
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            class="simplebar-scrollbar"
            style={{ width: "0px", display: "none" }}
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            class="simplebar-scrollbar"
            style={{
              height: "175px",
              display: "block",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          ></div>
        </div>
      </div>
    </StyledExtendedCard>
  );
};

export default ExtendedCard;
