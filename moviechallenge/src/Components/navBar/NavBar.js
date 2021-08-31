import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MultiButton from '../utils/button'
import { Nav, ProfileContainer, Title, TitleContainer, Email, InfoContainer, Img } from "./styles";
import { texts } from '../utils/assistant'

const NavBar = (props) => {
  const { user, logout } = useAuth0();
  return (
    <Nav>
      {props.login ? (
        <ProfileContainer>
          <Img src={user.picture} alt={user.name} />
          <InfoContainer>
          <Email>{user.name}</Email>
          <MultiButton onClick={logout} type={'logout'} text={texts.Logout}/>
          </InfoContainer>
        </ProfileContainer>
      ) : (
        <TitleContainer>
          <Title>{texts.Title}</Title>
        </TitleContainer>
      )}
    </Nav>
  );
};

export default NavBar;
