import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Navbar } from "../Components/Global/Navbar/Navbar";
import { Grid } from "@material-ui/core";
import { TampilanPage2Kanan } from "./Page2Components/TampilanPage2Kanan";
import { TampilanPage2Kiri } from "./Page2Components/TampilanPage2Kiri";
export const Page2 = () => {
  return (
    <div className="">
      <Navbar />
      <Grid container direction="row-reverse">
        <Grid item xs={12} md={8}>
          <TampilanPage2Kanan />
        </Grid>
        <Grid item xs={12} md={3}>
          <TampilanPage2Kiri />
        </Grid>
      </Grid>
    </div>
  );
};
