import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as yup from "yup";

const NameField = styled(Field)`
  height: 25px;
  width: 50%;
  margin: 5px;
`;

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column;
  background-color: #f7f5e8;
  height: 100%;
  padding-bottom: 25px;
  border: 1px solid lightslategray;

  margin: 5px auto;
`;

const UserForm = ({ touched, errors }) => {
  return (
    <Container className="form-container">
      <Form className="user-form">
        <label>
          First Name:
          <NameField type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && (
            <p className="errors">{errors.firstName}</p>
          )}
        </label>
        <br />
        <label>
          Last Name:
          <NameField type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && (
            <p className="errors">{errors.lastName}</p>
          )}
        </label>
        <br />
        <label>
          Ailments:
          <Field
            as="textarea"
            name="ailment"
            cols="45"
            rows="5"
            placeholder="Enter a brief description of your ailments..."
          />
          {touched.ailment && errors.ailment && (
            <p className="errors">{errors.ailment}</p>
          )}
        </label>
        <br />
        <label>
          Desired Relief:
          <Field
            as="textarea"
            name="relief"
            cols="45"
            rows="5"
            placeholder="Enter a brief description of your desired relief..."
          />
          {touched.relief && errors.relief && (
            <p className="errors">{errors.relief}</p>
          )}
        </label>
        <br />
        <button>Submit</button>
      </Form>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    ailment: props.ailment || "",
    relief: props.relief || ""
  }),
  validationSchema: yup.object().shape({
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    ailment: yup.string().required("Please List Your Ailments"),
    relief: yup.string().required("Please List Your Desired Relief")
  })
})(UserForm);
