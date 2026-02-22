import React from "react";

const AccountPageTitle = ({ icon: Icon, title }) => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Icon
        style={{
          width: "18px",
          height: "18px",
          marginTop: "5px",
          color: "#b1b6c6",
        }}
      />
      <p
        style={{
          width: "122px",
          color: "#fff",
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "26.4px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default AccountPageTitle;
