import React from "react";
import { Select } from "./styles";

const Drops = (props) => {
    return(
        <Select
            value={props.value}
            onChange={(e) => {
                const index = e.nativeEvent.target.selectedIndex;
                console.log(index)
                props.handleChange(props.sets, e.nativeEvent.target[index].text)
            }
            }
            style={{ flex: "0 0 60px", width: "auto" }}
        >
            {props.menu.map(m => (
                <option
                    key={m}
                    value={props.value}
                    selected={props.value === m}
                >
                    {m}
                </option>))
            }
        </Select>
    )
};

export default Drops;
