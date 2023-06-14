import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumbs from "../../../utils/breadcrumbs";
import VideoCus from "../../../utils/Video";
import { Link } from "react-router-dom";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
// import VideoJS from '../../../utils/VideoJS'
// import 'video.js/dist/video-js.css';
import introVideo from "../../../test/video/introVideo.mp4";
import courseImage from "../../../test/image/fcj.jpeg";
// import { setCourseContent, removeLec, addLectureContent } from "../../../store/reducers/courseContent_reducer";

function Lecture(props) {
  return (
    <div className="page home video-page">
      <div id="content-area" className="bg-color">
        <div className="banner-small">
          <div className="container">
            <Link style={{ cursor: "pointer" }} to="/">
              Home
            </Link>
            <h1 className="title">First Cloud Journey</h1>
          </div>
        </div>
        <div className="page-content" style={{ color: "#E8E8E8" }}>
          <div className="container">
            <div className="white-box video-section">
              <div className="left video-block">
                <div className="title">Welcome to the Course</div>
                {/* <Video poster={courseImage}>
                    <source src={introVideo} type="video/webm"></source>
                  </Video> */}
                <div >
                  <VideoCus/>
                </div>
              </div>
              {/* <VideoJS options={videoJSOptions}/> */}
              <div className="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lecture;
