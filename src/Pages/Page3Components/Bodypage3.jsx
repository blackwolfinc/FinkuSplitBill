import { Grid } from "@material-ui/core";
import React from "react";
import { TableSplit } from "../../Components/Global/Table copy/TableSplit";
import "./BodyPage3.scss"
export const Bodypage3 = () => {
  return (
   
      <Grid container>
        <Grid className="BodyPage3Kiri" item md={6}>
          tes
        </Grid>
        <Grid className="BodyPage3Kanan" item md={6}>
          <TableSplit />
        </Grid>
      </Grid>
   
  );
};
