import styled from "styled-components";
import { colors, mobile } from "../utils/styledHelpers"

export const LoginContainer = styled.div`
  margin-top: 10%;
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  opacity:0.9;
  border: 10px solid ${colors.black};
  border-radius: 10px;
  @media (max-width: ${mobile}) {
    width: 80%;
  }
`;
export const H1 = styled.h1`
  color: ${colors.black};
  font-size:200%;
  text-align: center;
`;
