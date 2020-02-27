import React from "react";

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <br />
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
