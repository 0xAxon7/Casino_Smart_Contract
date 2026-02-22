import React from "react";
import { SearchInput } from "../SearchAndFilters/styles";
import { StyledHeaderCollection } from "./styles";

const HeaderCollection = () => {
  return (
    <StyledHeaderCollection>
      Supported Collections
      <div class="input-style">
        <SearchInput type="text" placeholder={`Search by name`} />
      </div>
    </StyledHeaderCollection>
  );
};

export default HeaderCollection;
