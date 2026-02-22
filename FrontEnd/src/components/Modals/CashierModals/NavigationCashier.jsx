import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledNavigationCashier } from "./styles";
const options = ["Deposit", "Withdraw", "Coupons", "Referrals"];

const NavigationCashier = () => {
  const { selectedOptionCashier, updateCashierOption } = useContext(AppContext);

  return (
    <StyledNavigationCashier>
      <div className="options-container">
        {options.map((option) => (
          <div
            key={option}
            className={`option ${
              selectedOptionCashier === option ? "active-option" : ""
            }`}
            onClick={() => updateCashierOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div class="css-1xat6c" style={{ display: "none" }}>
        <button class="next-btn">
          <svg
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            size="6"
            color="hsl(225.70000000000005, 15.6%, 58.8%)"
            class="css-1oc3pwd"
          >
            <path d="m8 12.534c.00312077-.3848019-.13982662-.7564651-.4-1.04l-4.252-4.494 4.252-4.494c.54019021-.58619481.54019021-1.48880519 0-2.075-.25191879-.27487269-.60764873-.43137897-.9805-.43137897s-.72858121.15650628-.9805.43137897l-5.232 5.532c-.54268879.58406274-.54268879 1.48793726 0 2.072l5.227 5.534c.25191879.2748727.60764873.431379.9805.431379s.72858121-.1565063.9805-.431379c.2598547-.2817328.40285194-.6517381.4-1.035"></path>
          </svg>
        </button>
        <button class="next-btn">
          <svg
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            size="6"
            color="hsl(225.70000000000005, 15.6%, 58.8%)"
            style={{ transform: "rotate(180deg)" }}
          >
            <path d="m8 12.534c.00312077-.3848019-.13982662-.7564651-.4-1.04l-4.252-4.494 4.252-4.494c.54019021-.58619481.54019021-1.48880519 0-2.075-.25191879-.27487269-.60764873-.43137897-.9805-.43137897s-.72858121.15650628-.9805.43137897l-5.232 5.532c-.54268879.58406274-.54268879 1.48793726 0 2.072l5.227 5.534c.25191879.2748727.60764873.431379.9805.431379s.72858121-.1565063.9805-.431379c.2598547-.2817328.40285194-.6517381.4-1.035"></path>
          </svg>
        </button>
      </div>
    </StyledNavigationCashier>
  );
};

export default NavigationCashier;
