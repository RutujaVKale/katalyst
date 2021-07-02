import React from 'react'
import "./Navbar.css";
import Grid from "@material-ui/core/Grid";
import portalLogo from "../../Images/images/dp5.png";
import homeLogo from "../../Images/images/business.png";
import profileLogo from "../../Images/images/dp1.png";
import { Avatar } from '@material-ui/core';

const Navbar = ({handleLogout}) => {
    return (
        <div>
           <Grid container className="navbar__main">
                    <Grid item xs={3}>
                          <div className="navbar__left">
                              <img className="navbar__logo" src={portalLogo} width="40px"/>
                              <input className="navbar__search" type="text" placeholder="Search Katalyst Portal"/>
                          </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="navbar__container">
                                <div className="navbar__tabs active" >
                                    <img className="navbar__logo" src={homeLogo} width="35px" height="35px"/>
                                </div>

                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        {/* <span><button onClick={handleLogout}>Logout</button></span> */}
                        <div className="navbar__right">
                          <div className="navbar__righttab">
                               <Avatar className="navbar__profilepic" src={profileLogo}/>
                           <div className="navbar__profilename">Rutuja</div>
                          </div>
                        </div>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Navbar
