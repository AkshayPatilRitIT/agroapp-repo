import React, { Component } from "react";
import { WithLogo } from "../WithLogo";

import RegisterForm from "./RegisterForm";

import "./Register.css";
class Register extends Component {
  render() {
    return (
      <WithLogo>
        <RegisterForm />
      </WithLogo>
    );
  }
}

export default Register;
