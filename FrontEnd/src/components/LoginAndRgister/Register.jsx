import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";

//assets
import { AppContext } from "../../context/AppContext";
import { ReactComponent as STEAM } from "../../assets/images/Frame (22).svg";
import { ReactComponent as TWITCH } from "../../assets/images/Frame (23).svg";
import { ReactComponent as METAMASK } from "../../assets/images/Frame (24).svg";
import SocialMediaButton from "../Common/Buttons/SocialMediaButton/SocialMediaButton";

const Login = (props) => {
  const { updateLoggedIn } = useContext(AppContext);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special symbol"
      ),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission (e.g., login request)
      updateLoggedIn(true);
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group spacing-inputs">
            <label htmlFor="username" className="form-label">
              USERNAME <span className="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Username"
            />
            {formik.errors.username && (
              <div className="error-message">{formik.errors.username}</div>
            )}
          </div>

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

          <div class="info-text-container">
            <p class="info-text">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>

          <button type="submit" className="register-button uppercase">
            Register
          </button>
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
