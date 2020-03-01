import React from "react";
import { Link } from "react-router-dom";

import Signup from "./signup";

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

const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input style={Styles} type="text" placeholder="username" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Password</Label>
            <Input style={Styles} type="password" placeholder="password" />
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
