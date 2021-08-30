import styled,{ keyframes } from 'styled-components'
import { colors, mobile } from "../utils/styledHelpers";

const rotate = keyframes`
0% {
  transform: scale(0.5);
  transform-origin: 50% 0%;
}
100% {
  transform: scale(1);
  transform-origin: 50% 0%;
}
`
export const Card = styled.div`
  display:flex;
  height:500px;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  width:300px;
  border: 6px solid ${colors.black};
  border-radius:6px;
  margin:3rem;
  background:${colors.white};
  cursor:pointer;
  @media (max-width: ${mobile}) {
    margin:5px;
    width:200px;
    height:250px;
  }
`;

export const Description = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  margin-left:5%;
  margin-right:5%;
  animation: ${rotate}  0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  @media (max-width: ${mobile}) {
    width:90%;
  }
`;


export const MovieContainer = styled.div`
display:flex;
justify-content:center;
flex-wrap: wrap;
height:100%;
margin-top:2.5%;
overflow:auto;
&::-webkit-scrollbar {
  width: 10px;
  @media (max-width: ${mobile}) {
    width: 0;
  }
}
&::-webkit-scrollbar-thumb {
  background: ${colors.black};
  border-radius: 6px;
}
&::-webkit-scrollbar-track {
  background: transparent;
}
&.hidden {
  max-height: 0;
  padding: 0;
  border: none;
  transition: all 0.2s linear;
}
}
`

export const Img = styled.img`
width:90%;
height:80%;
@media (max-width: ${mobile}) {
  margin-top:10px;
}
`
export const P = styled.p`
font-size:20px;
@media (max-width: ${mobile}) {
  font-size:10px;
}
`
