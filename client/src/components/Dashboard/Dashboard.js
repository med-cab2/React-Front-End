import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

// components
import Header from "./Header/Header";
import RecommendedStrain from "./StrainCard/FavoriteStrain";
import UserForm from "./UserForm/UserForm";
import SavedStrain from "../SavedStrain";

const DashBoard = () => {
  const [savedStrain, setSavedStrain] = useState([]);
  const [data, setData] = useState([]);

  const addToSavedStrain = data => {
    setSavedStrain([...savedStrain, data]);
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/strains")
      .then(response => {
        console.log("from dashboard", response.data);
        setData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  if (!data) return <h1 className="loading">Loading</h1>;

  return (
    <div className="dashboard">
      <SavedStrain list={savedStrain} />
      <Header />
      {data.map(strain => (
        <RecommendedStrain
          addToSavedStrain={addToSavedStrain}
          strain={strain}
          key={strain.id}
        />
      ))}
      <UserForm />
    </div>
  );
};

export default DashBoard;
