import React from "react";
import { LoginContainer, H1 } from "./styles";
import { useAuth0 } from '@auth0/auth0-react'
import MultiButton from '../utils/button'

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <LoginContainer>
      <H1>Bienvenido a <strong>Ve tu película</strong></H1>
      <MultiButton type={'login'}  onClick={loginWithRedirect} text={'Login'} />
    </LoginContainer>
  );
};

export default Login;
