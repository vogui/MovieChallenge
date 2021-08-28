import React from "react";
import { Div  } from "./styles";
import {Puff} from 'react-loading-icons'
import { colors } from "../helpers/styledHelpers";

export default () => {
  return (
    <>
      <Div>
      <Puff stroke={colors.black} />
      </Div>
    </>
  );
};