import React from "react";

function CreateCourse(props) {
  const Lecture = () => {
    return (
        <div className="lecture">
            <div className="column-9"></div>
            <div className="column-3">Upload</div>
            <div className="column-3">Upload</div>
            <div className="column-3">Upload</div>
            <i class="fa-solid fa-xmark column-1" style={{textAlign: "end"}}></i>
        </div>
    )
  }
  const Category = () => {
    return (
      <div className="category-item">
        <div className="category-title">
          <input type="text" placeHolder="Category"></input>
          <i
            class="fa-solid fa-trash"
            style={{
              padding: "5px",
              cursor: "pointer",
              transition: "0.2s all",
              color: "#FFFBEF",
            }}
          ></i>
        </div>
        <div className="lecture-table">
          <div className="table-title">
            <div className="column-9">Lecture</div>
            <div className="column-3">Video</div>
            <div className="column-3">Resource</div>
            <div className="column-3">Quiz</div>
            <div className="column-1"></div>
          </div>
          <div className="table-content">
            <Lecture/>
          </div>
          <div className="add-lecture">
            <i
              class="fa-solid fa-plus"
              style={{
                padding: "10px",
                cursor: "pointer",
                transition: "0.2s all",
                color: "#1F2430",
                fontSize: "14px",
              }}
            ></i>
            <label>Add lecture</label>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="create-course">
      <div className="course-title">
        <div className="input-box">
          <label>Course title:</label>
          <input type="text" placeHolder="Add title"></input>
        </div>
        <div className="input-box">
          <label>Description:</label>
          <textarea
            type="text"
            className="input-line"
            placeHolder="Add description"
            rows="3"
          ></textarea>
        </div>
        <div className="input-box">
          <label>What you'll learn:</label>
          <textarea
            type="text"
            className="input-line"
            placeHolder="Add benifits"
            rows="3"
          ></textarea>
        </div>
        <div className="input-box">
          <label>Course includes:</label>
          <div className="input-box-group">
            <div className="input-box-haft">
              <label>Practice test: </label>
              <input type="text" placeHolder="Add number of test"></input>
            </div>
            <div className="input-box-haft">
              <label>Hands-on labs: </label>
              <input type="text" placeHolder="Add number of lab"></input>
            </div>
            <div className="input-box-haft">
              <label>Article: </label>
              <input type="text" placeHolder="Add number of article:"></input>
            </div>
            <div className="input-box-haft">
              <label>Coding exercises: </label>
              <input type="text" placeHolder="Add number of exercise"></input>
            </div>
            <div className="input-box-haft">
              <label>Resources: </label>
              <input type="text" placeHolder="Add number of resource"></input>
            </div>
          </div>
        </div>
        <div className="input-box">
          <label>Requirement:</label>
          <textarea type="text" className="input-line" rows="1"></textarea>
        </div>
        <div className="add-req">
          <i
            class="fa-solid fa-plus"
            style={{
              padding: "10px",
              cursor: "pointer",
              transition: "0.2s all",
              color: "#1F2430",
              fontSize: "14px",
            }}
          ></i>
          <label
            style={{
              cursor: "pointer",
            }}
          >
            Add requirement
          </label>
        </div>
      </div>
      <div className="add-category" style={{ paddingBottom: "20px" }}>
        <i
          class="fa-solid fa-folder-plus"
          style={{
            padding: "5px",
            cursor: "pointer",
            transition: "0.2s all",
            color: "#FFB800",
          }}
        ></i>
        <label
          style={{
            cursor: "pointer",
          }}
        >
          Add category
        </label>
      </div>
      <div className="category-group">
        <Category />
      </div>
    </div>
  );
}

export default CreateCourse;
