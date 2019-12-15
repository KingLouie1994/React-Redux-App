import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../state/actionCreators";

export function Characters({ characters, getCharacters }) {
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {characters.map(character => (
        <div>{character.name}</div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

export default connect(mapStateToProps, { getCharacters })(Characters);
