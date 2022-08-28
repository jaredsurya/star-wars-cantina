import React from "react";
import Character from "./Character";

function CharacterList({ characters, onDelete }) {
  const charList = characters.map((character) => (
    <Character character={character} onDelete={onDelete} key={character.id}/>
  ));
  return <div className="App">{charList}</div>;
}

export default CharacterList;
