import React, { useEffect, useRef, useState } from "react";
import introVideo from "../test/video/introVideo.mp4";

export const Video = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef();

  const videoHandler = (control) => {
    if (!isPlay) {
      videoRef.current.play();
      setIsPlay(true);
      var vid = document.getElementById("video");
      //setVideoTime(vid.duration);
    } else if (isPlay) {
      videoRef.current.pause();
      setIsPlay(false);
    }
  };

  return (
    <div className="player-component">
      <video ref={videoRef} id="video">
        <source src={introVideo} type="video/webm"></source>
      </video>
      {/* <div className="overlay-video"></div> */}
      <div className="video-control">
        <div className="video-control-1">
          <div className="progress-slider">
            <div class="progress">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="control">
            <div className="control-time">
              <i className="fa-solid fa-play icon-normal text-white"></i>
              <i className="fa-solid fa-rotate-left icon-normal text-white"></i>
              <i className="fa-solid fa-rotate-right icon-normal text-white"></i>
              <div className="progress-display">
                <span>0:03</span>
                <span>/</span>
                <span>08:02</span>
              </div>
            </div>
            <div className="setting">
              <div className="setting-volume">
                <i className="fa-solid fa-volume-low icon-normal text-white"></i>
                <div className="volume-slide">
                  <div
                    className="volume-track"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div className="volume-track-fill"></div>
                    <input
                      min="0"
                      ste0="0.1"
                      type="range"
                      className="volume-input"
                      value="1"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="setting-caption">
                <i className="fa-solid fa-closed-captioning icon-normal text-white"></i>
                <div className="caption-slide">
                  <div className="caption-content">
                    <div className="caption-dropdown">
                      <ul className="caption-list">
                        <li role="menuitemradio" aria-checked="true">
                          <div className="selector">Off</div>
                        </li>
                        <li role="menuitemradio" aria-checked="false">
                          <div className="selector">English</div>
                        </li>
                        <li role="menuitemradio" aria-checked="false">
                          <div className="selector">Vietnamese</div>
                        </li>
                        <li role="menuitemradio" aria-checked="false">
                          <div className="selector">Japanese</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setting-general">
                <i className="fa-solid fa-gear icon-normal text-white"></i>
                <div className="setting-slide">
                  <div className="setting-content">
                    <div className="setting-dropdown">
                      <ul className="setting-list">
                        <li role="none">
                          <ul style={{width: "100%"}}>
                            <li role="menuitemradio" aria-checked="false" style={{padding: "0"}}>
                              <div className="selector">1080p</div>
                            </li>
                            <li role="menuitemradio" aria-checked="false" style={{padding: "0"}}>
                              <div className="selector">720p</div>
                            </li>
                            <li role="menuitemradio" aria-checked="false" style={{padding: "0"}}>
                              <div className="selector">576p</div>
                            </li>
                            <li role="menuitemradio" aria-checked="false" style={{padding: "0"}}>
                              <div className="selector">432p</div>
                            </li>
                            <li role="menuitemradio" aria-checked="true" style={{padding: "0"}}>
                              <div className="selector">360p</div>
                            </li>
                          </ul>
                        </li>
                        <li role="separator"></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-expand icon-normal text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
