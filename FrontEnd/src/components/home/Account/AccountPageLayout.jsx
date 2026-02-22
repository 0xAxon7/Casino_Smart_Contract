import React from "react";
import AccountNavigation from "./Common/AccountNavigation/AccountNavigation";
import { StyleAccountLayout } from "./styles";

const AccountPageLayout = ({ children }) => {
  return (
    <StyleAccountLayout>
      <AccountNavigation />

      {children}
    </StyleAccountLayout>
  );
};

export default AccountPageLayout;
