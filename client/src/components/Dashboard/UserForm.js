import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const NameField = styled(Field)`
  height: 50px;
  width: 25%;
`;

const UserForm = () => {
  return (
    <div className="form-container">
      <Form className="user-form">
        <label>
          First Name:
          <NameField type="text" name="firstName" placeholder="First Name" />
        </label>
        <label>
          Last Name:
          <NameField type="text" name="lastName" placeholder="Last Name" />
        </label>
        <label>
          <Field
            as="textarea"
            name="ailment"
            placeholder="Enter a brief description of your ailments..."
          />
        </label>
        <label>
          <Field
            as="textarea"
            name="relief"
            placeholder="Enter a brief description of your desired relief"
          />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    ailment: props.ailment || "",
    relief: props.relief || "",
  })
})(UserForm);
