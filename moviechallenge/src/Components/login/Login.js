import React from "react";
import { LoginContainer, H1 } from "./styles";
import { useAuth0 } from '@auth0/auth0-react'
import MultiButton from '../utils/button'
import {texts} from '../utils/assistant'
const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <LoginContainer>
      <H1>{texts.Welcome}</H1>
      <MultiButton type={'login'}  onClick={loginWithRedirect} text={texts.Login} />
    </LoginContainer>
  );
};

export default Login;
