import React, { Component } from "react";

import LoginForm from "./LoginForm";

import { WithLogo } from "../WithLogo";

import "./Login.css";

class Login extends Component {
  render() {
    return (
      <WithLogo>
        <LoginForm />
      </WithLogo>
    );
  }
}

export default Login;
