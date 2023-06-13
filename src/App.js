import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./component/Header/Navigation";
import CreateCourse from "./component/Course/CreateCourse";
import CourseList from "./component/Course/CourseList";
import "./App.css";
import "./style/styles.css";
import "./style/custom.css";
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';

import AuthStateApp from "./component/Authentication/AuthStateApp";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/admin/course" element={<CreateCourse />}></Route>
          <Route path="/auth" element={<AuthStateApp />}></Route>
          <Route path="/learn/all-course" element={<CourseList />}></Route>
          {/* <Route path="/learn/:course_name/" element={<Studying />}></Route> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
