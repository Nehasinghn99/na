import React, { useState } from "react";
import { Drawer, Box } from "@mui/material";
import Buttons from "../Buttons/Buttons";
import CloseIcon from "@mui/icons-material/Close";
import SideNavbar from "../../comman/SideNavbar/SideNavbar";

function Drawers(props) {

  return (
    <div>
      <Drawer
        anchor={props.anchor}
        open={props.state}
        onClose={() => props.setState(false)}
        onOpen={() => props.setState(true)}
        className=""
      >
        <Box
          style={{
            display: "flex",
            width: "15rem",
            justifyContent: "flex-end",
          }}
        >
          <Buttons
            label={<CloseIcon />}
            onClick={() => props.setState(false)}
          />
        </Box>
        {props.aa}
        {props.content}
      </Drawer>
    </div>
  );
}

export default Drawers;
