import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// import { Link } from "react-router-dom";

import { WithLogo } from "../WithLogo";

import "./OTP.css";
class OTP extends Component {
  handleClickResend = () => {};
  render() {
    const mobileRegExp = /^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9]+)?)$/;
    return (
      <WithLogo>
        <Formik
          initialValues={{
            otpValue: ""
          }}
          validationSchema={yup.object().shape({
            otpValue: yup
              .string()
              .required("please enter otp")
              .min(4, "Please enter valid otp")
              .max(4, "Please enter valid otp")
              .matches(mobileRegExp, "please check the number format ")
          })}
          render={({}) => (
            <Form>
              <div className="Authentication__otp__wrapper">
                <div className="Authentication__otp__container">
                  <div className="Authentication__otp__welcome__title ">
                    Welcome to the AgroApp
                  </div>
                  <div className="text-center mt-4">
                    We have sent OTP on your registered mobile number.
                    <br />
                    please enter that OTP for verification
                  </div>
                  <div className="Authentication__otp__field__block mt-4">
                    <div>
                      <div>Enter OTP</div>
                      <Field
                        type="text"
                        className="Authentication__otp__field"
                        placeholder="enter 4 degit otp"
                        name="otpValue"
                      />
                      <ErrorMessage
                        name="otpValue"
                        className="Authentication__otp__error__msg"
                        component="div"
                      />
                    </div>
                  </div>
                  <div
                    className="mt-2 text-center"
                    onClick={this.handleClickResend}
                  >
                    Resend OTP?
                  </div>
                  <div className="Authentication__otp__btn__block text-center mt-4">
                    <button type="submit" className="btn btn-success">
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

export default OTP;
