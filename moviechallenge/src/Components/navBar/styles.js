import styled from "styled-components";
import { colors, mobile } from "../utils/styledHelpers";

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
  @media (max-width: ${mobile}) {
    font-size:20px;
  }
`;

export const TitleContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;

export const Email = styled.h2`
  color: ${colors.white};
  @media (max-width: ${mobile}) {
    font-size:15px;
  }
`;

export const P = styled.p`
  font-weight: 700;
  font-size: 200%;
  margin: 0;
  color: ${colors.white};
`;

export const InfoContainer = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:80%;
@media (max-width: ${mobile}) {
  display:flex;
  flex-direction:column;
  align-items: center;
}
`
export const Img = styled.img`

`
