import React from "react";
import * as yup from "yup";

// components
import Header from "./Header/Header";
import FavoriteStrain from "./StrainCard/FavoriteStrain";
import Dropdown from "./Dropdown/Dropdown";
import UserForm from "./UserForm/UserForm";
import SavedStrain from "../SavedStrain";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Header />
      {SavedStrain !== null ? <UserForm /> : <FavoriteStrain />}
    </div>
  );
};

export default DashBoard;
