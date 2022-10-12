import React from "react";
import Chip from "@mui/material/Chip";

function Chips(props) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
    {console.log(props.textColor)}
    <div style={{ marginLeft: "0.5rem" }}>
      <Chip
        icon={props.icon}
        label={props.label}
        variant={props.variant}
        onDelete={props.onDelete}
        // color={props.color}
        sx={{
          "&": {
            color: props.textColor,
            background: props.backgroundColor,
            fontWeight:600
          }
          
        }}
      />
    </div> 
    </>
  );
}


export default Chips;
