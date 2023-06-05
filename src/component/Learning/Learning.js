import React, { useState, useRef, useEffect } from "react";

function Learning(props) {
  const [questions, setQuestions] = useState([
    {
      question: "",
      multiChoice: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a5: "",
      a6: "",
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: ""
    },
  ]);
  const readFileQuiz = (inputFiles) => {
    let data = null;
    const reader = new FileReader();
    reader.onload = function (e) {
      // console.log(reader.result);
      var array = reader.result.split("\r\n");
      transformQuiz(array);
      console.log(array);
    };

    reader.readAsText(inputFiles);
  };

  const transformQuiz = (results) => {
    let i, j;
    let questions = [];
    for (i = 0; i < results.length; i++) {
      if (i < 2) continue;
      var str_question = results[i].split(";");
      let question = {};
      let ans = 1;

      question["question"] = str_question[0].replace(/ \s+|\"/g, "");
      question["multiChoice"] = str_question[1].trim();
      for (j = 2; j < 8; j++) {
        question[`a${ans}`] = str_question[j].trim();
        question[`c${ans}`] = str_question[j + 6].trim();
        ans++;
      }
      questions.push(question);
    }
    setQuestions(questions);
    //console.log(questions);
  };
  return <></>;
}

export default Learning;
