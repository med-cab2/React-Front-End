import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

//components
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Cannabis Cab</h1>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/protected">Dashboard</Link>
        <Switch>
          <ProtectedRoute exact path="/protected" />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={Login} />
          <Route component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
