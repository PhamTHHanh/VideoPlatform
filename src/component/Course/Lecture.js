import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const keys = ["name", "video", "resource", "quiz"]
function Lecture(props) {
  const { lectures, cate, onRemove, onChange } = props;
  
  const videoFile = useRef()
  const resourceFile = useRef()
  const quizFile = useRef()

  const handleSelectFile = (element) => {
    element.current.value = "";
    element.current.click();
  };

  const onChangeFiles = (cate, index, event) => {
    const inputFiles = event.target.files[0];
    const key = event.target.getAttribute('data-key')
    onChange(cate, index, key, inputFiles)
  }

  return (
    <>
      {lectures.map((item, index) => (
        <div className="lecture" key={index}>
          <input
            type="text"
            className="column-8"
            data-key={keys[0]}
            placeholder="Enter lecture name"
            defaultValue={item.name}
            onChange={(e) => onChange(cate, index, e.target.getAttribute('data-key'), e.target.value)}
          ></input>
          <div className="column-3">
            <div className="btn-mini" onClick={() => handleSelectFile(videoFile)}>Upload</div>
            <input
              type="file"
              data-key={keys[1]}
              style={{ display: "none" }}
              accept=".mp4, .mov"
              ref={videoFile}
              onChange={(e) => onChangeFiles(cate, index, e)}
            ></input>
            <span className="course-resource">{item.video ? "1 file" : ""}</span>
          </div>
          <div className="column-3">
            <div className="btn-mini" onClick={() => handleSelectFile(resourceFile)}>Upload</div>
            <input
              type="file"
              data-key={keys[2]}
              style={{ display: "none" }}
              ref={resourceFile}
              onChange={(e) => onChangeFiles(cate, index, e)}
            ></input>
            <span className="course-resource">{item.resource ? "1 file" : ""}</span>
          </div>
          <div className="column-3">
            <div className="btn-mini" onClick={() => handleSelectFile(quizFile)}>Upload</div>
            <input
              type="file"
              data-key={keys[3]}
              style={{ display: "none" }}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              ref={quizFile}
              onChange={(e) => onChangeFiles(cate, index, e)}
            ></input>
            <span className="course-resource">{item.quiz ? "1 file" : ""}</span>
          </div>
          <i
            className="fa-solid fa-xmark column-1"
            style={{ textAlign: "end", cursor: "pointer" }}
            onClick={() => onRemove(cate, index)}
          ></i>
        </div>
      ))}
    </>
  );
}

export default Lecture;
