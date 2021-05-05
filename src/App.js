import "./App.css";
import Home from "./components/Home";
import Projects from "./components/projects";
import Contacts from "./components/Contacts";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="header">
        <div>
          <Link to="/">
            <li className="logo">Merr1</li>
          </Link>
        </div>
        <div className="menu">
          <Link to="/about">
            <li className="item">about</li>
          </Link>

          <Link to="/projects">
            <li className="item">projects</li>
          </Link>

          <Link to="contact">
            <li className="item">contact</li>
          </Link>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
