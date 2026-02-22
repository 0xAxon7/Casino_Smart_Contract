import React, { useState } from "react";
import CheckboxToggle from "../Common/SwitchToggle/CheckboxToggle";
import Modal from "./Modal";
import { StyleBonusBattleWelcome } from "./styles";

const SidebetsWelcome = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Modal maxWidth={580} isOpen={isOpen}>
      <StyleBonusBattleWelcome>
        <h1 class="heading justify-center">
          <div className="text-center">
            <div style={{ fontSize: "24px", paddingBottom: "6px" }}>
              Welcome to Sidebets
            </div>
            <div style={{ fontSize: "16" }}>exclusive to Rollbit</div>
          </div>
        </h1>
        <div class="description">
          <img
            src="https://rollbit.com/static/media/sidebets.955255260f99dac78953.webp"
            alt=""
            style={{ maxWidth: "300px", marginBottom: "24px" }}
          />
          <p>
            With Sidebets, you can bet on the outcome of spins on your favourite
            Slots.
          </p>
          <p>The Sidebets feature is available under every supported Slot.</p>
          <img
            src="https://rollbit.com/static/media/sidebets-form.04ab220f0a905c1e2afb.jpg"
            alt=""
          />
          <p>
            To place a Sidebet, you must first input a wager amount, choose a
            multiplier and whether you're betting on 'Above' or 'Below'.
          </p>
          <p>
            With Sidebets active, every time you bet an eligible amount, the
            Sidebets will be triggered.
          </p>
          <p>
            You can see eligible wager amounts below the Sidebets form when you
            start creating your Sidebets.
          </p>
          <div class="warning-text">
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              xmlns="http://www.w3.org/2000/svg"
              size="20"
              color="#ffe500"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7013 1.19853C11.3182 0.522528 10.3443 0.522527 9.96124 1.19853L0.962978 17.0785C0.585235 17.7451 1.06679 18.5715 1.83301 18.5715H19.8295C20.5957 18.5715 21.0773 17.7451 20.6996 17.0785L11.7013 1.19853ZM11.5541 12.1603C11.777 12.1603 11.8456 12.0574 11.8627 11.8345L12.017 6.92026C12.017 6.68026 11.9484 6.5774 11.7084 6.5774H9.97127C9.73127 6.5774 9.64555 6.68026 9.64555 6.92026L9.81698 11.8345C9.83413 12.0574 9.9027 12.1603 10.1256 12.1603H11.5541ZM11.7084 15.806C11.9313 15.806 12.017 15.7203 12.017 15.4803V13.646C12.017 13.4231 11.9313 13.3203 11.7084 13.3203H9.97127C9.73127 13.3203 9.64555 13.4231 9.64555 13.646V15.4803C9.64555 15.7203 9.73127 15.806 9.97127 15.806H11.7084Z"
                fill="currentColor"
              ></path>
            </svg>
            Note: Eligibility will depend on the value of your Sidebet; not all
            wager amounts are supported.
          </div>
          <p>
            To win a Sidebet, the outcome must be below/above the selected
            multiplier.
          </p>
          <p>
            Remember that with a Sidebet such as above 10x, you will only win
            the Sidebet if the outcome is greater than 10x.
          </p>
          <p style={{ padding: "4px 0px 8px" }}>
            <a href="/category/sidebets">
              <button class="view-sidebets-button">
                View all Sidebets-supported games
              </button>
            </a>
          </p>
        </div>
        <CheckboxToggle
          checked={isChecked}
          toggle={setIsChecked}
          label={"Don't show again"}
        />
        <button
          className="acknowledge-button"
          onClick={onClose}
          style={{ marginTop: "24px" }}
        >
          I acknowledge
        </button>
      </StyleBonusBattleWelcome>
    </Modal>
  );
};

export default SidebetsWelcome;
