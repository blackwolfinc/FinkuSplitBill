import { FormControl, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import React, { useEffect, useState } from "react";
import "./Scss/TampilanKiri.scss";

export const TampilanKiri = () => {
  let history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");


useEffect(() => {
 
}, [])


// Function 

  const HandleChange = (e) => {
    if (e.target.id === "username") {
      setusername(e.target.value);
    } else {
      setpassword(e.target.value);
    }
    console.log(password);
    console.log(username);
  };

  const HandelSubmit = () => {
    if (username === "admin" && password === "admin") {
      history.push("/Dasboard");
      SetupLocalStorage()
    }
  };

  const SetupLocalStorage =()=>{
    // let LastValue = window.localStorage.getItem('user');
    let Valuehandle = {"User": username , "Pass" : password  }
    window.localStorage.setItem("DataUser" , JSON.stringify(Valuehandle) )
    console.log(window.localStorage.getItem('DataUser'))
  }


  return (
    <div className="TampilanKiri">
      <Grid container className="TampilanKiriBody">
        <form
          onSubmit={() => {
            HandelSubmit();
          }}
        >
          {" "}
          <Grid item md={12}>
            <h2 className="TitleKiri">Finku Split Bill</h2>
            <hr />
          </Grid>
          <Grid item md={12}>
            <h2>Masukan Nama Anda</h2>
            <input
              onChange={(e) => {
                HandleChange(e);
              }}
              id={"username"}
              type="text"
              required
            />
          </Grid>
          <Grid item md={12}>
            <h2>Masukan Password</h2>
            <input
              onChange={(e) => {
                HandleChange(e);
              }}
              id={"password"}
              type="text"
              required
            />
          </Grid>
          <Grid item md={12}>
            <br />
            <button
              onClick={() => {
                HandelSubmit();
              }}
              type={"submit"}
            >
              Login
            </button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};
