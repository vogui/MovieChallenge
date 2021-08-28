import React from "react";
import LoginButton from "../auth0/LoginButton";
import { Div, H1 } from "./styles";

const Login = () => {
  return (
    <Div>
      <H1>Login</H1>
      <LoginButton />
    </Div>
  );
};

export default Login;
