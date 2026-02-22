import React from "react";
import { StyleSortByDropdown } from "./styles";

const SortByDropdown = () => {
  return (
    <StyleSortByDropdown>
      <div class="dropdown-container">
        <div class="options-container">
          <div class="option active-option">Popular</div>
          <div class="option">New Releases</div>
          <div class="option">Alphabetical</div>
          <div class="option">Alphabetical Z-A</div>
          <div class="option">Prize Pool</div>
        </div>
      </div>
    </StyleSortByDropdown>
  );
};

export default SortByDropdown;
