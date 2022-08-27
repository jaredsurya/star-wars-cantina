import React from "react";
import Character from "./Character";

function CharacterList({ characters }) {
  const charList = characters.map((character) => (
    <Character character={character} key={character.id}/>
  ));
  return <div className="App">{charList}</div>;
}

export default CharacterList;
