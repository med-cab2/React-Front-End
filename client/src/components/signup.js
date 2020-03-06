import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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

const Signup = props => {
  const [signup, setsignUp] = useState({
    firstname: "",
    lastname: "",
    date_of_birth: "",
    email: "",
    location: "",
    username: "",
    password: ""
  });

  const handleInput = e => {
    setsignUp({
      ...signup,
      [e.target.name]: e.target.value
    });
    console.log(signup);
  };

  const handleSignup = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", signup)
      .then(res => {
        console.log(res);
        props.history.push("/login");
      })
      .catch(err => console.log(err.message));
  };

  return (
    <Container>
      <h2>Signup</h2>
      <Form onSubmit={handleSignup}>
        <Col>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              style={Styles}
              type="text"
              name="firstname"
              placeholder="First Name"
              value={signup.firstname}
              onChange={handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              style={Styles}
              type="text"
              placeholder="Last Name"
              onChange={handleInput}
              value={signup.lastname}
              name="lastname"
            />
          </FormGroup>
          <FormGroup>
            <Label>Date of Birth</Label>
            <Input
              style={Styles}
              type="date"
              placeholder="Date of birth"
              onChange={handleInput}
              value={signup.date_of_birth}
              name="date_of_birth"
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              style={Styles}
              type="email"
              placeholder="Email"
              onChange={handleInput}
              value={signup.email}
              name="email"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Location</Label>
            <Input
              style={Styles}
              type="text"
              placeholder="Location"
              onChange={handleInput}
              value={signup.location}
              name="location"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              style={Styles}
              type="text"
              placeholder="username"
              onChange={handleInput}
              value={signup.username}
              name="username"
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
              value={signup.password}
              name="password"
            />
          </FormGroup>
        </Col>
        <Button>Create Account</Button>
      </Form>
    </Container>
  );
};

export default Signup;
