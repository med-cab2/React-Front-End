<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import img from "../images/Nevilles_Haze.jpg";

const StrainCard = styled.div`
  border: 1px solid lightslategray;
  width: 30%;
  margin: 20px auto;
  background-color: #f7f5e8;
`;

const Image = styled.img`
  width: 30%;
  margin-top: 20px;
`;

const FavoriteStrain = props => {
  const [strain, setStrain] = useState([]);

  const saveStrain = () => {
    const addToSavedList = strain.addToSavedList;
    addToSavedList(strain);
  };

  return (
    <StrainCard>
      <Image src={img} />
      <h2>Neville's Haze</h2>
      <p>Type: Sativa</p>
      <p>Rating: 4</p>
      <p>Effects: Creative, Paranoia, Energetic</p>
      <p>
        Description: Neville's Haze is a mostly Haze derived strain that won
        first place in the seeds division of the 1998 High Times Cannabis Cup.
        The Haze heritage leads to a strong Sativa style high that clouds the
        mind with euphoric giggly bliss. Though powerful the effects are not the
        kind to keep most users rooted as they feel a rise in creative juices
        and a need to be productive when consumed in low doses. Though a
        wonderful strain it still carries the usual negative effects of dry eyes
        and mouth, with some users experiencing dizziness, headaches and
        paranoia. This strain has been known to have a THC content as high as 21
        percent and is most often recommended to patients suffering from chronic
        depression, stress and anxiety. Others have chosen to use it to take the
        focus away from their cage of chronic pain. A few users have found
        reprieve from their restless nights of insomnia through Neville's Haze
        as well. The strain is also chosen to alleviate nausea and the effects
        of glaucoma.{" "}
      </p>
      <ul>
        Treats THESE AILMENTS
        <li>Nausea</li>
        <li>Pain</li>
        <li>Anxiety</li>
        <li>Headaches</li>
      </ul>
      <button onClick={saveStrain}>Add to Saved</button>
=======
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
>>>>>>> 80b2ce8ad695cc2ed49db162c36e4bd154270173
    </StrainCard>
  );
};

export default RecommendedStrain;
