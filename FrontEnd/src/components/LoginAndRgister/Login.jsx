import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from "yup";

//assets
import { AppContext } from "../../context/AppContext";
import { ReactComponent as STEAM } from "../../assets/images/Frame (22).svg";
import { ReactComponent as TWITCH } from "../../assets/images/Frame (23).svg";
import { ReactComponent as METAMASK } from "../../assets/images/Frame (24).svg";
import TringleButton from "../../assets/images/Vector.png";
import SocialMediaButton from "../Common/Buttons/SocialMediaButton/SocialMediaButton";
import { useAuth } from "@/context/AuthContext";
import { showErrorToast } from "@/utils/toastUtils";

const Login = (props) => {
  const { signIn } = useAuth();
  const { updateLoggedIn } = useContext(AppContext);

  const [FaCodeInput, setFaCodeInput] = useState(false);
  const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setError(null); // Clear previous errors
        // Handle form submission (e.g., login request)
        await signIn(values.email, values.password);
        updateLoggedIn(true);
      } catch (error) {
        console.error("Login failed:", error);
        // Set error message to display in UI
        setError(error.message || "Login failed. Please check your credentials.");
        showErrorToast(error.message || "Login failed. Please check your credentials.");
        // Re-enable form submission on error
        formik.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group spacing-inputs">
            <label htmlFor="email" className="form-label">
              EMAIL <span className="required">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-input"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="youremail@domain.com"
            />
            {formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group spacing-inputs">
            <label htmlFor="password" className="form-label">
              PASSWORD <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="********"
              autoComplete="on"
            />

            <span
              style={{
                color: "#B1B6C6",
                fontSize: "13px",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              Forget Password?
            </span>
            {formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}
          </div>

          {/* Display login error message
          {error && (
            <div className="error-message" style={{ marginTop: "10px", marginBottom: "10px" }}>
              {error}
            </div>
          )} */}

          <div className="form-group">
            <div
              class="toggle-fa-code-input"
              onClick={() => setFaCodeInput(true)}
            >
              <span class="toggle-fa-code-text">2FA CODE</span>
              {FaCodeInput ? null : (
                <img
                  class="toggle-fa-code-image"
                  src={TringleButton}
                  alt="triangle-btn"
                />
              )}
            </div>

            {FaCodeInput ? (
              <input type="text" class="fa-code-input" placeholder="Code" />
            ) : null}

            {FaCodeInput ? (
              <span class="required-message">
                Required if you enabled two-factor authentication
              </span>
            ) : null}
          </div>

          <div class="info-text-container">
            <p class="info-text">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>

          <button
            type="submit"
            className="register-button uppercase"
            disabled={formik.isSubmitting}
            style={{
              opacity: formik.isSubmitting ? 0.7 : 1,
              cursor: formik.isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              position: 'relative'
            }}
          >
            {formik.isSubmitting ? (
              <>
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgb(20, 23, 34)',
                    borderTop: '2px solid rgba(20, 23, 34, 0.2)',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }}
                />
                <span>Logging in...</span>
              </>
            ) : (
              'Login'
            )}
          </button>
          <style>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </form>
      </div>

      <span
        style={{
          fontSize: "15px",
          justifyContent: "center",
          color: "#B1B6C6",
          width: "100%",
          display: "flex",
        }}
      >
        Or continue with
      </span>
      <div className="social-media-container">
        <SocialMediaButton socialIcon={STEAM} socialName={"Steam"} />
        <SocialMediaButton socialIcon={TWITCH} socialName={"Twitch"} />
        <SocialMediaButton socialIcon={METAMASK} socialName={"Metamask"} />
      </div>
    </>
  );
};

export default Login;
