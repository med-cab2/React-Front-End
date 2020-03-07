import React from "react";
import FavoriteStrain from "./Dashboard/StrainCard/FavoriteStrain";

class SavedStrain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Saved Strains</h2>
        {this.props.map(strain => {
          return <FavoriteStrain key={strain.id} />;
        })}
      </div>
    );
  }
}

export default SavedStrain;
