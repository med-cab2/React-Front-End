import React from "react";
import "./App.css";

//components
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      Cannabis Cab
      <Login />
      <Signup />
    </div>
  );
}

export default App;
