import React from "react";
import { withFormik, Form, Field } from "formik";
import { Container, H2, TextArea, Button, H1, Image } from "./Style";
import icon from "../../../logo/icon.png";
import * as yup from "yup";
<<<<<<< HEAD

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
=======
import DropDown from "../Dropdown/Dropdown";
>>>>>>> 80b2ce8ad695cc2ed49db162c36e4bd154270173

const UserForm = ({ touched, errors }) => {
  return (
    <Container className="form-container">
      <Form className="user-form">
        <Image src={icon} />
        <H1>Strainiac</H1>
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
