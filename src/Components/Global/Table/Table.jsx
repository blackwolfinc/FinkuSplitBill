import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
export const TableComponents = (props) => {
  const [Data, setData] = useState((props.Data ? props.Data : []))
  

  useEffect(() => {


  }, [props])
  return (
    <>
      {" "}
      <h1>Your Friend</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Friend Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Transaction</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.Username}</TableCell>
                <TableCell align="right">{row.Trans}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
