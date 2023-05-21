import React, { useState, useRef, useEffect } from "react";
import { useKeepPositionScroll } from "../../hooks";
import * as update from "immutability-helper";
import Requirement from "./Requirement";
import Category from "./Category";

// const keys = ["title", "des", "benefit", "params", ]
function CreateCourse(props) {
  // const { courseInfo } = props
  const courseTitleEl = useRef();
  const coursePage = useRef();
  const [desCourse, setDesCourse] = useState({
    title: "",
    des: "",
    benefit: "",
    amount_practice: "",
    amount_labs: "",
    amount_article: "",
    amount_exer: "",
    amount_resource: "",
    requirements: []
  })
  const [contentCourse, setContentCourse] = useState([
    {
      category: "",
      lectures: [
        {
          name: "",
          video: "",
          resource: "",
          quiz: "",
        },
      ],
    },
  ]);
  const [courseScroll, setCourseScroll] = useState(0);
  const [pageScroll, setPageScroll] = useState(0);
  // const [courseTitle, setCourseTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [benefit, setBenefit] = useState("");
  // // const [params, setParams] = useState([]);
  // const [amountPrac, setAmountPrac] = useState("");
  // const [amountLab, setAmountLab] = useState("");
  // const [amountArticle, setAmountArticle] = useState("");
  // const [amountExer, setAmountExer] = useState("");
  // const [amountResource, setAmountResource] = useState("");
  // const [requirements, setRequirements] = useState([
  //   // "Basic understanding of computers and networking.",
  //   // "The student will require an AWS account to complete hands on labs sessions.",
  //   // "Windows, Linux or Mac PC to complete hands on labs sessions.",
  // ]);
  // useKeepPositionScroll()
  useEffect(() => {
    // Scroll to bottom when add new requirement
    courseTitleEl.current.scrollTop = courseScroll;
  }, [courseScroll]);

  useEffect(() => {
    if (pageScroll > 0) {
      coursePage.current.scrollIntoView({ behavior: "smooth", block: "end" });
      setPageScroll(0);
    }
  }, [pageScroll]);

  // useEffect(() => {
  //   if ( courseInfo )
  //     setContentCourse( courseInfo )
  // }, []);

  const addNewReq = () => {
    const list = desCourse;
    // const newList = update(list, {requirements: {$push: [""]}})
    setDesCourse({...list, requirements: [...list.requirements, ""]})
    setCourseScroll(courseTitleEl.current.scrollHeight);
  };

  const removeReqEl = (index) => {
    const list = {...desCourse};
    list.requirements.splice(index, 1);
    setDesCourse(list);
  };
  const addReqContent = (value, index) => {
    const list = {...desCourse};
    list.requirements[index] = value;
    setDesCourse(list);
  };

  const clearContent = (index) => {
    let list = {...desCourse};
    list.requirements[index] = "";
    setDesCourse(list)
  }
  const addNewCategory = () => {
    const newCate = {
      category: "",
      lectures: [
        {
          name: "",
          video: "",
          resource: "",
          quiz: "",
        },
      ],
    };
    var list = contentCourse;
    setContentCourse([...list, newCate]);
    setPageScroll(coursePage.current.scrollHeight);
  };

  const removeCategoryEl = (index) => {
    const list = [...contentCourse];
    list.splice(index, 1);
    setContentCourse(list);
  };

  const addNewLecture = (index) => {
    const listCategory = [...contentCourse];
    const newLecture = {
      name: "",
      video: "",
      resource: "",
      quiz: "",
    };
    // console.log(index)
    const newListCategory = update(listCategory, {
      [index]: { lectures: { $push: [newLecture] } },
    });
    setContentCourse(newListCategory);
  };

  const removeLecture = (indexCate, indexLec) => {
    const listCategory = [...contentCourse];
    listCategory[indexCate].lectures.splice(indexLec, 1);
    // const newListCategory = update(listCategory, {[indexCate]: {lectures: {$splice: [[[indexLec], 1]]}}});
    setContentCourse(listCategory);
  };

  const addLectureContent = (indexCate, indexLec, key, value) => {
    const listCategory = [...contentCourse];
    listCategory[indexCate].lectures[indexLec][key] = value;
    console.log(listCategory);
    setContentCourse(listCategory);
  };

  const addCateName = (index, value) => {
    const listCategory = [...contentCourse];
    listCategory[index].category = value;
    console.log(listCategory);
    setContentCourse(listCategory);
  }

  const addCourseDes = () => {

  }
  // const Lecture = () => {
  //   return (
  //     <div className="lecture">
  //       <input
  //         type="text"
  //         className="column-8"
  //         placeholder="Enter lecture name"
  //       ></input>
  //       <div className="column-3">
  //         <div className="btn-mini">Upload</div>
  //         <input
  //           type="file"
  //           style={{ display: "none" }}
  //           webkitdirectory="true"
  //           mozdirectory="true"
  //           directory=""
  //         ></input>
  //       </div>
  //       <div className="column-3">
  //         <div className="btn-mini">Upload</div>
  //         <input
  //           type="file"
  //           style={{ display: "none" }}
  //           webkitdirectory="true"
  //           mozdirectory="true"
  //           directory=""
  //         ></input>
  //       </div>
  //       <div className="column-3">
  //         <div className="btn-mini">Upload</div>
  //         <input
  //           type="file"
  //           style={{ display: "none" }}
  //           webkitdirectory="true"
  //           mozdirectory="true"
  //           directory=""
  //         ></input>
  //       </div>
  //       <i
  //         className="fa-solid fa-xmark column-1"
  //         style={{ textAlign: "end" }}
  //       ></i>
  //     </div>
  //   );
  // };
  // const Category = () => {
  //   return (
  //     <div className="category-item">
  //       <div className="category-title">
  //         <input type="text" placeholder="Category"></input>
  //         <i className="fa-solid fa-trash text-white" style={style}></i>
  //       </div>
  //       <div className="lecture-table">
  //         <div className="table-title">
  //           <div className="column-8">Lecture</div>
  //           <div className="column-3">Video</div>
  //           <div className="column-3">Resource</div>
  //           <div className="column-3">Quiz</div>
  //           <div className="column-1"></div>
  //         </div>
  //         <div className="table-content">
  //           <Lecture />
  //         </div>
  //         <div className="add-lecture pt-3">
  //           <label
  //             style={{
  //               cursor: "pointer",
  //             }}
  //           >
  //             <i className="fa-solid fa-plus" style={style}></i> Add lecture
  //           </label>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="create-course" ref={coursePage}>
      <div className="course-title" ref={courseTitleEl}>
        <div className="input-box">
          <label>Course title:</label>
          <input
            type="text"
            placeholder="Enter title"
            defaultValue={desCourse.title}
            onChange={(e) => setDesCourse({...desCourse, title: e.target.value})}
          ></input>
        </div>
        <div className="input-box">
          <label>Description:</label>
          <textarea
            type="text"
            className="input-line"
            placeholder="Add description"
            rows="3"
            onChange={(e) => setDesCourse({...desCourse, des: e.target.value})}
          ></textarea>
        </div>
        <div className="input-box">
          <label>What you'll learn:</label>
          <textarea
            type="text"
            className="input-line"
            placeholder="Add benefits"
            rows="3"
            onChange={(e) => setDesCourse({...desCourse, benefit: e.target.value})}
          ></textarea>
        </div>
        <div className="input-box">
          <label>Course includes:</label>
          <div className="input-box-group">
            <div className="input-box-haft">
              <label>Practice test: </label>
              <input type="text" placeholder="Add number of test" onChange={(e) => setDesCourse({...desCourse, amount_practice: e.target.value})}></input>
            </div>
            <div className="input-box-haft">
              <label>Hands-on labs: </label>
              <input type="text" placeholder="Add number of lab" onChange={(e) => setDesCourse({...desCourse, amount_labs: e.target.value})}></input>
            </div>
            <div className="input-box-haft">
              <label>Article: </label>
              <input type="text" placeholder="Add number of article" onChange={(e) => setDesCourse({...desCourse, amount_article: e.target.value})}></input>
            </div>
            <div className="input-box-haft">
              <label>Coding exercises: </label>
              <input type="text" placeholder="Add number of exercise" onChange={(e) => setDesCourse({...desCourse, amount_resource: e.target.value})}></input>
            </div>
            <div className="input-box-haft">
              <label>Resources: </label>
              <input type="text" placeholder="Add number of resource" onChange={(e) => setDesCourse({...desCourse, requirements: e.target.value})}></input>
            </div>
          </div>
        </div>
        <div className="input-box">
          <label>Requirement:</label>
          <Requirement
            requirements={desCourse.requirements}
            onRemove={removeReqEl}
            onChange={addReqContent}
            onClear={clearContent}
          ></Requirement>
        </div>
        <div className="add-req">
          <label
            style={{
              cursor: "pointer",
            }}
            onClick={addNewReq}
          >
            <i className="fa-solid fa-plus icon-normal"></i>
            Add requirement
          </label>
        </div>
      </div>
      <div
        className="add-category"
        style={{ paddingBottom: "20px" }}
        onClick={addNewCategory}
      >
        <i className="fa-solid fa-folder-plus icon-normal"></i>
        <label
          style={{
            cursor: "pointer",
          }}
        >
          Add category
        </label>
      </div>
      <div className="category-group">
        <Category
          contentCourse={contentCourse}
          onRemove={removeCategoryEl}
          onChangeCate={addCateName}
          addLecture={addNewLecture}
          onRemoveLec={removeLecture}
          onChangeLec={addLectureContent}
        />
      </div>
    </div>
  );
}

export default CreateCourse;
