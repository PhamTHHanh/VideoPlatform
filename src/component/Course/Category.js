import React, { useEffect, useState } from "react";
import Lecture from "./Lecture";

function Category(props) {
  const { contentCourse, onRemove, onChangeCate, addLecture, onRemoveLec, onChangeLec } = props;

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

  return (
    <>
      {contentCourse.map((item, index) => (
        <div
          className="category-item"
          key={index}
          id={`cate_${index}`}
        >
          <div className="category-title">
            <div className="">
              <input
                type="text"
                placeholder="Enter category"
                defaultValue={item.category}
                onChange={(e) => onChangeCate(index, e.target.value)}
              ></input>
              <i
                className="fa-solid fa-caret-up icon-normal text-white"
                onClick={(e) => showHideCategory(index, e)}
              ></i>
            </div>
            <i
              className="fa-solid fa-trash icon-normal text-white"
              onClick={() => onRemove(index)}
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
                lectures={item.lectures}
                cate={index}
                onRemove={onRemoveLec}
                onChange = {onChangeLec}
              />
            </div>
            <div className="add-lecture pt-2" onClick={() => addLecture(index)}>
              <label
                style={{
                  cursor: "pointer",
                }}
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
