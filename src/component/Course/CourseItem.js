import React, { useEffect, useRef } from "react";
import courseImage from "../../test/image/fcj.jpeg";

function CourseItem(props) {

  return (
    <div className="list-item">
      <div className="course-img">
        <img className="img-full" src={courseImage}></img>
        {/* <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" /> */}
      </div>
      <div className="item-content">
        <div className="course-details">
          <span className="title" onClick={(e) => props.navigateToCourseDetail(e)}>
            First Cloud Journey
          </span>
          <div className="description">
            <p>
              A series of lectures and hands-on exercises to build your AWS
              knowledge from basic to advanced with detailed step-by-step
              explanations
            </p>
          </div>
          <div className="course-highlights">
            <div>
              <i className="icon fa-solid fa-clock"></i>
              <span>22.5 hours</span>
            </div>
            <div>
              <i className="fa-solid fa-file-lines"></i>
              <span>89 lectures</span>
            </div>
            <div>
              <span>• Beginner</span>
            </div>
          </div>
        </div>
        <div className="review-block">
          <div className="rating-block">
            <div className="stars-group">
              <span>4.5</span>
              <i className="fa-solid fa-star text-yellow"></i>
              <i className="fa-solid fa-star text-yellow"></i>
              <i className="fa-solid fa-star text-yellow"></i>
              <i className="fa-solid fa-star text-yellow"></i>
              <i className="fa-solid fa-star-half-stroke text-yellow"></i>
            </div>
            <div className="total-rating">
              <span>
                (1785 ratings)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
