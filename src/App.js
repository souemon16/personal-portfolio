import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>

         <Route path='/about'>
           <About/>
         </Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
