import React from "react";
import "./Cards.css";
import { Card, Box, Typography, CardContent } from "@mui/material";

function BarCard(props) {
  return (
    <div>
      <Card className="Cards">
        <Box className="flex BarCardHeading">
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="CardsHeader"
          >
            {props.DashboardData.title}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="CardsHeader"
          >
            {props.DashboardData.no}
          </Typography>
        </Box>

        <CardContent className="flex CardsFlex">
          <Box className="BarCardsBox Cardsborder">
            <p className="BarCardsValue1">
              {props.DashboardData.icon1}
              {props.DashboardData.emotion1}
            </p>
            <p className="BarCardsValue2">{props.DashboardData.value1}</p>
            <p className="BarCardsValue3">{props.DashboardData.value2}</p>
          </Box>
          <Box className="BarCardsBox BarCardsBoxalign">
            <p className="BarCardsValue1">
              {props.DashboardData.emotion2}
              {props.DashboardData.icon2}
            </p>
            <p className="BarCardsValue2">{props.DashboardData.value3}</p>
            <p className="BarCardsValue3">{props.DashboardData.value4}</p>
          </Box>
        </CardContent>
        <div
          style={{
            display: "flex",
            // border: "1px solid",
            alignItem: "center",
            borderRadius: "20px",
            overflow: "hidden",
            height: "15px",
          }}
        >
          <div
            style={{ background: "#EF473C", height: "100%", width: `${props.DashboardData.value1}` }}
          ></div>
          <div
            style={{ background: "#1FCA33", height: "100%", width: `${props.DashboardData.value3}` }}
          ></div>
        </div>
      </Card>
    </div>
  );
}

export default BarCard;