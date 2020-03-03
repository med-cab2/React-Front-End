import React from "react";
import { withFormik, Form, Field } from "formik";
import { Container, H2, TextArea, Button } from "./Style";
import * as yup from "yup";
import DropDown from "../Dropdown/Dropdown";

const UserForm = ({ touched, errors }) => {
  return (
    <Container className="form-container">
      <Form className="user-form">
        <H2>Fill out this form to get started!</H2>
        <DropDown />
        <br />
        <label>
          Ailments:
          <TextArea
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
          Relief:
          <TextArea
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
        <Button>Submit</Button>
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
    // firstName: yup.string().required("First Name is Required"),
    // lastName: yup.string().required("Last Name is Required"),
    ailment: yup.string().required("Please List Your Ailments"),
    relief: yup.string().required("Please List Your Desired Relief")
  })
})(UserForm);
