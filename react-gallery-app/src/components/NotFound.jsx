import React from "react";
import { NavLink } from "react-router-dom";

//displays an error message for routes that are not found
function NotFound () {
  return(
    <div>
     <h1>Sorry this page doesn't exist. Please check the URL</h1>
     <p><NavLink to="/">Return to homepage</NavLink></p>
    </div>
  )
}

export default NotFound;