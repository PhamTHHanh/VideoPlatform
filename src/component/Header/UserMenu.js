import React from "react";
import { Link } from "react-router-dom";

function UserMenu(props) {
  return (
    <div className="user-block">
        <Link>
        <div className="user-img">
            <div className="custom-avatar" style={{background: "rgb(249, 134, 0)", width: "40px", height: "40px"}}>
                H
            </div>
        </div>
        <i className="fa fa-caret-down"></i>
        </Link>
    </div>
  );
}

export default UserMenu;
