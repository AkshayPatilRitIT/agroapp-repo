import React from "react";
import {
  Login,
  Register,
  ForgotPassword,
  OTP,
  Reset
} from "./screens/Authentication";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.slim.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

function App() {
  return (
    <div>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <OTP /> */}

      <Reset />
    </div>
  );
}

export default App;
