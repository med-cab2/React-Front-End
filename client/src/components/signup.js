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

const Styles = {
  textAlign: "center",
  width: "600px",
  margin: "0 auto",
  backgroundColor: "#f7f5e8"
};

const Signup = () => {
  return (
    <Container>
      <h2>Signup</h2>
      <Form>
        <Col>
          <FormGroup>
            <Label>First Name</Label>
            <Input style={Styles} type="text" placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input style={Styles} type="text" placeholder="Last Name" />
          </FormGroup>
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
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input style={Styles} type="email" placeholder="Email" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Location</Label>
            <Input style={Styles} type="text" placeholder="Location" />
          </FormGroup>
        </Col>
        <Button>Create Account</Button>
      </Form>
    </Container>
  );
};

export default Signup;
