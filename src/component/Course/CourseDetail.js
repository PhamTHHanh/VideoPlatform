import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../utils/breadcrumbs";
import courseImage from "../../test/image/fcj.jpeg";

function CourseDetail(props) {
  const navigate = useNavigate()
  const accessCourse = (e) => {
    //let page = convertPath(e.target.textContent);
    navigate("learn");
  };
  return (
    <>
      <div className="product-banner">
        <div className="container">
          <Breadcrumbs />
          <div className="product-details">
            <div className="course-img">
              <img
                className="img-full"
                src={courseImage}
                title="First Cloud Journey"
              ></img>
            </div>
            <div className="course-content">
              <h1 className="title">First Cloud Journey</h1>
              <div style={{ color: "#505050", marginBottom: "5px" }}>
                A series of lectures and hands-on exercises to build your AWS
                knowledge from basic to advanced with detailed step-by-step
                explanations
              </div>
              <div className="review-block">
                <div className="stars-group">
                  <span>4.5</span>
                  <i className="fa-solid fa-star text-yellow"></i>
                  <i className="fa-solid fa-star text-yellow"></i>
                  <i className="fa-solid fa-star text-yellow"></i>
                  <i className="fa-solid fa-star text-yellow"></i>
                  <i className="fa-solid fa-star-half-stroke text-yellow"></i>
                </div>
                <div className="total-rating">
                  <span>(1785 ratings)</span>
                </div>
              </div>
              <div className="course-highlights">
                <div>
                  <i className="icon fa-solid fa-clock"></i>
                  <span>Last updated 2023-05</span>
                </div>
                <div>
                  <i className="fa-solid fa-globe"></i>
                  <span>English, Vietnamese</span>
                </div>
                <div>
                  <i className="fa-regular fa-user"></i>
                  <span>4020 students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="content-area" className="product-page">
          <div className="two-column">
            <div className="left-section left-new-prod">
              <div className="course-benifit">
                <div className="container">
                  <h2 className="title">What you'll learn</h2>
                  <div className="benefit-group">
                    <div className="benefit-item">
                      <i className="fa-solid fa-check text-yellow"></i>
                      <span style={{ marginLeft: "10px" }}>
                        Full Practice Exam with Explanations included!
                      </span>
                    </div>
                    <div className="benefit-item">
                      <i className="fa-solid fa-check text-yellow"></i>
                      <span style={{ marginLeft: "10px" }}>
                        Secure your entire AWS Cloud using KMS, Encryption SDK,
                        IAM Policies & SSM
                      </span>
                    </div>
                    <div className="benefit-item">
                      <i className="fa-solid fa-check text-yellow"></i>
                      <span style={{ marginLeft: "10px" }}>
                        Write infrastructure as code using AWS CloudFormation
                      </span>
                    </div>
                    <div className="benefit-item">
                      <i className="fa-solid fa-check text-yellow"></i>
                      <span style={{ marginLeft: "10px" }}>
                        Apply the right AWS services for your future real-world
                        AWS projects
                      </span>
                    </div>
                    <div className="benefit-item">
                      <i className="fa-solid fa-check text-yellow"></i>
                      <span style={{ marginLeft: "10px" }}>
                        Implement messaging and integration patterns using AWS
                        SQS, SNS & Kinesis
                      </span>
                    </div>
                    <div className="benefit-item">
                      <i className="fa-solid fa-check text-yellow"></i>
                      <span style={{ marginLeft: "10px" }}>
                        All 700+ slides available as downloadable PDF
                      </span>
                    </div>
                    <div className="benefit-item">
                      <i className="fa-solid fa-check text-yellow"></i>
                      <span style={{ marginLeft: "10px" }}>
                        Master the CLI, SDK and IAM security best practices
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-included">
                <div className="container">
                  <h2 className="title">Course Content</h2>
                  <div className="content_wrapper">
                    <div className="tab_content" style={{ display: "block" }}>
                      <div style={{ marginBottom: "10px", textAlign: "end" }}>
                        <span>7 sections • 202 lectures • </span>
                        <span>
                          <span>21h 57m </span>
                          total length
                        </span>
                      </div>
                      <div className="section-item">
                        <div className="section-title text-gray">
                          <i className="fa-solid fa-chevron-up icon-normal"></i>
                          <span>Introduction</span>
                        </div>
                        <div className="lecture-table">
                          <div className="lecture-item">
                            <i className="fa-brands fa-youtube icon-normal text-yellow"></i>
                            <span>Welcome to the course</span>
                          </div>
                          <div className="lecture-item">
                            <i className="fa-brands fa-youtube icon-normal text-yellow"></i>
                            <span>Why Cloud computing</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-requirement">
                <div className="container">
                  <h2 className="title">Requirements</h2>
                  <ul className="req-list">
                    <li>
                      <i className="fa-solid fa-circle"></i>
                      <span>
                        Basic understanding of computers and networking.
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle"></i>
                      <span>
                        The student will require an AWS account to complete
                        hands on labs sessions.
                      </span>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle"></i>
                      <span>
                        Windows, Linux or Mac PC to complete hands on labs
                        sessions..
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course-requirement">
                <div className="container">
                  <h2 className="title">Description</h2>
                </div>
              </div>
            </div>
            <div className="right-section right-new-prod">
              <div className="buy-box">
                <h6 className="head-txt">This course includes:</h6>
                <ul className="req-list">
                  <li>
                    <i className="fa-brands fa-youtube text-yellow"></i>
                    <span>26.5 hours on-demand video</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-question text-yellow"></i>
                    <span>1 practice test</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-flask text-yellow"></i>
                    <span>20 hands-on labs</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-file text-yellow"></i>
                    <span>13 articles</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-down text-yellow"></i>
                    <span>1 downloadable resource</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-closed-captioning text-yellow"></i>
                    <span>Closed captions</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-clock text-yellow"></i>
                    <span>Full Lifetime Access</span>
                  </li>
                </ul>
                <div className="access-course">
                  <div className="btn-cus" onClick={(e) => accessCourse(e)}>Go to course</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
