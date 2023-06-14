import React from "react";
import Lecture from "./Lecture";
import { useSelector, useDispatch } from "react-redux";
import { setCourseContent, removeSection } from "../../../store/reducers/course";
import { v4 as uuidv4 } from "uuid";

function Section(props) {
  // const { contentCourse, onRemove, onChangeCate, addLecture, onRemoveLec, onChangeLec } = props;
  const {onInitResourceFile, onChangeResourceFile} = props;
  const dispatch = useDispatch();
  const courseContent = useSelector((state) => state.course.content);
  // const courseFiles = useSelector((state) => state.course.files);

  // Expand or Collapse section block
  const showHideSection = (index, e) => {
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
    let section = courseContent[index]
    dispatch(setCourseContent({index: index, value: {...section, lectures: [...section.lectures, newLecture]}}));
    // dispatch(setFileContent({index: index, value: {...files, lectures: [...files.lectures, newFiles]}}));
    onInitResourceFile(index)
  };
  return (
    <>
      {courseContent.map((item, index) => (
        <div className="section-item" key={index} id={`cate_${index}`}>
          <div className="section-title">
            <div className="">
              <input
                type="text"
                placeholder="Enter section"
                defaultValue={item.section}
                onChange={(e) =>
                  dispatch(
                    setCourseContent({index: index, value: {...courseContent[index], section: e.target.value} })
                  )
                }
              ></input>
              <i
                className="fa-solid fa-caret-up icon-normal text-white"
                onClick={(e) => showHideSection(index, e)}
              ></i>
            </div>
            <i
              className="fa-solid fa-trash icon-normal text-white"
              onClick={() => dispatch(removeSection(index))}
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
                sec={index}
                onChange={onChangeResourceFile}
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

export default Section;
