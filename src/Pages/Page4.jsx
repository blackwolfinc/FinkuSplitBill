import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Navbar } from "../Components/Global/Navbar/Navbar";
import { TampilanKanan } from "./Page1Components/TampilanKanan";
import { Page4Body } from "./Page4Components/Page4Body";
export const Page4 = () => {
  return (
    <div>
      <Navbar />
      <Page4Body/>
    </div>
  );
};
