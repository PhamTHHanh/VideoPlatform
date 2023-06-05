import React from "react";
import Lecture from "./Lecture";
import { useSelector, useDispatch } from "react-redux";
import { setCourseContent, removeCategory, setFileContent } from "../../store/reducers/course";
import { v4 as uuidv4 } from "uuid";
// import {
//   setCourseContent,
//   removeCategory,
// } from "../../../store/reducers/courseContent_reducer";

function Category(props) {
  // const { contentCourse, onRemove, onChangeCate, addLecture, onRemoveLec, onChangeLec } = props;

  const dispatch = useDispatch();
  const courseContent = useSelector((state) => state.course.content);
  const courseFiles = useSelector((state) => state.course.files);

  // Expnad or Collapse category block
  const showHideCategory = (index, e) => {
    const id = `cate_${index}`;
    const element = document.getElementById(id);

    if (element.classList[1]) {
      // Expand
      element.classList.remove("collapsed");
      element.childNodes[1].style.display = "block";
      e.target.classList.remove("icon-down");
      element.childNodes[0].style.borderRadius = null;
    } else {
      // Collapse
      element.classList.toggle("collapsed");
      element.childNodes[1].style.display = "none";
      e.target.classList.toggle("icon-down");
      element.childNodes[0].style.borderRadius = "5px";
    }
  };

  const addNewLecture = (index) => {
    const newLecture = {
      id: uuidv4(),
      name: "",
      video: "",
      resource: "",
      quiz: "",
    };
    const newFiles = {
      video: null,
      resource: null,
      quiz: null,
    }
    let category = courseContent[index]
    let files = courseFiles[index]
    dispatch(setCourseContent({index: index, value: {...category, lectures: [...category.lectures, newLecture]}}));
    dispatch(setFileContent({index: index, value: {...files, lectures: [...files.lectures, newFiles]}}));
  };
  return (
    <>
      {courseContent.map((item, index) => (
        <div className="category-item" key={index} id={`cate_${index}`}>
          <div className="category-title">
            <div className="">
              <input
                type="text"
                placeholder="Enter category"
                defaultValue={item.category}
                onChange={(e) =>
                  dispatch(
                    setCourseContent({index: index, value: {...courseContent[index], category: e.target.value} })
                  )
                }
              ></input>
              <i
                className="fa-solid fa-caret-up icon-normal text-white"
                onClick={(e) => showHideCategory(index, e)}
              ></i>
            </div>
            <i
              className="fa-solid fa-trash icon-normal text-white"
              onClick={() => dispatch(removeCategory(index))}
            ></i>
          </div>
          <div className="lecture-table">
            <div className="table-title">
              <div className="column-8">Lecture</div>
              <div className="column-3">Video</div>
              <div className="column-3">Resource</div>
              <div className="column-3">Quiz</div>
              <div className="column-1"></div>
            </div>
            <div className="table-content">
              <Lecture
                // lectures={item.lectures}
                cate={index}
                // onRemove={onRemoveLec}
                // onChange = {onChangeLec}
              />
            </div>
            <div className="add-lecture pt-2">
              <label
                style={{
                  cursor: "pointer",
                }}
                onClick={() => addNewLecture(index)}
              >
                <i className="fa-solid fa-plus icon-normal"></i> Add lecture
              </label>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Category;
