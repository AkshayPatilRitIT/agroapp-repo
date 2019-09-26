import React, { Component } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

import { WithLogo } from "../WithLogo";

import validationSchema from "./validationSchema";
import "./Reset.css";
class Reset extends Component {
  render() {
    return (
      <WithLogo>
        <Formik
          initialValues={{
            verificationValue: "",
            newPass: "",
            confirmPass: ""
          }}
          validationSchema={validationSchema}
          render={({}) => (
            <Form>
              <div className="Athentication__reset__wrapper">
                <div className="Athentication__reset__container">
                  <div className="Athentication__reset__welcome__title text-center">
                    Welcome to the AgroApp
                  </div>
                  <div className="Athentication__reset__subtext text-center mt-3">
                    All set to reset your password. <br />
                    Enter OTP and new password to reset your password.
                  </div>
                  <div className="Athentication__reset__field__block">
                    <div>
                      <div className="Athentication__reset__verification__block mt-3">
                        <div className="Athentication__reset__label">
                          <b>Verification code</b>
                        </div>
                        <Field
                          type="text"
                          className="Athentication__reset__field"
                          name="verificationValue"
                          placeholder="Enter code "
                        />
                        <ErrorMessage
                          name="verificationValue"
                          component="div"
                          className="Athentication__reset__error__msg"
                        />
                      </div>
                      <div className="Athentication__reset__resend__link">
                        Resend OTP?
                      </div>
                      <div className="Athentication__reset__new__pass__block mt-3 ">
                        <div>
                          <b>New password</b>
                        </div>
                        <Field
                          type="text"
                          className="Athentication__reset__field"
                          name="newPass"
                          placeholder="Enter new password"
                        />
                        <ErrorMessage
                          name="newPass"
                          component="div"
                          className="Athentication__reset__error__msg"
                        />
                      </div>
                      <div className="Athentication__reset__confirm__pass__block mt-3">
                        <div>
                          <b>Confirm Password</b>
                        </div>
                        <Field
                          type="text"
                          className="Athentication__reset__field"
                          name="confirmPass"
                          placeholder="Enter confirm password"
                        />
                        <ErrorMessage
                          name="confirmPass"
                          component="div"
                          className="Athentication__reset__error__msg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Athentication__reset__btn__block mt-3 text-center">
                    <button className="btn btn-success Athentication__reset__btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        />
      </WithLogo>
    );
  }
}
export default Reset;
