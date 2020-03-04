import React from "react";
import * as yup from "yup";

// components
import Header from "./Header/Header";
import RecommendedStrain from "./StrainCard/FavoriteStrain";

import UserForm from "./UserForm/UserForm";
import SavedStrain from "../SavedStrain";

const DummyData = [
  {
    name: "Neville's Haze",
    aroma: "Citrusy, Skunky",
    qualities: "Pain Relief, Insomnia",
    description: "Neville's Haze is a mostly Haze derived strain that won"
  },
  {
    name: "Purple Haze",
    aroma: "Citrusy, Fruity, Piney",
    qualities: "Pain Relief, Insomnia, Nausea",
    description: "Purple Haze is a mostly Haze derived strain that won"
  },

  {
    name: "OG Haze",
    aroma: "Citrusy, Fruity, Piney",
    qualities: "Anxiety, Insomnia, Nausea",
    description: "OG Haze is a mostly Haze derived strain that won"
  }
];

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Header />
<<<<<<< HEAD
      {SavedStrain !== null ? <UserForm /> : <FavoriteStrain />}
=======
      {DummyData.map((strain, index) => (
        <RecommendedStrain strain={strain} key={index} />
      ))}
      <UserForm />
>>>>>>> 80b2ce8ad695cc2ed49db162c36e4bd154270173
    </div>
  );
};

export default DashBoard;
