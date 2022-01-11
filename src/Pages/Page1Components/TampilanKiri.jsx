

import React, { useEffect, useState } from "react";
import { FormControl, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DataUserJson from "../../Assets/Json/User.json"
import UserSplit from "../../Assets/Json/UserSplit.json"
import Split from "../../Assets/Json/Split.json"
import Trans from "../../Assets/Json/Trans.json"
import "./Scss/TampilanKiri.scss";

export const TampilanKiri = () => {
  let history = useHistory();
  const [DataUser, setDataUser] = useState(DataUserJson)
  const [DataUserSplit, setUserSplit] = useState(UserSplit)
  const [DataSplit, setSplit] = useState(Split)
  const [Datarans, setTrans] = useState(Trans)
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");


useEffect(() => {
 console.log(DataUser)
}, [])


// Function 

  const HandleChange = (e) => {
    if (e.target.id === "username") {
      setusername(e.target.value);
    } else {
      setpassword(e.target.value);
    }
  };

  const HandelSubmit = () => {

      DataUser.map((User)=>{
    
        if (username === User.Username && password === User.Pass) {
          history.push("/Dasboard");
          SetupLocalStorage(User)
        }
      })


  };

  const SetupLocalStorage =(e)=>{
    // let LastValue = window.localStorage.getItem('user');

    let Valuehandle = {"User": username , "Pass" : password  , "Id" :e.id  }
    window.localStorage.setItem("DataUser" , JSON.stringify(Valuehandle) )
    window.localStorage.setItem("DataUserSplit" , JSON.stringify(DataUserSplit) )
    window.localStorage.setItem("DataSplit" , JSON.stringify(DataSplit) )
    window.localStorage.setItem("Trans" , JSON.stringify(Datarans) )
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
