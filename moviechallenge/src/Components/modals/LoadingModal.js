import React from "react";
import { Div  } from "./styles";
import {Puff} from 'react-loading-icons'
import { colors } from "../utils/styledHelpers"

 const LoadingModal = () => {
  return (
    <>
      <Div>
      <Puff stroke={colors.black} />
      </Div>
    </>
  );
};
export default LoadingModal