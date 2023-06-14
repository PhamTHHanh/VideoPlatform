import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./component/Header/Navigation";
import MainLayout from "./hoc/mainLayout";
import CreateCourse from "./component/Course/AddCourse/CreateCourse";
import CourseList from "./component/Course/CourseList";
import CourseDetail from "./component/Course/CourseDetail";
import Lecture from "./component/Course/Learn/Lecture"
import "./App.css";
import "./style/styles.css";
import "./style/custom.css";
import { Amplify, Storage } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Navigation />
        <MainLayout>
          <Routes>
            <Route path="/admin/create-course" element={<CreateCourse />}></Route>
            <Route path="/course" element={<CourseList />}></Route>
            <Route path="/course/:name" element={<CourseDetail />}></Route>
            {/* <Route path="/learn/:course_name/" element={<Studying />}></Route> */}
            <Route path="course/:name/learn" element={<Lecture />}></Route>
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
