import React from "react";
import { Image, StrainCard, Paragraph, Button, H2 } from "./Style";
import img from "../images/Nevilles_Haze.jpg";

const RecommendedStrain = props => {
  console.log(props.strain);
  return (
    <StrainCard>
      <Image src={img} />
      <H2>{props.strain.name}</H2>

      <p>Aroma: {props.strain.aroma}</p>
      <p>Qualities: {props.strain.qualities}</p>
      <Paragraph>Description: {props.strain.description}</Paragraph>

      <Button>Add to Saved</Button>
    </StrainCard>
  );
};

export default RecommendedStrain;
