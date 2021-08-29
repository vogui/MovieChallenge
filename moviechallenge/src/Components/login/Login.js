import React from "react";
import LoginButton from "../auth0/LoginButton";
import { Div, H1 } from "./styles";

const Login = () => {
  return (
    <Div>
      <H1>Bienvenido a <strong>Ve tu pelicula</strong></H1>
      <LoginButton />
    </Div>
  );
};

export default Login;
