import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

// Importing SVG icons
import { ReactComponent as GEAR } from "../../../../assets/images/Frame (51).svg";
import AccountPageTitle from "../Common/AccountPageTitle";
import { StyleProfile } from "../Profile/styles";

const Settings = () => {
  const [toastMessage, setToastMessage] = useState("");

  const displayToast = (message) => {
    setToastMessage(message);

    // Clear the toast after a delay (e.g., 3000ms or 3 seconds)
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const emailValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const passwordValidationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string().required("New Password is required"),
  });

  const emailFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailValidationSchema,
    onSubmit: (values, { resetForm }) => {
      displayToast("Email changed successfully.");
      resetForm();
    },
  });

  const passwordFormik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: passwordValidationSchema,
    onSubmit: (values, { resetForm }) => {
      displayToast("Password changed successfully.");
      resetForm();
    },
  });

  return (
    <StyleProfile>
      {/* SETTINGS TITLE */}
      <AccountPageTitle icon={GEAR} title="SETTINGS" />

      <div class="section-container">
        <div class="title-status">
          <h3 class="section-title" style={{ margin: "0px" }}>
            Email Address{" "}
          </h3>
          <div
            class="btn-show"
            style={{ marginRight: "auto" }}
            onClick={() => displayToast("More Shown!")}
          >
            Show
          </div>
          <div class="status">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="52px"
              height="52px"
              viewBox="0 0 52 52"
              enable-background="new 0 0 52 52"
              color="currentColor"
              size="16"
              style={{ color: "rgb(94, 98, 111)", marginRight: "8px" }}
            >
              <path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path>
            </svg>
            <div>Unverified</div>
          </div>
        </div>
        <form onSubmit={emailFormik.handleSubmit}>
          <div>
            <label htmlFor="rollbit-field-11414" className="input-label">
              Change Email
            </label>
            <div>
              <div className="input-container">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter new email address"
                  id="rollbit-field-11414"
                  value={emailFormik.values.email}
                  onChange={emailFormik.handleChange}
                />
                <button
                  className="change-button"
                  type="submit"
                  disabled={!emailFormik.values.email}
                  style={{ marginRight: "4px" }}
                >
                  Change
                </button>
              </div>
            </div>
          </div>
          {emailFormik.errors.email && (
            <div className="required">{emailFormik.errors.email}</div>
          )}
          <button class="submit-button" style={{ marginTop: "24px" }}>
            Send verification email
          </button>
        </form>
      </div>

      {/* PASSWORD */}
      <div className="section-container">
        <h3 className="section-title">Change password</h3>
        <form onSubmit={passwordFormik.handleSubmit}>
          <div>
            <label htmlFor="rollbit-field-39860" className="input-label">
              Old Password<span className="required"> *</span>
            </label>
            <div>
              <div className="input-container">
                <input
                  type="password"
                  name="oldPassword"
                  id="rollbit-field-39860"
                  value={passwordFormik.values.oldPassword}
                  onChange={passwordFormik.handleChange}
                  placeholder="********"
                />
              </div>
            </div>
            {passwordFormik.errors.oldPassword && (
              <div className="required">
                {passwordFormik.errors.oldPassword}
              </div>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="rollbit-field-39861" className="input-label">
              New Password<span className="required"> *</span>
            </label>
            <div>
              <div className="input-container">
                <input
                  type="password"
                  name="newPassword"
                  id="rollbit-field-39861"
                  value={passwordFormik.values.newPassword}
                  onChange={passwordFormik.handleChange}
                  placeholder="********"
                />
              </div>
            </div>
            {passwordFormik.errors.newPassword && (
              <div className="required">
                {passwordFormik.errors.newPassword}
              </div>
            )}
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={
              !passwordFormik.values.oldPassword ||
              !passwordFormik.values.newPassword
            }
            style={{ marginTop: "24px" }}
          >
            Change Password
          </button>
        </form>
      </div>

      {/* 2FA */}
      <div className="section-container">
        <div className="title-status">
          <h3 className="section-title" style={{ margin: "0px auto 0px 0px" }}>
            Two-factor Authentication
          </h3>
          <div className="status">
            <svg
              enableBackground="new 0 0 229.5 229.5"
              viewBox="0 0 229.5 229.5"
              xmlns="http://www.w3.org/2000/svg"
              size="15"
              color="#5E626F"
              style={{ marginRight: "8px" }}
            >
              <path d="m214.419 32.12c-.412-2.959-2.541-5.393-5.419-6.193l-92.24-25.652c-1.315-.366-2.704-.366-4.02 0l-92.24 25.652c-2.878.8-5.007 3.233-5.419 6.193-.535 3.847-12.74 94.743 18.565 139.961 31.268 45.164 77.395 56.738 79.343 57.209.579.14 1.169.209 1.761.209s1.182-.07 1.761-.209c1.949-.471 48.076-12.045 79.343-57.209 31.305-45.217 19.1-136.113 18.565-139.961zm-40.186 53.066-62.917 62.917c-1.464 1.464-3.384 2.197-5.303 2.197s-3.839-.732-5.303-2.197l-38.901-38.901c-1.407-1.406-2.197-3.314-2.197-5.303s.791-3.897 2.197-5.303l7.724-7.724c2.929-2.928 7.678-2.929 10.606 0l25.874 25.874 49.89-49.891c1.406-1.407 3.314-2.197 5.303-2.197s3.897.79 5.303 2.197l7.724 7.724c2.929 2.929 2.929 7.678 0 10.607z"></path>
            </svg>
            <span>Disabled</span>
          </div>
        </div>
        <p className="description-text">
          Using two-factor authentication is highly recommended because it
          protects your account with both your password and your phone.
        </p>
        <p className="description-text" style={{ marginBottom: "24px" }}>
          While 2FA is enabled, you will not be able to login via Steam.
        </p>
        <button
          className="submit-button"
          onClick={() => displayToast("Two-Factor Authentication Enabled!")}
        >
          Enable 2FA
        </button>
      </div>

      {/* VERIFY IDENTITY */}
      <div className="section-container">
        <div className="title-status">
          <h3 className="section-title" style={{ margin: "0px auto 0px 0px" }}>
            Verify your identity (KYC)
          </h3>
          <div className="status">
            <svg
              enableBackground="new 0 0 229.5 229.5"
              viewBox="0 0 229.5 229.5"
              xmlns="http://www.w3.org/2000/svg"
              size="15"
              color="#5E626F"
              style={{ marginRight: "8px" }}
            >
              <path d="m214.419 32.12c-.412-2.959-2.541-5.393-5.419-6.193l-92.24-25.652c-1.315-.366-2.704-.366-4.02 0l-92.24 25.652c-2.878.8-5.007 3.233-5.419 6.193-.535 3.847-12.74 94.743 18.565 139.961 31.268 45.164 77.395 56.738 79.343 57.209.579.14 1.169.209 1.761.209s1.182-.07 1.761-.209c1.949-.471 48.076-12.045 79.343-57.209 31.305-45.217 19.1-136.113 18.565-139.961zm-40.186 53.066-62.917 62.917c-1.464 1.464-3.384 2.197-5.303 2.197s-3.839-.732-5.303-2.197l-38.901-38.901c-1.407-1.406-2.197-3.314-2.197-5.303s.791-3.897 2.197-5.303l7.724-7.724c2.929-2.928 7.678-2.929 10.606 0l25.874 25.874 49.89-49.891c1.406-1.407 3.314-2.197 5.303-2.197s3.897.79 5.303 2.197l7.724 7.724c2.929 2.929 2.929 7.678 0 10.607z"></path>
            </svg>
            <span>Unverified</span>
          </div>
        </div>
        <button
          className="submit-button"
          onClick={() => displayToast("Your Identity is Verified!")}
        >
          Verify
        </button>
      </div>

      {/* LOGIN HISTORY */}
      <div className="section-container">
        <div className="title-button">
          <h3 className="section-title" style={{ margin: "0px auto 0px 0px" }}>
            Login History
          </h3>
          <button
            className="change-button"
            onClick={() => displayToast("Login History!")}
          >
            Show
          </button>
        </div>
      </div>

      {/* TIPS */}
      <div className="section-container">
        <div className="title-button">
          <h3 className="section-title" style={{ margin: "0px auto 0px 0px" }}>
            Tips
          </h3>
          <button
            className="change-button"
            onClick={() => displayToast("Tips!")}
          >
            Show
          </button>
        </div>
      </div>
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </StyleProfile>
  );
};

export default Settings;
