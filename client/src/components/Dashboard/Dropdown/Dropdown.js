import React from "react";
import { withFormik, Field } from "formik";
import { DropDownStyled } from "./Style";

const DropDown = () => {
  return (
    <>
      <DropDownStyled component="select" name="ailment-drop">
        <option>Choose an Ailment</option>
        <option value="nausea">Nausea</option>
        <option value="anxiety">Anxiety</option>
        <option value="pain">Pain</option>
        <option value="insomnia">Insomnia</option>
      </DropDownStyled>
    </>
  );
};

export default withFormik({
  mapPropsToValues: props => ({})
})(DropDown);
