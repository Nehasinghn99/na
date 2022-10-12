import { React, useState } from "react";
import "./SideNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Home from "../../Container/Home/Home";
import { Link } from "react-router-dom";
import DetailCollector from "../../Container/DetailCollector/DetailCollector";
import Settings from "../../Container/Settings/Settings";
import Dashboard from "../../Container/Dashboard/Dashboard";

function SideNavbar(props) {
  // const [currentTab, setCurrentTab] = useState("HOME");
  console.log(props.currentTab);

  return (
    <div className="SideNavbar">
      <Link
        onClick={() => props.setCurrentTab("NAICS Classification")}
        className="navtext"
        to="/"
        component={Home}
      >
        <HomeIcon
          color={`${props.currentTab === "NAICS Classification" && "primary"}`}
          className="SideNavbarIcon"
        />
        <p className="SideNavbarText">Home</p>
      </Link>
      <Link
        onClick={() => props.setCurrentTab("Companies Detail Collector")}
        className="navtext"
        to="/DetailCollector"
        component={DetailCollector}
      >
        <CreateNewFolderOutlinedIcon
          color={`${props.currentTab === "Companies Detail Collector" && "primary"}`}
          className={`SideNavbarIcon ${
            props.currentTab === "Companies Detail Collector" && "iconColor"
          }`}
        />
        <p className="SideNavbarText">
          Detail <br /> Collector
        </p>
      </Link>
      <Link
        onClick={() => props.setCurrentTab("Settings")}
        className="navtext"
        to="/Settings"
        component={Settings}
      >
        <SettingsOutlinedIcon
          color={`${props.currentTab === "Settings" && "primary"}`}
          className="SideNavbarIcon"
        />
        <p className="SideNavbarText">Settings</p>
      </Link>
      <Link
        onClick={() => props.setCurrentTab("Dashboard")}
        className="navtext"
        to="/Dashboard"
        component={Dashboard}
      >
        <DashboardOutlinedIcon
          color={`${props.currentTab === "Dashboard" && "primary"}`}
          className="SideNavbarIcon"
        />
        <p className="SideNavbarText">Dashboard</p>
      </Link>
    </div>
  );
}

export default SideNavbar;
