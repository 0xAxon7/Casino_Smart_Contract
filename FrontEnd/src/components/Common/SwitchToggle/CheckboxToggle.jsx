import { Switch } from "@headlessui/react";
import React from "react";
import { StyledSwitch } from "./styles";

const CheckboxToggle = ({ checked, toggle, label }) => {
  return (
    <StyledSwitch onClick={() => toggle(!checked)}>
      <Switch
        checked={checked}
        style={
          checked
            ? {
                background: "rgb(255, 229, 0)",
                boxShadow:
                  "rgb(255, 176, 25) 0px 0px 9px 0px, rgb(255, 176, 25) 0px 0px 4px inset",
                border: " 1px solid rgb(255, 229, 0) !important",
              }
            : {}
        }
        className="switch square relative inline-flex shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      >
        <span className="sr-only">Din't show again</span>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
          size="11"
        >
          <path
            transform="translate(-3 -3)"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.2 6.112L6.4147281 9.28 9.96 4"
          ></path>
        </svg>
      </Switch>
      <label className="label-input">
        <span style={{ whiteSpace: "normal" }}>{label}</span>
      </label>
    </StyledSwitch>
  );
};

export default CheckboxToggle;
