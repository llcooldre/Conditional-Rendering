import React from "react";
import Input from "./input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeHolder="Username" />
      <Input type="password" placeHolder="Password" />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
