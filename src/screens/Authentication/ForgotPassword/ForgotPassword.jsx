import React, { Component, Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { WithLogo } from "../WithLogo";

import "./ForgotPassword.css";
class ForgotPassword extends Component {
  render() {
    const mobileRegExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    return (
      <WithLogo>
        <div className="Athentication__ForgotPassword__wrapper">
          <Formik
            validationSchema={yup.object().shape({
              mobilenum: yup
                .string()
                .min(10, "Please enter valid mobile number")
                .max(10, "Please enter valid mobile number")
                .matches(mobileRegExp, "please check the number format ")
                .required("Please enter your mobile number")
            })}
          >
            {({}) => (
              <div className="Athentication__ForgotPassword__container">
                <div>
                  <div className="Athentication__ForgotPassword__welcome__title text-center">
                    Welcome to the AgroApp
                  </div>
                  <div className="Athentication__ForgotPassword__subline text-center">
                    Forgot password? we will help to reset. <br />
                    Please enter your mobile number with which you have
                    register.
                  </div>
                  <div className="Athentication__ForgotPassword__mobile__number__block mt-4">
                    <div className="Athentication__ForgotPassword__mobile__label">
                      <b> Mobile number </b>
                    </div>
                    <Field
                      type="text"
                      name="mobilenum"
                      className="Athentication__ForgotPassword__mobile__field"
                      placeholder="Enter mobile number"
                    />
                    <ErrorMessage
                      name="mobilenum"
                      className="Athentication__ForgotPassword__error__msg"
                      component="div"
                    />
                  </div>

                  <div className="Athentication__ForgotPassword__subline text-center">
                    We will send OTP to given mobile number
                    <br />
                    Using which you can reset your password
                  </div>
                  <div className="Athentication__ForgotPassword__submit__btn mt-4 text-center">
                    <button
                      type="submit"
                      className="btn btn-success Athentication__ForgotPassword__btn"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </WithLogo>
    );
  }
}

export default ForgotPassword;
