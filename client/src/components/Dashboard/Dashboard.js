import React, { useContext } from "react";
import * as yup from "yup";

// components
import Header from "./Header/Header";
import RecommendedStrain from "./StrainCard/FavoriteStrain";

import UserForm from "./UserForm/UserForm";
import SavedStrain from "../SavedStrain";
import data from "../../dummyData";

import StrainContext from "../../contexts/StrainContext";

const DashBoard = () => {
  const strains = useContext(StrainContext);

  return (
    <div className="dashboard">
      <Header />
      {data.map((strain, index) => (
        <RecommendedStrain strain={strain} key={index} />
      ))}
      <UserForm />
    </div>
  );
};

export default DashBoard;
