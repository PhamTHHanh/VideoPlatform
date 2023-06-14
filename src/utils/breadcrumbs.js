import React from "react";
import { Link, useLocation } from "react-router-dom";

const path = {
  "course": "Course",
  "all-course": "All courses",
  "first-cloud-journey": "First Cloud Journey"
};
const Breadcrumbs = (props) => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  crumbs.splice(-1)
  // console.log(location)
  return (
    <>
      {crumbs && (
        <ul className="breadcrumbs">
          <li>
            <Link style={{ cursor: "pointer" }} to={"/"}>
              Home
            </Link>
          </li>
          {crumbs.map((crumb) => {
            currentLink += `/${crumb}`
            console.log(crumb)
            return <li key={crumb}>
              <Link style={{ cursor: "pointer" }} to={currentLink}>
                {path[crumb]}
              </Link>
            </li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Breadcrumbs;
