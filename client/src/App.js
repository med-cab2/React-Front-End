import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

//components
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/signup";
import DashBoard from "./components/Dashboard/Dashboard";
import Footer from "./components/footer";
import Nav from "./components/nav-bar";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <ProtectedRoute exact path="/protected" />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={DashBoard} />
          <Route component={Login} />
          <Route component={Signup} />
          <Route component={DashBoard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
