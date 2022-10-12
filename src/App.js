import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./comman/Header/Header";
import SideNavbar from "./comman/SideNavbar/SideNavbar";
import Home from "./Container/Home/Home";
import DetailCollector from "./Container/DetailCollector/DetailCollector";
import Settings from "./Container/Settings/Settings";
import Dashboard from "./Container/Dashboard/Dashboard";
import DetailsHome from "./Container/Home/DetailsHome";
function App() {

  const [currentTab, setCurrentTab] = useState("NAICS Classification");


  return (
    <div className="">
      <Header currentTab={currentTab}/>
      <Router>
        <div style={{ display: "flex" }}>
          <SideNavbar currentTab={currentTab} setCurrentTab={setCurrentTab}/>
          <Routes>
            <Route path="/" element={<Home currentTab={currentTab}/>} />
            <Route path="/DetailCollector" element={<DetailCollector currentTab={currentTab}/> } />
            <Route path="/Settings" element={<Settings/> } />
            <Route path="/Dashboard" element={<Dashboard/> } />
            <Route path="/:id/Details" element={<DetailsHome/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
