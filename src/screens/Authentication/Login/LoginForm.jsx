import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const mobileRegExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;

const LoginForm = () => {
  return (
    <div className="Athentication__login__wrapper">
      <div className="Athentication__login__container">
        <div className="Athentication__login__form__start">
          <div className="Athentication__login__welcome__line">
            Welcome to the AGROAPP
          </div>
          <Formik
            initialValues={{
              userMobile: "",
              password: ""
            }}
            validationSchema={yup.object().shape({
              userMobile: yup
                .string()
                .min(10, "Please enter valid mobile number")
                .max(10, "Please enter valid mobile number")
                .matches(mobileRegExp, "please check the number format ")
                .required("Please enter your mobile number"),

              password: yup
                .string()
                .min(8, "Please enter minimum 8 digit")
                .required("Password fiels is required")
            })}
          >
            {({ isSubmitting }) => (
              <Form className="Athentication__login__form">
                <div className="Athentication__login__block">
                  <div className="Athentication__login__mobile__number">
                    <div htmlFor="mobileNumber">Mobile number</div>
                    <Field
                      type="text"
                      className="Athentication__login__mobile__field form-control"
                      id="mobileNumber"
                      name="userMobile"
                      placeholder="Enter mobile number"
                    />
                    <ErrorMessage
                      name="userMobile"
                      className="Athentication__login__error__msg"
                      component="div"
                    />
                  </div>
                  <div className="Athentication__login__password">
                    <div htmlFor="password">Password</div>
                    <Field
                      type="password"
                      className="Athentication__login__password__field form-control"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                    />
                    <ErrorMessage
                      name="password"
                      className="Athentication__login__error__msg"
                      component="div"
                    />
                  </div>
                  <div className="Athentication__login__btn text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-success Athentication__login__btn__field"
                    >
                      {" "}
                      Sign In
                    </button>
                    <div className="Athentication__login__register__link">
                      If you don`t have an account, Register
                    </div>

                    <div className="Athentication__login__forgot__link">
                      Forgot password?
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
