import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Navbar } from "../Components/Global/Navbar/Navbar";
import { Grid } from "@material-ui/core";
import { TampilanKanan } from "./Page1Components/TampilanKanan";
import { TampilanKiri } from "./Page1Components/TampilanKiri";
import "./Page1Components/Page1.scss";

export const Page1 = () => {
  return (
    <div className="page1-Container">
      <Grid container direction="row-reverse">
        <Grid item xs={12} md={4}>
          <TampilanKiri />
        </Grid>
        <Grid item xs={12} md={8}>
          <TampilanKanan />
        </Grid>
      </Grid>
    </div>
  );
};
