import React from "react";
import FavoriteStrain from "./Dashboard/StrainCard/FavoriteStrain";
import { NavLink } from "react-router-dom";

class SavedStrain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.list.map(strain => {
          return (
            <NavLink to={`/strain/${strain.id}`} key={strain.id}>
              <span>{strain.name}</span>
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default SavedStrain;
