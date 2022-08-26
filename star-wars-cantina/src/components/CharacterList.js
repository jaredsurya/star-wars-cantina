import React from "react"
import Character from "./Character";

function CharacterList({characters}) {
  const charList = characters.map((character) => <Character character={character} />)
  return (
    <div className="App">
      {charList}
    </div>
  );
}

export default CharacterList