import React from "react";
import { Select, Option } from "./styles";

const Drops = (props) => {
    return(
        <Select
            value={props.value}
            onChange={(e) => {
                const index = e.nativeEvent.target.selectedIndex;
                props.handleChange(props.sets, e.nativeEvent.target[index].text)
            }
            }
        >
            {props.menu.map(m => (
                <Option
                    key={m}
                    value={props.value}
                    selected={props.value === m}
                >
                    {m}
                </Option>))
            }
        </Select>
    )
};

export default Drops;
