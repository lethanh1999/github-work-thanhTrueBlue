import React from "react";
import {Link} from "react-router-dom";
import './App1.css';
function Nav(){
    return(
         <div className="nav"> 
            <button>
                <Link to="/about" className="link">
                    About
                </Link>
            </button>
            <button>
                <Link to="/home" className="link">
                    home
                </Link>
            </button>
        </div>   
    )
}
export default Nav;