import React from "react";

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const Signup = () => {
  return (
    <Container>
      <h1>Signup</h1>
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

        <Button>Create Account</Button>
      </Form>
    </Container>
  );
};

export default Signup;
