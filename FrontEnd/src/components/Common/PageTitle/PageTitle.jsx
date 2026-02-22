import React from "react";
import { StyledPageTitle } from "./styles";

const PageTitle = ({ icon: Icon, title }) => {
  return (
    <StyledPageTitle>
      <Icon />
      {title}
    </StyledPageTitle>
  );
};

export default PageTitle;
