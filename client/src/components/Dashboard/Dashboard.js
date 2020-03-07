import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

// components
import Header from "./Header/Header";
import RecommendedStrain from "./StrainCard/FavoriteStrain";
import UserForm from "./UserForm/UserForm";

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
