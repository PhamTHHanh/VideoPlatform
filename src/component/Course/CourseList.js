import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lecture from "./AddCourse/Lecture";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { convertPath } from "../../utils/tools"
import Breadcrumbs from "../../utils/breadcrumbs";
import CourseItem from "./CourseItem";

function CourseList(props) {
  const navigate = useNavigate();
  const navigateToCourseDetail = (e) => {
    let page = convertPath(e.target.textContent)
    navigate(`${page}`);
  };
  useEffect(() => {});

  return (
    <>
      <div className="category-banner">
        <div className="container">
          <div className="left-part">
            <Breadcrumbs />
            <h3>AWS Certificate Training Courses</h3>
            <span style={{ color: "#505050" }}>
              Cloud courses for beginners or experienced, pass AWS certification
            </span>
          </div>
          {/* <div className="right-part">

          </div> */}
        </div>
      </div>
      <div id="content-area" className="bg-color category-page">
        <div className="tab-courselisting">
          <div className="container">
            <div className="course-listing" id="paginationAnchor">
              <div className="list-group">
                <CourseItem navigateToCourseDetail={navigateToCourseDetail}/>
                <CourseItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseList;
