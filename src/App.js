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
        <div className="logo">Merr1</div>
        <div className="menu">
          <div className="item">
            <Link to="/">Home</Link>
          </div>
          <div className="item">
            <Link to="/about">About</Link>
          </div>
          <div className="item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="item">
            <Link to="/projects">Projects</Link>
          </div>
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
