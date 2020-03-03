import React from "react";
import { withFormik, Form, Field } from "formik";

const DropDown = () => {
  return (
    <Form>
      <Field component="select" name="ailment-drop">
        <option>Choose an Ailment</option>
        <option value="nausea">Nausea</option>
        <option value="anxiety">Anxiety</option>
        <option value="pain">Pain</option>
        <option value="insomnia">Insomnia</option>
      </Field>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: props => ({})
})(DropDown);
