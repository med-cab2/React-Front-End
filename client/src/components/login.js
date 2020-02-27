import React from "react";

import Signup from "./signup";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <br />
        <button>Login</button>
      </form>
      <Signup />
    </div>
  );
};

export default Login;
