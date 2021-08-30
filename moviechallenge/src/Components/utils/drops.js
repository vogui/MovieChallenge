import React from "react";
import { Select, Option, P } from "./styles";
import { texts } from "./assistant";
import { colors } from "./styledHelpers"

const Drops = (props) => {
  return (
    <>
      <P>{props.text}:</P>
      <Select
        value={props.value}
        onChange={(e) => {
          const index = e.nativeEvent.target.selectedIndex;
          props.handleChange(e.nativeEvent.target[index].text, props.movies, props.year);
        }}
      >
        <Option disabled selected style={{backgroundColor:colors.turquoise}} value={props.value}>
          {props.value !== "" ? props.value : texts.Seleccione}
        </Option>
        {props.menu.map((m) => (
          <Option key={m} value={props.value} selected={props.value === m}>
            {m}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default Drops;
