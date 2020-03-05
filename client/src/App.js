import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StrainContext from "./contexts/StrainContext";
import data from "./dummyData";

import "./App.css";

//components
import Login from "./components/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/signup";
import DashBoard from "./components/Dashboard/Dashboard";
import Footer from "./components/footer";
import Nav from "./components/nav-bar";

function App() {
  const [strain] = useState(data);

  return (
    <Router>
      <div className="App">
        <StrainContext.Provider value={{ strain }}>
          <Nav />
          <Switch>
            <ProtectedRoute exact path="/protected" component={DashBoard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Login} />
            <Route component={Signup} />
          </Switch>
          <Footer />
        </StrainContext.Provider>
      </div>
    </Router>
  );
}

export default App;
