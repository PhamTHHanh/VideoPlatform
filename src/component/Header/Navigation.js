import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import Breadcrumbs from "../../utils/breadcrumbs";
import { useSelector, useDispatch } from "react-redux";
import { clearNotifications } from "../../store/reducers/notifications";
import { showToast } from '../../utils/tools';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navigation(props) {
  const { isLogin } = props;
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    let { global } = notifications;
    if (notifications && global.error) {
      const msg = global.msg ? global.msg : "Error";
      showToast("ERROR", msg);
      dispatch(clearNotifications());
    }
    if (notifications && global.success) {
      const msg = global.msg ? global.msg : "Good!!";
      showToast("SUCCESS", msg);
      dispatch(clearNotifications());
    }
  }, [notifications]);

  return (
    <div id="wrapper">
      <header>
        <div className="container">
          <div className="header-left">
            <Link
              className="text-logo text-yellow"
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
                <Link className="link-signin" style={{ cursor: "pointer" }}>
                  Sign in
                </Link>
                <Link
                  className="btn-cus link-signup"
                  style={{ cursor: "pointer" }}
                >
                  Sign up
                </Link>
              </div>
            )}
            {isLogin && (
              <div className="user-login-block">
                <UserMenu />
              </div>
            )}
            {/* <UserMenu/> */}
          </div>
        </div>
        {/* <ToastContainer /> */}
      </header>
      {/* <Breadcrumbs/> */}
    </div>
  );
}

export default Navigation;
