import React from "react";

const SportsSectionTitle = ({ icon, name }) => {
  return (
    <div className="section-title">
      {icon}
      <span className="title">{name}</span>
    </div>
  );
};

export default SportsSectionTitle;
