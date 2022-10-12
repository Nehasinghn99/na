import Box from "@mui/material/Box";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import Buttons from "../../Components/Buttons/Buttons";
import Chips from "../../Components/Chips/Chips";
import AddIcon from "@mui/icons-material/Add";
import "./DetailsCollector.css";
import Company from "../../assets/Rectangle 431.svg";
import Input from "../../Components/Input/Input";

function CompanyDetails() {
  const [btnshow, setBtnshow] = useState(false);
  return (
    <div>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={10}>
        <Box gridColumn="span 10">
          <p className="DetailsHeading">Details</p>
        </Box>
        <Box gridColumn="span 2">
          <Buttons onClick={() => setBtnshow(true)} label={<CreateIcon />} />
        </Box>
      </Box>

      <Box
        className="CompanyInfo"
        display="grid"
        gridTemplateColumns="repeat(20, 1fr)"
        gap={0}
      >
        <Box gridColumn="span 1">
          <img className="CompanyImg" src={Company} alt="company" />
        </Box>
        <Box gridColumn="span 11">
          <p className="CompanyName">Bristol Hospital and Health</p>
          <p className="Companysite">
            014 | <span className="Site">www.bristolhospital.org</span>
          </p>
        </Box>
      </Box>
      <hr />
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
        <Box gridColumn="span 8">
          <p className="heading">About us</p>

          <p className="text">
            Virginia Premier’s mission is to inspire healthy living within the
            communities we serve, especially those in need. We do this through
            innovation, strategic partnerships, industry-leading healthcare.
            Founded in 1995 as a Medicaid HMO, Virginia Premier is the first and
            only nonprofit managed care organization in the Commonwealth, now
            serving more than 280,000 members statewide by offering Medicare,
            Medicaid, and health insurance exchange plans. We are jointly owned
            by the integrated, not-for-profit health system Sentara Healthcare,
            based in Norfolk, Va., and VCU Health System based in Richmond, Va.
            We are committed to recruiting, employing and retaining individuals
            who share our philosophy of providing the best service to our
            members, providers and community partners. View More
          </p>
        </Box>
        <Box gridColumn="span 4">
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap={0}
            className="flex"
          >
            <p gridColumn="span 1" className="heading">
              Industry
            </p>
            {btnshow ? (
              <Input
                className="detailInput"
                gridColumn="span 1"
                variant="filled"
                label="Insurence"
              />
            ) : (
              <p gridColumn="span 1" className="text">
                Insurence
              </p>
            )}
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap={0}
            className="flex margin"
          >
            <p gridColumn="span 1" className="heading">
              Linkedin URL
            </p>
            <Box gridColumn="span 1">
              {btnshow ? (
                <>
                  <Input
                    className="detailInput"
                    variant="filled"
                    label="https://Linkedinrel.com"
                  />
                  <Input
                    className="detailInput"
                    variant="filled"
                    label="https://Linkedinrel.com"
                  />
                  <Input
                    className="detailInput"
                    variant="filled"
                    label="https://Linkedinrel.com"
                  />
                </>
              ) : (
                <>
                  <p gridColumn="span 1" className="text">
                    https://Linkedinrel.com
                  </p>
                  <p gridColumn="span 1" className="text">
                    https://Linkedinrel.com
                  </p>
                  <p gridColumn="span 1" className="text">
                    https://Linkedinrel.com
                  </p>
                </>
              )}
            </Box>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap={0}
            className="flex margin"
          >
            <p gridColumn="span 1" className="heading">
              Specialities
            </p>

            {btnshow ? (
              <Input
                className="detailInput"
                gridColumn="span 1"
                variant="filled"
                label="Insurence"
              />
            ) : (
              <p gridColumn="span 1" className="text">
                Insurence
              </p>
            )}
          </Box>
        </Box>
      </Box>
      <Box>
        <p style={{ marginTop: "0.8rem" }} className="naics">
          NAICS Code
        </p>
        <hr />
        <Box className="flex">
          {/* <Chips
            label="621491"
            onDelete={btnshow && "handleDelete"}
            color={btnshow ? "default" : "primary"}
          /> */}
          {btnshow && (
            <Chips
              icon={<AddIcon style={{color: "rgba(91, 147, 255, 1)"}}/>}
              label="Add NAICS Code"
              variant="outlined"
              backgroundColor="primary"
              textColor="rgba(91, 147, 255, 1)"
            />
          )}
        </Box>
      </Box>
      {btnshow && (
        <Box className="flex" style={{ marginTop: "15px" }}>
          <Buttons variant="outlined" label="Cancel" />
          <Buttons variant="contained" label="Save" />
        </Box>
      )}
    </div>
  );
}

export default CompanyDetails;
