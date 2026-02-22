// SidebarOption.js
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ARROW_DOWN } from "../../../assets/images/Arrow-Down.svg";
import { ReactComponent as ARROW_UP } from "../../../assets/images/Arrow-Up.svg";
import { DropdownBtn } from "../../Common/Buttons/DropdownBtn";

const SidebarOption = ({
  icon: Icon,
  text,
  number,
  count,
  hasDropdown = false,
  isOpenedDropdown = false,
  onClickDropdown,
  isActive,
  onClick,
  sidebarUrl,
  isBiggerOption = false,
}) => {
  const handleDropdownClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the Link
    e.stopPropagation(); // Stop event propagation to prevent triggering onClick
    onClickDropdown();
  };

  return (
    <Link to={sidebarUrl}>
      <div
        className={`option-sidebar ${
          isOpenedDropdown ? "opened-dropdown" : ""
        } ${isActive ? "option-active" : ""}`}
        onClick={onClick}
      >
        {Icon && (
          <div
            style={{ color: isBiggerOption ? "#fff" : "" }}
            className={`icon-img ${isActive ? "activated" : ""}`}
          >
            <Icon />
          </div>
        )}
        <span
          style={{ color: isBiggerOption ? "#fff" : "" }}
          className={`info-text ${isActive ? "activated" : ""}`}
        >
          {text}
        </span>
        <div className="numbers-spacer">
          {number && (
            <span className={`info-number ${isActive ? "activated" : ""}`}>
              {number}
            </span>
          )}
          {count && (
            <span className={`count ${isActive ? "activated" : ""}`}>
              {count}
            </span>
          )}
        </div>

        {hasDropdown && (
          <div>
            <DropdownBtn onClick={handleDropdownClick}>
              {isOpenedDropdown ? <ARROW_UP /> : <ARROW_DOWN />}
            </DropdownBtn>
          </div>
        )}
      </div>
    </Link>
  );
};

export default SidebarOption;
