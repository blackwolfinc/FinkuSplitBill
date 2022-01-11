import React, { useEffect, useState } from "react";
import "./TampilanPage2Kiri.scss";
import { Grid } from "@material-ui/core";
import ApexChart from "../../Components/Global/Chart/ApexChart";
import trans from "../../Assets/Json/Trans.json"
import Split from "../../Assets/Json/Split.json"
import User from "../../Assets/Json/User.json"
import UserSplit from "../../Assets/Json/UserSplit.json"

export const TampilanPage2Kiri = () => {
    const [userName,setuserName ] = useState("")
    const [DataTrans, setDataTrans] = useState(trans)
    const [SplitData, setSplitData] = useState(Split)
    const [UserData, setUserData] = useState(User)
    const [UserDataSplit, setUserDataSplit] = useState(User)
    const [DataLable, setDataLable] = useState([])



    useEffect(() => {
      // Get Username 
      let User =  JSON.parse(window.localStorage.getItem("DataUser"))
        setuserName(User.User)
        

      // Data Lable 
      HandleLable()
    },[])

    const HandleLable =()=>{
      let LableHandle = []  
      DataTrans.map((Data)=>{
          LableHandle.push(Data.name)
        })
      setDataLable(LableHandle)

    }


  return (
    <div className="Page2KiriContainer">
      <Grid container >
      <ApexChart Data={DataTrans} Lable={DataLable}/>
      </Grid>
    </div>
  );
};


