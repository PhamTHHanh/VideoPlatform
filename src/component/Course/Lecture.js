import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setCourseContent, removeLec, addLectureContent } from "../../../store/reducers/courseContent_reducer";
import {
  removeLec,
  addLectureContent,
  onChangeFile,
} from "../../store/reducers/course";

const keys = ["name", "video", "resource", "quiz"];

function Lecture(props) {
  const { cate} = props;
  const dispatch = useDispatch();
  // const courseContent = useSelector((state) => state.courseContent.list);
  const courseContent = useSelector((state) => state.course.content);

  // Lecture element
  const videoFile = useRef([]);
  const resourceFile = useRef([]);
  const quizFile = useRef([]);

  // useEffect(() => {
  //   let length = courseContent[cate].lectures.length
  //   videoFile.current = videoFile.current.slice(0, length);
  //   resourceFile.current = resourceFile.current.slice(0, length);
  //   quizFile.current = quizFile.current.slice(0, length);
  // }, [courseContent[cate].lectures]);

  // Handle uploading file event
  const handleSelectFile = (element, index) => {
    element.current[index].value = "";
    element.current[index].click();
  };

  // Handle selected file
  const changeFiles = (cate, index, event) => {
    const inputFiles = event.target.files[0];
    // console.log(inputFiles)
    const key = event.target.getAttribute("data-key");
    dispatch(
      addLectureContent({
        indexCate: cate,
        indexLec: index,
        key: key,
        value: inputFiles.name,
      })
    );
    dispatch(
      onChangeFile({
        indexCate: cate,
        indexLec: index,
        key: key,
        value: inputFiles,
      })
    );
    // onChangeFiles(cate, index, key, inputFiles)
  };

  return (
    <>
      {courseContent[cate].lectures.map((item, index) => (
        <div className="lecture" key={index}>
          <input
            type="text"
            className="column-8"
            data-key={keys[0]}
            placeholder="Enter lecture name"
            defaultValue={item.name}
            onChange={(e) =>
              dispatch(
                addLectureContent({
                  indexCate: cate,
                  indexLec: index,
                  key: e.target.getAttribute("data-key"),
                  value: e.target.value,
                })
              )
            }
          ></input>
          <div className="column-3">
            <div
              className="btn-mini"
              onClick={() => handleSelectFile(videoFile, index)}
            >
              Upload
            </div>
            <input
              type="file"
              data-key={keys[1]}
              style={{ display: "none" }}
              accept=".mp4, .mov"
              ref={el => videoFile.current[index] = el}
              onChange={(e) => changeFiles(cate, index, e)}
            ></input>
            <span className="course-resource">
              {item.video ? "1 file" : ""}
            </span>
          </div>
          <div className="column-3">
            <div
              className="btn-mini"
              onClick={() => handleSelectFile(resourceFile, index)}
            >
              Upload
            </div>
            <input
              type="file"
              data-key={keys[2]}
              style={{ display: "none" }}
              ref={el => resourceFile.current[index] = el}
              onChange={(e) => changeFiles(cate, index, e)}
            ></input>
            <span className="course-resource">
              {item.resource ? "1 file" : ""}
            </span>
          </div>
          <div className="column-3">
            <div
              className="btn-mini"
              onClick={() => handleSelectFile(quizFile, index)}
            >
              Upload
            </div>
            <input
              type="file"
              data-key={keys[3]}
              style={{ display: "none" }}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              ref={el => quizFile.current[index] = el}
              onChange={(e) => changeFiles(cate, index, e)}
            ></input>
            <span className="course-resource">{item.quiz ? "1 file" : ""}</span>
          </div>
          <i
            className="fa-solid fa-xmark column-1"
            style={{ textAlign: "end", cursor: "pointer" }}
            onClick={() =>
              dispatch(removeLec({ indexCate: cate, indexLec: index }))
            }
          ></i>
        </div>
      ))}
    </>
  );
}

export default Lecture;
