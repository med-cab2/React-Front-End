import React from "react";
import { Image, StrainCard, Paragraph, Button, H2 } from "./Style";
import img from "../images/Nevilles_Haze.jpg";

const RecommendedStrain = props => {
  console.log(props.strain);
  return (
    <StrainCard>
      {/* <Image src={img} /> */}
      <H2>{props.strain.name}</H2>
      <h5>Aroma</h5>
      <Paragraph>{props.strain.aroma}</Paragraph>
      <h5>Qualities</h5>
      <Paragraph> {props.strain.qualities}</Paragraph>
      <h5>Description</h5>
      <Paragraph> {props.strain.description}</Paragraph>

      <Button>Add to Saved</Button>
    </StrainCard>
  );
};

export default RecommendedStrain;
