import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import UserMenu from "./UserMenu"

function Navigation(props) {
    const {isLogin} = props
  return (
    <div id="wrapper">
      <header>
        <div className="container">
          <div className="header-left">
            <Link
              className="text-logo text-yellow-dark"
              activeclassname="active"
              to="/"
            >
              FCJUniversity
            </Link>
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
            {!isLogin && (
              <div className="login-group">
                <a className="link-signin" style={{ cursor: "pointer" }}>
                  Sign in
                </a>
                <a
                  className="btn-cus link-signup"
                  style={{ cursor: "pointer" }}
                >
                  Sign up
                </a>
              </div>
            )}
            {isLogin && (
              <div className="user-login-block">
                <UserMenu/>
              </div>
            )}
            {/* <UserMenu/> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
