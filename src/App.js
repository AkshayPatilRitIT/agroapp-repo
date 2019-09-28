import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Login,
  Register,
  ForgotPassword,
  OTP,
  Reset
} from "./screens/authentication";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.slim.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="login" component={Login} />
        <Route path="/register" name="register" component={Register} />
        <Route
          path="/forgotpassword"
          name="fogotpass"
          component={ForgotPassword}
        />
        <Route path="/otp" name="otp" component={OTP} />
        <Route path="/reset" name="reset" component={Reset} />
      </Switch>
    </Router>
  );
}

export default App;
