import React, { useContext } from "react";
import FavoriteStrain from "./Dashboard/StrainCard/FavoriteStrain";
import StrainContext from "../contexts/StrainContext";

const SavedStrain = () => {
  const { strain } = useContext(StrainContext);

  return (
    <div>
      <h2>Saved Strains</h2>
      {strain.map(strain => {
        return <FavoriteStrain key={strain.id} />;
      })}
    </div>
  );
};

export default SavedStrain;
