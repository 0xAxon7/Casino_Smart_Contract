import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { ACCOUNT_DROPDOWN_OPTIONS } from "../../../assets/MockData/mockData";
import { ReactComponent as OUT } from "../../../assets/modelImages/Frame (12).svg";
import { StyledAccountDropdown } from "./styles";

const AccountDropdown = ({ userName }) => {
  const { updateLoggedIn, toggleDropdown } = useContext(AppContext);
  const [dropdownOptions, setDropdownOptions] = useState(
    ACCOUNT_DROPDOWN_OPTIONS
  );

  return (
    <StyledAccountDropdown>
      <p className="hello-text">Hello, {userName}</p>

      {ACCOUNT_DROPDOWN_OPTIONS.map((option, index) => (
        <Link
          className="dropdown-option link"
          to={option.route}
          key={index}
          onClick={() => toggleDropdown("")}
        >
          <option.icon />
          <span>{option.label}</span>
        </Link>
      ))}

      <Link
        className="dropdown-option link"
        to={"/"}
        onClick={() => {
          updateLoggedIn(false);
          toggleDropdown("");
        }}
      >
        <OUT />
        <span>Log Out</span>
      </Link>
    </StyledAccountDropdown>
  );
};

export default AccountDropdown;
