import { Popover } from "@headlessui/react";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import CryptoFuturesCoins from "../CryptoFuturesCoins/CryptoFuturesCoins";
import { StyledPopover } from "./styles";

const MyPopover = ({
  parentOption,
  icon,
  title,
  position,
  subOptions = [],
  onClick,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { selectedOption, updateSelectedOption } = useContext(AppContext);

  const buttonRef = useRef(null);

  const calculateTopPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      return rect.bottom - (subOptions.length ? 72 : 36); // Use bottom to position below the button
    }
    return 0;
  };

  return (
    <Popover
      className="relative"
      onMouseEnter={() => setIsPopoverOpen(true)}
      onMouseLeave={() => setIsPopoverOpen(false)}
    >
      <Popover.Button ref={buttonRef}>
        {parentOption ? (
          <Link to={parentOption.sidebarUrl} className="link" onClick={onClick}>
            {parentOption.icon && (
              <parentOption.icon
                className={
                  parentOption.sidebarUrl === selectedOption ? "activated" : ""
                }
              />
            )}
          </Link>
        ) : (
          <div className="link" onClick={onClick}>
            {icon}
          </div>
        )}
      </Popover.Button>

      {isPopoverOpen && (
        <StyledPopover
          style={{
            height: "auto",
            top: `${calculateTopPosition()}px`,
            left: subOptions.length ? "50px" : "66px",
            zIndex: 1000,
            width: subOptions.length ? "100%" : "auto",
          }}
        >
          {subOptions.length ? (
            <div class="container-popover">
              <div style={{ paddingBottom: "8px" }}>
                <div class="title">{parentOption.text}</div>
                {parentOption.text === "Crypto Futures" ? (
                  <div style={{ padding: "0 8px 0" }}>
                    <CryptoFuturesCoins />
                  </div>
                ) : (
                  subOptions?.map((option, optionIndex) => (
                    <Link
                      to={option.sidebarUrl}
                      className="option"
                      onClick={() => updateSelectedOption(option.sidebarUrl)}
                    >
                      {option.icon && (
                        <div class="icon">
                          <option.icon
                            className={
                              option.sidebarUrl === selectedOption
                                ? "activated"
                                : ""
                            }
                            style={{ marginLeft: "-4px" }}
                          />
                        </div>
                      )}
                      {option.text}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div class="simple-popover">
              {parentOption ? parentOption.text : title}
              <div
                class={`arrow ${
                  position === "left" ? "arrow-left" : "arrow-right"
                }`}
                style={{ top: "6.60001px" }}
              ></div>
            </div>
          )}
        </StyledPopover>
      )}
    </Popover>
  );
};

export default MyPopover;
