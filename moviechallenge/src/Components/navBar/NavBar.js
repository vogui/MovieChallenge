import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../auth0/LogoutButton";
import { Nav, ProfileContainer, Title, TitleContainer, Email } from "./styles";

const NavBar = (props) => {
  const { user } = useAuth0();
  return (
    <Nav>
      {props.login ? (
        <ProfileContainer>
          <img src={user.picture} alt={user.name} />
          <Email>{user.name}</Email>
          <Logout />
        </ProfileContainer>
      ) : (
        <TitleContainer>
          <Title>Movies Challenge</Title>
        </TitleContainer>
      )}
    </Nav>
  );
};

export default NavBar;
