import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/projects'>
            <Projects />
          </Route>

          <Route path='/testimonial'>
            <Testimonial />
          </Route>

          <Route path='/contact'>
            <Contact/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
