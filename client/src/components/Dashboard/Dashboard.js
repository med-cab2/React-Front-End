import React from "react";
import * as yup from "yup";


// components
import Header from "./Header/Header";
import FavoriteStrain from "./StrainCard/FavoriteStrain";
import Dropdown from "./Dropdown/Dropdown";
import UserForm from "./UserForm/UserForm";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Dropdown />
      <FavoriteStrain />
      <UserForm />
    </div>
  );
};

export default DashBoard;
