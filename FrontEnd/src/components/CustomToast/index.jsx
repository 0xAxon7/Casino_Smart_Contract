import React from "react";
import warningIcon from "@/assets/icons/warning.svg";
import successIcon from "@/assets/icons/success.svg";
import cautionIcon from "@/assets/icons/caution.svg";

const CustomToast = ({ type, message }) => {
  const getToastStyles = () => {
    switch (type) {
      case "warning":
        return {
          backgroundColor: "#FFFDD0",
          borderColor: "#FFCC00",
          icon: warningIcon,
        };
      case "success":
        return {
          backgroundColor: "#E0FFE0",
          borderColor: "#02D208",
          icon: successIcon,
        };
      case "caution":
        return {
          backgroundColor: "#FFEEEE",
          borderColor: "#FF5154",
          icon: cautionIcon,
        };
      default:
        return {
          backgroundColor: "#E0FFE0",
          borderColor: "#02D208",
          icon: successIcon,
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div
      className="flex items-center gap-2 shadow-sm px-4 py-3 border rounded-full h-11 font-sf"
      style={{
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
        borderWidth: "1px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="flex shrink-0 justify-center items-center rounded-full w-5 h-5"
      >
        <img
          src={styles.icon}
          alt={`${type} icon`}
          className="w-5 h-5"
        />
      </div>
      <span className="flex w-full h-5 font-sf font-semibold text-black text-xs justify-center
       items-center xs:text-base whitespace-nowrap">{message}</span>
    </div>
  );
};

export default CustomToast;
