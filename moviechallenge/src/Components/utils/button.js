import React from "react";
import { Button } from "./styles";

const MultiButton = (props) => {
  return (
    <Button
      type={props.type}
      onClick={
        props.type === "logout"
          ? () => props.onClick({ returnTo: window.location.origin })
          : () => props.onClick()
      }
    >
      {props.text}
    </Button>
  );
};

export default MultiButton;
