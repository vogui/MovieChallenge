import styled from "styled-components";
import { colors, mobile} from "./styledHelpers";

export const Select = styled.select`
  width: 30%;
  height: 50px;
  border: 3px solid ${colors.black};
  margin: 0;
  font-size: 20px;
  border-radius: 5px;
  cursor:pointer;
  @media (max-width: ${mobile}) {
    width: 45%;
    margin-top: 10px;
    font-size: 15px;
  }
`;
export const Option = styled.option`
`;
export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  cursor:pointer;
  @media (max-width: ${mobile}) {
    width: 6rem ;
    margin-top: 10px;
  }
  ${(props) =>
    props.type === "logout"
      ? `background: transparent;
       color: ${colors.white};
       border: 5px solid ${colors.white};
       &:hover{
        background: ${colors.turquoise};`
      : 
      `background: transparent;
       color: ${colors.black};
       border: 5px solid ${colors.black};
       &:hover{
        background: ${colors.turquoise};
    `}
  }
`;
export const P = styled.p`
color: ${colors.white};
margin: 0 5px 0 5%;
text-align:center;
@media (max-width: ${mobile}) {
  margin-top:10px;
  margin-left:10px;
}
`
