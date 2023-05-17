import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./component/Header/Navigation";
import CreateCourse from "./component/Course/CreateCourse";
import "./App.css";
import "./style/styles.css";
import "./style/custom.css";

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<CreateCourse />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
