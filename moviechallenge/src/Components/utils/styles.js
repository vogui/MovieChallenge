import styled from "styled-components";
import { colors } from "../helpers/styledHelpers";

export const Select = styled.select`
  width:100px;
  height:50px;
  border: 3px solid ${colors.black};
  margin:0;
  font-size:20px;
  border-radius:5px;
`;
export const Option = styled.option`
  font-size:20px;
`
