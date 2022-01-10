import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import React from "react";
import "./Navbar.scss";
export const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [NavbarPop, setNavbarPop] = React.useState(false);
  const [userName, setuserName] = React.useState(JSON.parse(window.localStorage.getItem("DataUser")));
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const henldlePop = () => {
    setNavbarPop(!NavbarPop);
  };

  return (
    <div className={classes.root}>
 
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon
              onClick={() => {
                henldlePop();
              }}
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Finku Split Bill
          </Typography>

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle /> 
                {userName.User}
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>

        {NavbarPop ? (
          ""
        ) : (
          <div className="NavbarBackground">
            <Grid container spacing={5}>
              <Grid item xs={12} md={3}>
                <li>
                  <a href="/UserPage">Dasboard</a>
                </li>
              </Grid>
              <Grid item xs={12} md={3}>
                <li>
                  <a href="/UserPage">Add New Friend List</a>
                </li>
              </Grid>

              <Grid item xs={12} md={3}>
                <li>
                  <a href="/SplitPage">Split Bill</a>
                </li>
              </Grid>
              <Grid item xs={12} md={3}>
                <li>
                  <a href="/SplitPage">Log Out</a>
                </li>
              </Grid>
            </Grid>
          </div>
        )}
      </AppBar>
    </div>
  );
};
