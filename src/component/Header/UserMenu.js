import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function UserMenu(props) {
  return (
    <div className="user-block">
        <a>
        <div className="user-img">
            <div className="custom-avatar" style={{background: "rgb(249, 134, 0)", width: "40px", height: "40px"}}>
                H
            </div>
        </div>
        <i className="fa fa-caret-down"></i>
        </a>
    </div>
  );
}

export default UserMenu;
