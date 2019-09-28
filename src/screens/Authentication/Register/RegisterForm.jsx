import React from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import validationSchema from "./validationSchema";
const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        passfield: "",
        cpass: "",
        mobNumber: ""
      }}
      validationSchema={validationSchema}
      onSubmit={fields => {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
      render={({ handleSubmit }) => (
        <div className="Authentication__register__container">
          <Form onSubmit={handleSubmit}>
            {/* Firstname */}
            <div className="Authentication__register__firstname__block mt-3">
              <div
                htmlFor="firstname"
                className="Authentication__register__field__title"
              >
                First Name
              </div>
              <Field
                type="text"
                className="Authentication__register__field"
                id="firstname"
                name="firstname"
                placeholder="Enter first name"
              />
              <ErrorMessage
                name="firstname"
                className="Authentication__register__error__msg"
                component="div"
              />
            </div>
            {/* Last name */}
            <div className="Authentication__register__lastname__block mt-3">
              <div
                htmlFor="lastname"
                className="Authentication__register__field__title"
              >
                Last Name
              </div>
              <Field
                type="text"
                className="Authentication__register__field"
                id="lastname"
                name="lastname"
                placeholder="Enter last name"
              />
              <ErrorMessage
                name="lastname"
                className="Authentication__register__error__msg"
                component="div"
              />
            </div>
            {/* Mobile Number */}
            <div className="Authentication__register__mob__number__block mt-3">
              <div
                htmlFor="mobNumber"
                className="Authentication__register__field__title"
              >
                Mobile Number
              </div>
              <Field
                type="text"
                className="Authentication__register__field"
                id="mobNumber"
                name="mobNumber"
                placeholder="Enter mobile number"
              />
              <ErrorMessage
                name="mobNumber"
                className="Authentication__register__error__msg"
                component="div"
              />
            </div>

            {/* Password */}
            <div className="Authentication__register__password__block mt-3">
              <div
                htmlFor="password"
                className="Authentication__register__field__title"
              >
                Password
              </div>
              <Field
                type="password"
                className="Authentication__register__field"
                id="passfield"
                name="passfield"
                placeholder="Enter password"
              />
              <ErrorMessage
                name="passfield"
                className="Authentication__register__error__msg"
                component="div"
              />
            </div>

            {/* Confirn password */}
            <div className="Authentication__register__cPass__block mt-3">
              <div
                htmlFor="cpass"
                className="Authentication__register__field__title"
              >
                Confirm Password
              </div>
              <Field
                type="password"
                className="Authentication__register__field"
                id="cpass"
                name="cpass"
                placeholder="Enter password"
              />
              <ErrorMessage
                name="cpass"
                className="Authentication__register__error__msg"
                component="div"
              />
            </div>
            <div className="Authentication__register__submit__btn mt-4 text-center">
              <button
                type="submit"
                className="btn btn-success Authentication__register__btn"
              >
                Sign up
              </button>
              <div className="mt-2">Already register? Sign up</div>
            </div>
          </Form>
        </div>
      )}
    />
  );
};

export default RegisterForm;
