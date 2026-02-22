import React from "react";
import { toast } from "react-toastify";
import CustomToast from "@/components/CustomToast";

// Custom toast renderer
const renderCustomToast = (type, message) => {
  return React.createElement(CustomToast, { type, message });
};

// Toast utility functions
export const showSuccessToast = (message, timeout) => {
  toast(renderCustomToast("success", message), {
    position: "top-center",
    autoClose: timeout || 1500,
    hideProgressBar: true,
    closeOnClick: false,
    closeButton: false,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    className: "justify-center items-center",
    style: {
      backgroundColor: "transparent",
      color: "black",
      border: "none",
      boxShadow: "none",
    },
  });
};

export const showErrorToast = (message) => {
  toast(renderCustomToast("caution", message), {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: false,
    closeButton: false,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    className: "justify-center items-center",
    style: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
  });
};

export const showInfoToast = (message) => {
  toast(renderCustomToast("success", message), {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: false,
    closeButton: false,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    className: "justify-center items-center",
    style: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
  });
};

export const showWarningToast = (message, timeout) => {
  toast(renderCustomToast("warning", message), {
    position: "top-center",
    autoClose: timeout || 1500,
    hideProgressBar: true,
    closeOnClick: false,
    closeButton: false,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    className: "justify-center items-center",
    style: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
  });
};

// Simple global toast function - defaults to success/info style
export const showToast = (message, type = "success", timeout) => {
  const toastType = type === "error" ? "caution" : type === "warning" ? "warning" : "success";
  toast(renderCustomToast(toastType, message), {
    position: "top-center",
    autoClose: timeout || 1500,
    hideProgressBar: true,
    closeOnClick: false,
    closeButton: false,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    className: "justify-center items-center",
    style: {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
  });
};