import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div id="wrapper">
      <header>
        <div className="container">
          <div className="header-left">
            <NavLink
              className="text-logo text-yellow-dark"
              activeclassname="active"
              to="/"
            >
              FCJUniversity
            </NavLink>
            <div className="container">
              <div className="header-left">
                <div className="nav">
                  <div className="dropdown btn-dropdown">
                    <span>Traning Library</span>
                    <i className="fa fa-caret-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                fontSize: "19px",
                padding: "15px",
                cursor: "pointer",
                transition: "0.2s all",
                color: "#1F2430",
              }}
            ></i>
            <div className="login-group">
              <NavLink className="text-black" to="/">Sign in</NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
