import styled from "styled-components";
import { colors } from "../helpers/styledHelpers";

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  cursor:pointer;
  ${(props) =>
    props.type === "logout"
      ? `background: transparent;
       color: ${colors.white};
       border: 2px solid ${colors.white}`
      : `background: transparent;
       color: ${colors.black};
       border: 2px solid ${colors.black}
    `}
`;
