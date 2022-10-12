import { React, useState } from "react";
import Table from "../../Components/Table/Table";
import { Link } from "@mui/material";
import AddchartTwoToneIcon from '@mui/icons-material/AddchartTwoTone';
import CompanyDetails from "./CompanyDetails";

const column = [
  "Company Id",
  "Company Name",
  "website link",
  "Add Info",
];

const rows = [
  [
    "014",
    "Bristol Hospital and Health",
    <Link href="https://www.google.co.in/" underline="none">
      {"www.bristolhospital.org"}
    </Link>,
    <AddchartTwoToneIcon color="primary" />,
  ],
  [
    "017",
    "Samaritans Purse",
    <Link href="https://www.google.co.in/" underline="none">
      {"www.samaritanspurse.org"}
    </Link>,
    <AddchartTwoToneIcon color="primary" />,
  ],
  [
    "018",
    "David Magen Community Ctr Inc",
    <Link href="https://www.google.co.in/" underline="none">
      {"www.magendavidyeshivah.org"}
    </Link>,
    <AddchartTwoToneIcon color="primary" />,
  ],
  [
    "046",
    "Bon Secours Memorial",
    <Link href="https://www.google.co.in/" underline="none">
      {"www.virginiasportsperformance.com"}
    </Link>,
    <AddchartTwoToneIcon color="primary" />,
  ],
  [
    "068",
    "Permanente Medical Group Inc",
    <Link href="https://www.google.co.in/" underline="none">
      {"www.kaiserpermanente.org"}
    </Link>,
    <AddchartTwoToneIcon color="primary" />,
  ],
  [
    "071",
    "Kapiolani Medical Center",
    <Link href="https://www.google.co.in/" underline="none">
      {"www.hawaiipacifichealth.org"}
    </Link>,
    <AddchartTwoToneIcon color="primary" />,
  ],
  [
    "102",
    "Vhs Rhbilitation Inst Mich Inc",
    <Link href="https://www.google.co.in/" underline="none">
      {"www.dmcmedicalgroup.com"}
    </Link>,
    <AddchartTwoToneIcon color="primary" />,
  ],
];

const indexonclick = 3;

function DetailCollector() {
  const [show, setShow] = useState(false);
  return (
    <div className="table" style={{ margin: "2rem 4rem" }}>
      {!show ? (
        <>
          <p className="tableHeading">Companies Detail Collector</p>
          <Table
            column={column}
            rows={rows}
            show={show}
            setShow={setShow}
            n={indexonclick}
          />
        </>
      ) : (
        <CompanyDetails/>
      )}
    </div>
  );
}

export default DetailCollector;
