import React from "react";
import {NavLink } from "react-router-dom";
import "./nav.css";
function Nav(){
    return(
         <div className="nav"> 
             <NavLink  to="/about"  exact={true}   className="link">
                    About
                </NavLink >
            
                <NavLink  to="/home" className="link">
                    home
                </NavLink >
             
        </div>   
    )
}
export default Nav;