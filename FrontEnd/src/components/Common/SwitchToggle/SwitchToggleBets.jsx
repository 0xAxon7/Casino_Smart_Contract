import { Switch } from "@headlessui/react";
import React from "react";
import { StyledSwitchBets } from "./styles";

const SwitchToggleBets = ({ checked, toggle }) => {
  return (
    <StyledSwitchBets onClick={toggle}>
      <Switch
        checked={checked}
        style={{
          background: checked ? "#171924" : "rgba(203, 215, 255, 0.2)",
        }}
        className="switch relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      >
        <span className="sr-only">Private profile</span>
        <div
          data-editor-id="quickBetSwitcherButton"
          className={`${
            checked ? "active translate-x-8" : "translate-x-0"
          } pointer-events-none inline-block transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          <svg
            className={`${checked ? "active" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            style={{ width: "16px", height: "16px" }}
          >
            <path
              d="M18.3333 4.0434C18.1035 3.9464 17.8335 4.0164 17.6874 4.20939L7.09864 18.2085C6.98428 18.3605 6.96734 18.5605 7.0584 18.7285C7.14841 18.8935 7.33053 18.9995 7.5296 18.9995H15.3398L13.3661 27.3899C13.311 27.6219 13.4371 27.8589 13.6668 27.9559C13.8955 28.0549 14.1687 27.9819 14.3127 27.7899L24.9015 13.7908C25.0169 13.6398 25.0317 13.4388 24.9417 13.2718C24.8506 13.1038 24.6685 12.9998 24.4705 12.9998H16.6592L18.634 4.60836C18.6891 4.37638 18.562 4.14039 18.3333 4.0434Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Switch>
    </StyledSwitchBets>
  );
};

export default SwitchToggleBets;
