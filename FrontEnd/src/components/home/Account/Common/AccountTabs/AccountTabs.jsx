import React, { useState } from "react";
import { Link } from "react-router-dom";

import { StyleAccountTabs } from "./styles";

const AccountTabs = ({ tabs }) => {
  const [selectedOption, setSelectedOption] = useState(tabs[0].url);

  return (
    <StyleAccountTabs>
      <div class="container-tabs">
        {tabs.map((tab, index) => (
          <Link
            to={tab.url}
            key={index}
            onClick={() => setSelectedOption(tab.url)}
          >
            <div class={`tab ${tab.url === selectedOption ? "active" : ""}`}>
              {tab.label}
            </div>
          </Link>
        ))}
      </div>
    </StyleAccountTabs>
  );
};

export default AccountTabs;
