import React, { useState, useRef, useEffect } from "react";
import Requirement from "./Requirement";
import Category from "./Category";
// import Loader from "../../utils/loader";
import { useSelector, useDispatch } from "react-redux";
import {
  setCourse,
  addNewCate,
  addNewSetFile,
} from "../../store/reducers/course";
import { postCourse, postFiles } from "../../store/actions/course";

import { v4 as uuidv4 } from "uuid";

function CreateCourse(props) {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);
  const courseContent = useSelector((state) => state.course.content);
  const courseFiles = useSelector((state) => state.course.files);
  const processing = useSelector((state) => state.course.processing);
  const courseTitleEl = useRef();
  const coursePage = useRef();
  const spinner = useRef();
  // const [isSubmit, setIsSubmit] = useState(false);

  // Position of page
  const [courseScroll, setCourseScroll] = useState(0);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => {
    // Scroll to bottom when add new requirement
    if (courseTitleEl.current) {
      courseTitleEl.current.scrollTop = courseScroll;
    }
  }, [courseScroll]);

  useEffect(() => {
    // Scroll to bottom when add new category
    if (pageScroll > 0) {
      coursePage.current.scrollIntoView({ behavior: "smooth", block: "end" });
      setPageScroll(0);
    }
  }, [pageScroll]);

  // Add new a requirement
  const addNewReq = () => {
    dispatch(
      setCourse({ ...course, requirements: [...course.requirements, ""] })
    );
    setCourseScroll(courseTitleEl.current.scrollHeight);
  };

  const addNewCategory = () => {
    const newCate = {
      id: uuidv4(),
      category: "",
      lectures: [
        {
          id: uuidv4(),
          name: "",
          video: null,
          resource: null,
          quiz: null,
        },
      ],
    };
    const newSetFile = {
      lectures: [{ video: null, resource: null, quiz: null }],
    };

    dispatch(addNewCate(newCate));
    dispatch(addNewSetFile(newSetFile));
    setPageScroll(coursePage.current.scrollHeight);
  };

  const addBenefit = (event) => {
    const arrayBenefit = event.target.value.split("\n");
    dispatch(setCourse({ ...course, benefit: arrayBenefit }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // spinner.current.classList.remove("visually-hidden");

    // upload files to s3 by amplify
    dispatch(postFiles(courseFiles));

    // write data to DynamoDB
    const course_id = uuidv4();
    const updateCourse = { ...course };
    updateCourse.id = course_id;
    const data = {
      course: updateCourse,
      content: courseContent,
    };
    dispatch(postCourse(data));
    dispatch(setCourse({ ...course, id: course_id }));
  };

  return (
    <div className="create-course" ref={coursePage}>
      <div className="course-title" ref={courseTitleEl}>
        <div className="input-box">
          <label>Course title:</label>
          <input
            type="text"
            placeholder="Enter title"
            defaultValue={course.title}
            onChange={(e) =>
              dispatch(setCourse({ ...course, title: e.target.value }))
            }
          ></input>
        </div>
        <div className="input-box">
          <label>Description:</label>
          <textarea
            type="text"
            className="input-line"
            placeholder="Add description"
            rows="3"
            onChange={(e) =>
              dispatch(setCourse({ ...course, des: e.target.value }))
            }
          ></textarea>
        </div>
        <div className="input-box">
          <label>What you'll learn:</label>
          <textarea
            type="text"
            className="input-line"
            placeholder="Add benefits"
            rows="3"
            onChange={(e) => addBenefit(e)}
          ></textarea>
        </div>
        <div className="input-box">
          <label>Course includes:</label>
          <div className="input-box-group">
            <div className="input-box-haft">
              <label>Practice test: </label>
              <input
                type="text"
                placeholder="Add number of test"
                onChange={(e) =>
                  dispatch(
                    setCourse({ ...course, amount_practice: e.target.value })
                  )
                }
              ></input>
            </div>
            <div className="input-box-haft">
              <label>Hands-on labs: </label>
              <input
                type="text"
                placeholder="Add number of lab"
                onChange={(e) =>
                  dispatch(
                    setCourse({ ...course, amount_labs: e.target.value })
                  )
                }
              ></input>
            </div>
            <div className="input-box-haft">
              <label>Article: </label>
              <input
                type="text"
                placeholder="Add number of article"
                onChange={(e) =>
                  dispatch(
                    setCourse({ ...course, amount_article: e.target.value })
                  )
                }
              ></input>
            </div>
            <div className="input-box-haft">
              <label>Coding exercises: </label>
              <input
                type="text"
                placeholder="Add number of exercise"
                onChange={(e) =>
                  dispatch(
                    setCourse({ ...course, amount_exer: e.target.value })
                  )
                }
              ></input>
            </div>
            <div className="input-box-haft">
              <label>Resources: </label>
              <input
                type="text"
                placeholder="Add number of resource"
                onChange={(e) =>
                  dispatch(
                    setCourse({ ...course, amount_resource: e.target.value })
                  )
                }
              ></input>
            </div>
          </div>
        </div>
        <div className="input-box">
          <label>Requirement:</label>
          <Requirement />
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
      <div className="course-body">
        <div className="add-category" onClick={addNewCategory}>
          <i className="fa-solid fa-folder-plus icon-normal"></i>
          <label
            style={{
              cursor: "pointer",
            }}
          >
            Add category
          </label>
        </div>
        <div className="submit-group">
          <div className="btn-cancle">Cancle</div>
          <div className="btn-cus btn-save" onClick={(e) => onSubmit(e)}>
            {processing && <div className="spinner-border spinner-border-sm me-2" ref={spinner} role="status"></div>}
            <span>Save course</span>
          </div>
        </div>
      </div>
      <div className="category-group">
        <Category />
      </div>
    </div>
  );
}

export default CreateCourse;
