import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./component/Header/Navigation";
import "./App.css";

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Navigation></Navigation>
      </Router>
    </div>
  );
}

export default App;
