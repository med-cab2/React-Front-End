import React, { useContext, useState } from "react";
import { Image, StrainCard, Paragraph, Button, H2 } from "./Style";
import img from "../images/Nevilles_Haze.jpg";

import StrainContext from "../../../contexts/StrainContext";

const RecommendedStrain = props => {
  const [data, setData] = useState({
    strain: null
  });
  console.log("from favoritestrain.js", data);

  const saveStrain = () => {
    const addToSavedStrain = () => props.addToSavedStrain;
    addToSavedStrain(data.strain);
  };

  return (
    <StrainCard>
      <Image src={img} />
      <H2>{props.strain.name}</H2>

      <p>Aroma: {props.strain.aroma}</p>
      <p>Qualities: {props.strain.qualities}</p>
      <Paragraph>Description: {props.strain.description}</Paragraph>

      <Button onClick={saveStrain}>Add to Saved</Button>
    </StrainCard>
  );
};

export default RecommendedStrain;
