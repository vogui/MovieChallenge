import styled from "styled-components";
import { colors } from "../helpers/styledHelpers";

export const Nav = styled.nav`
  background: ${colors.black};
`;

export const ProfileContainer = styled.div`
   display:flex;
   align-items: center;
   justify-content: space-between;
   width:100%;
`;

export const Title = styled.h1`
  color: ${colors.white};
`;

export const TitleContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;

export const Email = styled.h2`
  color: ${colors.white};
`;

export const P = styled.p`
  font-weight: 700;
  font-size: 200%;
  margin: 0;
  color: ${colors.white};
`;
