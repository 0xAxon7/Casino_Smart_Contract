import React, { useState } from "react";
import CheckboxToggle from "../Common/SwitchToggle/CheckboxToggle";
import Modal from "./Modal";
import { StyleBonusBattleWelcome } from "./styles";

const CryptoTradingRisky = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Modal maxWidth={720} isOpen={isOpen}>
      <StyleBonusBattleWelcome>
        <h1 className="heading">CRYPTO TRADING CAN BE RISKY!</h1>
        <div className="description">
          <p>
            Crypto Portfolio is an exciting way for Rollbit users to build a
            cryptocurrency portfolio.
          </p>
          <p>
            With just a few clicks, you can build your dream cryptocurrency
            portfolio. This feature was built with simplicity in mind,
            eliminating all the complexities found on cryptocurrency exchanges.
          </p>
          <p>
            When adding a cryptocurrency to your Crypto Portfolio, the specified
            USD value is taken from your main Rollbit balance and you will
            receive the equivalent value in your desired cryptocurrency.{" "}
          </p>
          <p>
            Any gains or losses will be reflected directly within your Crypto
            Portfolio.
          </p>
          <ul>
            <li>
              It's currently not possible to deposit or withdraw assets within
              Crypto Portfolio. This will likely be possible in the future,
              based on user demand.
            </li>
            <li>
              Fees will apply when cashing out crypto from your Crypto Portfolio
              to your main balance. All fees will be disclosed before you cash
              out and will be relatively small.
            </li>
            <li>
              After cashing out from your Crypto Portfolio, you can initiate a
              withdrawal from your main balance via supported methods (BTC, ETH
              & LTC). All withdrawals are made in USD equivalent.
            </li>
            <li>
              Market prices for Crypto Portfolio are sourced from leading
              exchanges to ensure accuracy and stability.
            </li>
            <li>
              Cryptocurrency prices can be extremely volatile, so please take
              care when using this feature and make sure you understand the
              risks.
            </li>
          </ul>
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

export default CryptoTradingRisky;
