import React from "react";
import { Image, StrainCard, Paragraph, Button } from "./Style";
import img from "../images/Nevilles_Haze.jpg";

const FavoriteStrain = () => {
  return (
    <StrainCard>
      <Image src={img} />
      <h2>Neville's Haze</h2>
      <Paragraph>Type: Sativa</Paragraph>
      <p>Rating: 4</p>
      <p>Effects: Creative, Paranoia, Energetic</p>
      <Paragraph>
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
        of glaucoma.
      </Paragraph>
      <ul>
        Treats THESE AILMENTS
        <li>Nausea</li>
        <li>Pain</li>
        <li>Anxiety</li>
        <li>Headaches</li>
      </ul>
      <Button>Add to Saved</Button>
    </StrainCard>
  );
};

export default FavoriteStrain;
