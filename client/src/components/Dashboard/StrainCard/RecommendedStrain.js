import React from "react";
import { Image, StrainCard, Paragraph, Button, H2, H5 } from "./Style";
import img from "../images/Nevilles_Haze.jpg";

const RecommendedStrain = props => {
  return (
    <>
      <StrainCard>
        {/* <Image src={img} /> */}
        <H2>{props.strain.name}</H2>
        <H5>Aroma</H5>
        <Paragraph>{props.strain.aroma}</Paragraph>
        <H5>Qualities</H5>
        <Paragraph> {props.strain.qualities}</Paragraph>
        <H5>Description</H5>
        <Paragraph> {props.strain.description}</Paragraph>

        <Button>Add to Saved</Button>
      </StrainCard>
    </>
  );
};

export default RecommendedStrain;
