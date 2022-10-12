import React from "react";
import Button from "@mui/material/Button";

function Buttons(props) {
  return (
    <div style={{ marginLeft: "0.5rem" }}>
      <Button onClick={props.onClick} variant={props.variant}>
        {props.label}
      </Button>
    </div>
  );
}

export default Buttons;
