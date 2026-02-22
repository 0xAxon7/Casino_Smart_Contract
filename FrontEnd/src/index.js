import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <AuthProvider>
      <App />
      <ToastContainer transition={Bounce} />
    </AuthProvider>
  </AppProvider>
);

function sendToGoogleAnalytics({ name, delta, value, id }) {
  // https://developers.google.com/analytics/devguides/collection/ga4
  window.gtag('event', name, {
    value: delta, 
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.

  });
}
reportWebVitals(sendToGoogleAnalytics);
