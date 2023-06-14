import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeRequirement, addReqContent } from "../../../store/reducers/course";

function Requirement_Redux(props) {
  const { onClear } = props;
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);
  // console.log(requirements)

  // Clear content of input
  const clearInput = (index, e) => {
    // console.log(e.target)
    e.target.previousSibling.value = ""
    onClear(index)
  }

  return (
    <>
      {course.requirements && course.requirements.map((item, index) => (
        <div className="req-item" key={index}>
          <div className="input-req">
            <input
              type="text"
              placeholder="Enter requirement"
              defaultValue={item}
              onChange={(e) => dispatch(addReqContent({index: index, value: e.target.value}))}
            ></input>
            <i className="fa-solid fa-xmark input_clear" onClick={(e) => clearInput(index, e)}></i>
          </div>
          <div className="remove_req" onClick={() => dispatch(removeRequirement(index))}>
            Remove
          </div>
        </div>
      ))}
    </>
  );
}

export default Requirement_Redux;
