import Box from "@mui/material/Box";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import Buttons from "../../Components/Buttons/Buttons";
import Chips from "../../Components/Chips/Chips";
import AddIcon from "@mui/icons-material/Add";
// import "./Details.css";
//import Details from "../../Components/Detail/Details";
import Company from "../../assets/Rectangle 430.svg";
import CompanyDetails from "./CompanyDetails";

function CompanyDetailsHome() {
  const Data = {
    Company_Name: "Bristol Hospital and Health",
    Company_No: "001",
    Company_Site: "www.verginiapremier.com",
    Img: Company,
    AboutUs:
      "Virginia Premier’s mission is to inspire healthy living within the communities we serve, especially those in need. We do this through innovation, strategic partnerships, industry-leading healthcare.Founded in 1995 as a Medicaid HMO, Virginia Premier is the first and only nonprofit managed care organization in the Commonwealth, now serving more than 280,000 members statewide by offering Medicare, Medicaid, and health insurance exchange plans. We are jointly owned by the integrated, not-for-profit health system Sentara Healthcare, based in Norfolk, Va., and VCU Health System based in Richmond, Va. We are committed to recruiting, employing and retaining individuals who share our philosophy of providing the best service to our members, providers and community partners.",
    Industry: "Insurence",
    Linkedin_URL: ["https://Linkedinrel.com"],
    Specialities: "Health Insurence",
    NAICS_Code: "621491",
  };
  // const [btnshow, setBtnshow] = useState(false);
  return (
    <div>
      <CompanyDetails Data={Data} />
    </div>
  );
}

export default CompanyDetailsHome;
