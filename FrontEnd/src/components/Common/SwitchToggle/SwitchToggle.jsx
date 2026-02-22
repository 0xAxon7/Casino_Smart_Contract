import { Switch } from "@headlessui/react";
import React from "react";
import { StyledSwitch } from "./styles";

const SwitchToggle = ({ checked, toggle, label }) => {
  return (
    <StyledSwitch onClick={() => toggle(!checked)}>
      <Switch
        checked={checked}
        style={{
          background: checked
            ? "rgb(114, 242, 56)"
            : "rgba(203, 215, 255, 0.2)",
        }}
        className="switch relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      >
        <span className="sr-only">Private profile</span>
        <span
          aria-hidden="true"
          className={`${
            checked ? "translate-x-4" : "translate-x-0"
          } circle pointer-events-none inline-block transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <label className="label-checkbox">
        <span style={{ whiteSpace: "normal" }}>{label}</span>
      </label>
    </StyledSwitch>
  );
};

export default SwitchToggle;
