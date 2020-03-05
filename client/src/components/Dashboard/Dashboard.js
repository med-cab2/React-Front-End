import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// components
import Header from "./Header/Header";
import RecommendedStrain from "./StrainCard/FavoriteStrain";
import UserForm from "./UserForm/UserForm";

// const DummyData = [
//   {
//     name: "Neville's Haze",
//     aroma: "Citrusy, Skunky",
//     qualities: "Pain Relief, Insomnia",
//     description: "Neville's Haze is a mostly Haze derived strain that won"
//   },
//   {
//     name: "Purple Haze",
//     aroma: "Citrusy, Fruity, Piney",
//     qualities: "Pain Relief, Insomnia, Nausea",
//     description: "Purple Haze is a mostly Haze derived strain that won"
//   },

//   {
//     name: "OG Haze",
//     aroma: "Citrusy, Fruity, Piney",
//     qualities: "Anxiety, Insomnia, Nausea",
//     description: "OG Haze is a mostly Haze derived strain that won"
//   }
// ];

const DashBoard = () => {
  const [savedStrain, setSavedStrain] = useState([]);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setSavedStrain(savedStrain);
  };

  useEffect(() => {
    axios
      .get("https://strainiac.herokuapp.com/strains")
      .then(response => {
        console.log("from dashboard", response.data);
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  if (!data) return <h1 className="loading">Loading</h1>;

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
