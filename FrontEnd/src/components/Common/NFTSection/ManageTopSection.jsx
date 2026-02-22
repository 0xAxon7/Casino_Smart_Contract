import React from "react";
import { StyledTopSection } from "./styles";

const InfoSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    size="14"
    color="hsl(225.70000000000005, 15.6%, 58.8%)"
  >
    <path
      d="M2.313 2.313A7.896 7.896 0 1 0 13.48 13.479 7.896 7.896 0 0 0 2.312 2.313zm5.9 1c.666 0 1.2.55 1.2 1.216a1.22 1.22 0 0 1-1.2 1.217c-.667 0-1.217-.55-1.217-1.234 0-.666.55-1.2 1.216-1.2zm1.716 8.15a.79.79 0 0 1-.167.283c-.433.45-.966.716-1.6.716-.3 0-.583 0-.883-.05-.483-.066-1.1-.666-1.017-1.3l.2-1.3c.134-.75.267-1.516.4-2.266 0-.05.017-.1.017-.15 0-.317-.1-.433-.416-.467-.134-.017-.267-.033-.4-.066-.15-.05-.234-.184-.217-.3.016-.134.1-.217.267-.25.083-.017.183-.017.283-.017h2.3c.283 0 .45.133.45.417 0 .233-.034.466-.084.7-.15.866-.316 1.716-.466 2.583-.05.283-.117.566-.150.85-.017.133 0 .283.033.416.05.184.184.284.367.267.15-.017.3-.066.45-.133.117-.05.216-.134.333-.167.2-.066.35.05.3.234z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const ManageTopSection = ({ data }) => {
  return (
    <StyledTopSection>
      <div className="content-container">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="name">{item.name}</div>
            <div className="value">{item.value}</div>
            {item.showInfo && <InfoSvg />}
          </div>
        ))}
      </div>
    </StyledTopSection>
  );
};

export default ManageTopSection;
