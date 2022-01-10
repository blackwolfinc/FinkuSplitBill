import React, { useEffect, useState } from "react";
import "./TampilanPage2Kiri.scss";
import { Grid } from "@material-ui/core";
import ApexChart from "../../Components/Global/Chart/ApexChart";

export const TampilanPage2Kiri = () => {
    const [userName,setuserName ] = useState("")



    useEffect(() => {
      // Get Username 
      let User =  JSON.parse(window.localStorage.getItem("DataUser"))
        setuserName(User.User)

    })


  return (
    <div className="Page2KiriContainer">
      <Grid container >
      <ApexChart/>
      </Grid>
    </div>
  );
};
