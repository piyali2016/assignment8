import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
 } from "@mui/material"
import { Link } from "react-router-dom";


function Navbar() {


  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
         Logo
        </Typography>
          <div >
            <Link to="/" className='navLink' >
            Home
            </Link>
            
            
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
