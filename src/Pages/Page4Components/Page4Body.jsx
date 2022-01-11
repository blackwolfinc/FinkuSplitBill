import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableComponents } from "../../Components/Global/Table/Table";

import "./Page4Body.scss";
export const Page4Body = () => {
  const [UserSplit, setUserSplit] = useState(
    JSON.parse(window.localStorage.getItem("DataUserSplit"))
  );
  const [UserData, setUserData] = useState(JSON.parse(window.localStorage.DataUser))
  const [ChangeVariable, setChangeVariable] = useState("");
  useEffect(() => {
    
  }, [UserSplit]);



  const HandleChange = (e) => {
    setChangeVariable(e.target.value);
    console.log(ChangeVariable);
  };
  const HandleSubmit = (e) => {
    let Lenght = UserSplit.length 
    let lastData = UserSplit
    
    let HendleSubmitValue = {
      id: "S"+ (Lenght+1),
      "Username": ChangeVariable,
      status: 0,
      "FriendWhit":[UserData.Id],

      "Trans": []
    };

    lastData.push(HendleSubmitValue)
    window.localStorage.removeItem("DataUserSplit")
    window.localStorage.setItem("DataUserSplit" , JSON.stringify(lastData))
    setUserSplit(JSON.parse(window.localStorage.getItem("DataUserSplit")))
    window.location.reload(); 
  };

  return (
    <div className="Page4Body">
      <Grid container>
        <Grid className="InputPage" item md={12}>
            <h1>Input New User </h1>
            <hr />
            <br />
            <h2>Name</h2>
            <input
              onChange={(e) => {
                HandleChange(e);
              }}
              type="text"
            />
            <button onClick={(e) => {
              HandleSubmit(e);
            }} type="submit">Add New Freind List </button>
        
        </Grid>
        <Grid item md={12}>
          <TableComponents Data={UserSplit} />
        </Grid>
      </Grid>
    </div>
  );
};
