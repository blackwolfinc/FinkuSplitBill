import { FormControl, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import "./Scss/TampilanKiri.scss"

export const TampilanKiri = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")



    const HandleChange = (e)=>{
        if (e.target.id === 'username'){
                setusername(e.target.value)
        }else{
            setpassword(e.target.value)
        }
        console.log(password)
        console.log(username)
    }

    const HandelSubmit =()=>{
        if(username === "admin" && password === "admin"){
            alert("Login")
        }
    
    }

    return (
        <div className='TampilanKiri'>
           
         
            <Grid container className='TampilanKiriBody'>
                <Grid item md={12}>
                  <h2>Finku Split Bill</h2>
                  <hr />
                 
                </Grid>
                <Grid item md={12}>
                    <h2>Masukan Nama Anda</h2>
                    <input onChange={(e)=>{HandleChange(e)}} id={'username'} type="text" />
                </Grid>
                <Grid item md={12}>
                    <h2>Masukan Password</h2>
                    <input onChange={(e)=>{HandleChange(e)}} id={'password'} type="text" />
                </Grid>
           
                <Grid item md={12}>
                <br />
                    <button onClick={()=>{HandelSubmit()}} type={'submit'}>Submit</button>
                </Grid>
            </Grid>
     
        </div>
    )
}
