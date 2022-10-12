import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Chips from "../Chips/Chips";
import "./Cards.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

function Cards(props) {
  return (
    <div>
      <Card className="Cards">
        <Typography variant="h6" noWrap component="div" className="CardsHeader">
          {props.DashboardData.title}
        </Typography>
        <CardContent className="flex CardsFlex">
          <Box className="CardsBox Cardsborder">
            <p className="CardsValue">{props.DashboardData.value1}</p>
            <Chips
              label={props.DashboardData.label1}
              textColor={props.DashboardData.textColor1}
              backgroundColor={props.DashboardData.backgroundColor1}
            />
          </Box>
          <Box className="CardsBox Cardsborder">
            <p className="CardsValue">{props.DashboardData.value2}</p>
            <Chips
              label={props.DashboardData.label2}
              textColor={props.DashboardData.textColor2}
              backgroundColor={props.DashboardData.backgroundColor2}
            />
          </Box>
          <Box className="CardsBox">
            <p className="CardsValue">{props.DashboardData.value3}</p>
            <Chips
              label={props.DashboardData.label3}
              textColor={props.DashboardData.textColor3}
              backgroundColor={props.DashboardData.backgroundColor3}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
