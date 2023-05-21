import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Requirement(props) {
  const { requirements, onRemove, onChange, onClear } = props;
  console.log(requirements)
  const clearInput = (index, e) => {
    console.log(e.target)
    e.target.previousSibling.value = ""
    onClear(index)
  }
  return (
    <>
      {requirements.map((item, index) => (
        <div className="req-item" key={index}>
          <div className="input-req">
            <input
              type="text"
              placeholder="Enter requirement"
              defaultValue={item}
              onChange={(e) => onChange(e.target.value, index)}
            ></input>
            <i className="fa-solid fa-xmark input_clear" onClick={(e) => clearInput(index, e)}></i>
          </div>
          <div className="remove_req" onClick={() => onRemove(index)}>
            Remove
          </div>
        </div>
      ))}
    </>
  );
}

export default Requirement;
