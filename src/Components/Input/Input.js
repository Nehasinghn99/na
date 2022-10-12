import React from "react";
import TextField from "@mui/material/TextField";
import "./Input.css";

function Input(props) {
  return (
    <div>
      <TextField
          // label="Size"
          className={props.width === "width" ? "input width" : "input"}
          id="standard-size-normal"
           size="small"
          defaultValue={props.label}
          variant={props.variant}
        />
    </div>
  );
}

export default Input;
