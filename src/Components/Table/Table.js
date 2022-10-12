import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

export default function DenseTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [titleText, setTitleText] = useState('');


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = {
    // console.log(props.currentTab)
    // setTitleText(props.currentTab.split(" ").join(""));
    // props.setShow(true)
  }



  return (
    <div>

      <TableContainer component={Paper}>
        <Table
          size="small"
          aria-label="a dense table"
          sx={{
            "& .MuiTableCell-sizeSmall": {
              padding: "14px 0px 14px 14px", // <-- arbitrary value
            },
          }}
        >
          <TableHead>
            <TableRow style={{ background: "#f9f9f9" }}>
              {props.column.map((column) => (
                <TableCell>{column}</TableCell>

                //   <TableRow
                //   style={
                //     index % 2 ? { background: "#f9f9f9" } : { background: "white" }
                //   }
                // >
                //   {props.column.map((column) => (
                //     <TableCell>{column}</TableCell>
                //   ))}
                // </TableRow>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                
                    <TableRow
                  style={
                    index % 2
                      ? { background: " #F2F2F2" }
                      : { background: "white" }
                  }
                  //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {row.map((i, index) => (
                    // <TableCell component="th" scope="row">
                    //   {index === props.n ? (
                    //     <div onClick={() => props.setShow(true)}>{i}</div>
                    //   ) : (
                    //     <div>{i}</div>
                    //   )}
                    // </TableCell>
                    
                    <TableCell
                      onClick={()=>props.setShow(true)}
                      component="th"
                      scope="row"
                    >
                    
                      {i}
                      
                    </TableCell>
                    
                  ))}
                  {/* <Link href="#" underline="hover">
                {'underline="hover"'}
              </Link> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
