import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const Styles = {
  textAlign: "center",
  width: "600px",
  margin: "0 auto",
  backgroundColor: "#f7f5e8"
};

const Login = props => {
  const { setUser } = useContext(userContext);
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    console.log("from login.js line 34", login);
  };

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        setUser(login.username);
        props.history.push("/protected");
      })
      .catch(err => console.log(err.message));
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              style={Styles}
              type="text"
              placeholder="username"
              onChange={handleInput}
              value={login.username}
              name="username"
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Password</Label>
            <Input
              style={Styles}
              type="password"
              placeholder="password"
              onChange={handleInput}
              value={login.password}
              name="password"
              required
            />
          </FormGroup>
        </Col>
        <Button>Login</Button>
      </Form>
      <span>
        Dont have an account? <Link to="/signup">Signup Here!</Link>{" "}
      </span>
    </Container>
  );
};

export default Login;
