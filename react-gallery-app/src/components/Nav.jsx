import React from "react";
import PhotoList from "./PhotoList";
import { Route, NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="main-nav">
        <ul>
          <li>
          <NavLink to="/cats">Cats</NavLink>
          </li>
          <li>
          <NavLink to="/dogs">Dogs</NavLink>
          </li>
          <li><NavLink to="/city">City</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav;