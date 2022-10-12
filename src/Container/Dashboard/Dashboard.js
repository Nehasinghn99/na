import React, { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { Box, Card, Typography } from "@mui/material";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Pie from "../../Components/Chart/Pie";
import Table from "../../Components/Table/Table";
import { Link } from "@mui/material";
import Modals from "../../Components/Modal/Modals";
import "./Dashboard.css";
import BarCard from "../../Components/Cards/BarCard";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import Details from "../../Components/Detail/Details";
import Home from "../Home/Home";


function Dashboard(props) {
  const column = [
    "Code",
    "Industry Title",
  ];

  const rows = [
    [
      "11",
      "Finance and Insurance",
    ],
    [
      "21",
      "Public Administration",
    ],
    [
      "22",
      "Accommodation and Food...",
    ],
    [
      "23",
      "Educational Services",
    ],
    [
      "24",
      "Construction",
    ],
    [
      "11",
      "Finance and Insurance",
    ],
    [
      "22",
      "Accommodation and Food...",
    ],
    [
      "23",
      "Educational Services",
    ],
    [
      "24",
      "Construction",
    ],
  ];
  const modalcolumn = ["NAICS Code", "Name", "Description"];

  const modalrows = [
    [
      "111110",
      "Soybean Farming",
      "This industry comprises establishments primarily engaged in growing soybeans and/or producing soybean seeds.",
    ],
    [
      "111120",
      "Soybean Farming",
      "This industry comprises establishments primarily engaged in growing soybeans and/or producing soybean seeds.",
    ],
    [
      "111130",
      "Soybean Farming",
      "This industry comprises establishments primarily engaged in growing soybeans and/or producing soybean seeds.",
    ],
    [
      "111140",
      "Soybean Farming",
      "This industry comprises establishments primarily engaged in growing soybeans and/or producing soybean seeds.",
    ],
  ];
  const DashboardData1 = {
    title: "Health care 3-digit classifier model",
    value1: "57",
    label1: "f1-score",
    textColor1:"rgba(220, 52, 41, 1)",
    backgroundColor1:" rgba(220, 52, 41, 0.16)",
    value2: "88",
    label2: "Precision",
    textColor2:"rgba(55, 131, 100, 1)",
    backgroundColor2:" rgba(55, 131, 100, 0.16)",
    value3: "57",
    label3: "Recall",
    textColor3:"rgba(44, 93, 134, 1)",
    backgroundColor3:" rgba(44, 93, 134, 0.16)",
  };
  const DashboardData2 = {
    title: "Sector level classification model",
    value1: "57",
    label1: "f1-score",
    textColor1:"rgba(220, 52, 41, 1)",
    backgroundColor1:" rgba(220, 52, 41, 0.16)",
    value2: "88",
    label2: "Precision",
    textColor2:"rgba(55, 131, 100, 1)",
    backgroundColor2:" rgba(55, 131, 100, 0.16)",
    value3: "57",
    label3: "Recall",
    textColor3:"rgba(44, 93, 134, 1)",
    backgroundColor3:" rgba(44, 93, 134, 0.16)",
  };
  const DashboardData = {
    title: "Healthcare category classification model",
    value1: "57",
    label1: "f1-score",
    textColor1:"rgba(220, 52, 41, 1)",
    backgroundColor1:" rgba(220, 52, 41, 0.16)",
    value2: "88",
    label2: "Precision",
    textColor2:"rgba(55, 131, 100, 1)",
    backgroundColor2:" rgba(55, 131, 100, 0.16)",
    value3: "57",
    label3: "Recall",
    textColor3:"rgba(44, 93, 134, 1)",
    backgroundColor3:" rgba(44, 93, 134, 0.16)",
  };
  const DashboardData3 = {
    title: "Number of Feedbacks",
    no: "2346",
    icon1: <SentimentNeutralIcon style={{color: "#EF473C",height:"20px"}}/>,
    icon2: <SentimentSatisfiedAltIcon style={{color: "#1FCA33",height:"20px"}}/>,
    emotion1: "Negative",
    emotion2: "Positive",
    value1: "28%",
    value2: "1678",
    value3: "73%",
    value4: "243"
    }
  const DashboardDropdown = {
    Select1: "Sector 45",
    Select2: "Sector 46",
    Select3: "Sector 47",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const indexonclick = 0;
  const [show, setShow] = useState(false);

  return (
   <>
   <div className="dash-container">
   <div className="dashboard">
      <Box style={{ display: "flex","marginLeft": "-5px"}}>
        <Cards DashboardData={DashboardData} />
        <Cards DashboardData={DashboardData1} />
        <Cards DashboardData={DashboardData2} />
        <div style={{"width":"95%"}}>
        <BarCard  DashboardData={DashboardData3} />
        </div>
      </Box>
      <Box className="flex">
        <Card>
          <Typography
            variant="h5"
            noWrap
            component="div"
            className="DashboardPieName"
          >
            Distribution of companies based <br/> on sectors.
          </Typography>
          <Dropdown DashboardDropdown={DashboardDropdown} />
          <Pie />
        </Card>
        <div style={{width:'96%', height:'2px',marginLeft:'25px'}}>
        <Table 
          column={column}
          rows={rows}
          show={open}
          setShow={setOpen}
          // n={indexonclick}
        />
        </div>
        
      </Box>

      <Modals
        handleClose={handleClose}
        open={open}
        column={modalcolumn}
        rows={modalrows}
      />
    </div>
   </div>
    </>
  );
}

export default Dashboard;
