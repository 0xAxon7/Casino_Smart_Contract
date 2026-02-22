import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AppContext } from "../../../../../context/AppContext";
import { ReactComponent as USER_COLORED } from "../../../../../assets/images/Frame (44).svg";
import { ReactComponent as FLOW } from "../../../../../assets/images/Frame (49).svg";
import { ReactComponent as BUGER } from "../../../../../assets/images/Frame (50).svg";
import { ReactComponent as GEAR } from "../../../../../assets/images/Frame (51).svg";
import { ReactComponent as OUT } from "../../../../../assets/images/Frame (52).svg";
import { ReactComponent as MONEY } from "../../../../../assets/images/Frame (53).svg";
import { StyleAccountNavigation } from "./styles";

const links = [
  {
    to: "/account/profile",
    icon: USER_COLORED,
    label: "Profile",
  },
  {
    to: "/account/balances",
    icon: MONEY,
    label: "Balances",
  },
  {
    to: "/account/referrals/codes",
    icon: FLOW,
    label: "Referrals",
  },
  {
    to: "/account/deposits/ALL",
    icon: BUGER,
    label: "Deposits",
  },
  {
    to: "/account/withdrawals/ALL",
    icon: BUGER,
    label: "Withdrawals",
  },
  {
    to: "/account/settings",
    icon: GEAR,
    label: "Settings",
  },
  {
    to: "/",
    icon: OUT,
    label: "Log Out",
  },
];

const AccountNavigation = () => {
  const [selectedOption, setSelectedOption] = useState(links[0].to);
  const { updateLoggedIn } = useContext(AppContext);

  const location = useLocation();

  // Change the selected location also if I change it from Account Dropdown
  useEffect(() => {
    if (location.pathname.includes("/account")) {
      setSelectedOption(location.pathname);
    }
  }, [location]);

  return (
    <StyleAccountNavigation>
      {links.map((button, index) => (
        <Link
          to={button.to}
          key={index}
          onClick={() => {
            setSelectedOption(button.to);
            if (button.label === "Log Out") updateLoggedIn(false);
          }}
        >
          <div
            className={`nav-link ${
              button.to === selectedOption ? "active-link" : ""
            }`}
          >
            <div style={{ display: "flex" }}>
              <button.icon
                className={`nav-icon ${
                  button.to === selectedOption ? "active-icon" : ""
                }`}
              />
              <span
                className={`nav-text ${
                  button.to === selectedOption ? "active" : ""
                }`}
              >
                {button.label}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </StyleAccountNavigation>
  );
};

export default AccountNavigation;
