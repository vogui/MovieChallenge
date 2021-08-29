import styled from "styled-components";
import { colors } from "../helpers/styledHelpers";

export const Card = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  width:30%;
  border: 3px solid ${colors.black};
  margin:3rem;
`;

export const MovieContainer = styled.div`
display:flex;
justify-content:center;
flex-wrap: wrap;
height:100%;
overflow:auto;
`

export const Img = styled.img`
width:90%;
height:80%;
`
