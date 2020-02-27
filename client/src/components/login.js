import React from "react";

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

const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              style={{ textAlign: "center", width: "600px", margin: "0 auto" }}
              type="text"
              placeholder="username"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Password</Label>
            <Input
              style={{ textAlign: "center", width: "600px", margin: "0 auto" }}
              type="password"
              placeholder="password"
            />
          </FormGroup>
        </Col>
        <Button>Login</Button>
      </Form>
      <Signup />
    </Container>
  );
};

export default Login;
