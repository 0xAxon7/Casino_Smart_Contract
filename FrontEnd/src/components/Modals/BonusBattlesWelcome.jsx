import React, { useState } from "react";
import CheckboxToggle from "../Common/SwitchToggle/CheckboxToggle";
import Modal from "./Modal";
import { StyleBonusBattleWelcome } from "./styles";

const BonusBattlesWelcome = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Modal maxWidth={710} isOpen={isOpen}>
      <StyleBonusBattleWelcome>
        <h1 className="heading">Welcome to Bonus Battles!</h1>
        <div className="description">
          <p>Rollbit is excited to launch their exclusive Bonus Battles.</p>
          <p>
            Since Bonus Battles are a new concept and it's your first time here.
            We'd appreciate it if you could read the information below and let
            us know you acknowledge it. This will ensure you're informed about
            how Bonus Battles work and have the best possible experience.
          </p>
          <ul>
            <li>
              Bonus Battles is a unique PvP game mode that gives players an
              exciting new way to enjoy Bonus Features within popular slot
              games.
            </li>
            <li>
              All participants must purchase a Bonus Buy within 1 minute and 30
              seconds of a Bonus Battle starting.
            </li>
            <li>
              The participant with the biggest win at the end of the Bonus
              Battle will win everyone else's balance.
            </li>
            <li>In the event of a draw, a random winner will be selected.</li>
            <li>
              Any deliberate abuse/trolling within Bonus Battles can result in
              action against your account and forfeiture of balance.
            </li>
          </ul>
        </div>
        <div className="more-info">
          <div size="13" color="text2" className="text">
            More info:
          </div>
          <a href="/faq">
            <div className="faq-text">FAQ</div>
          </a>
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

export default BonusBattlesWelcome;
