import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const RegisterComponent = ({ history }) => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("First Name is Required.")
      .min(1, "First Name is Too Short."),
    last_name: Yup.string()
      .required("Last Name is Required.")
      .min(1, "Last Name is Too Short."),
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: (values) => {
      const newUser = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      };

      

      //if register function succesful, redirect to login page
      // register(newUser).then((res) => {
      //   history.push(`/login`);
      // });
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <div className="form-group">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter your first name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
              />
              {formik.errors.first_name && formik.touched.first_name && (
                <div className="input-feedback">{formik.errors.first_name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter your last name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
              />
              {formik.errors.last_name && formik.touched.last_name && (
                <div className="input-feedback">{formik.errors.last_name}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="input-feedback">{formik.errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="input-feedback">{formik.errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Register!
            </button>
          </form>
          ;
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
