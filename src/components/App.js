import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Home from "./Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;
