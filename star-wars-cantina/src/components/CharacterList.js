import React from "react";
import Character from "./Character";
import { Link } from "react-router-dom"


function CharacterList({ characters, onDelete }) {
  const charList = characters.map((character) => (
    <Character character={character} onDelete={onDelete} key={character.id}/>
  ));
  return (
    <div className="App">
      <Link className="links" to="/">Home Page</Link>
      {charList}
      <Link className="links" to="/">Home Page</Link>
    </div>);
}

export default CharacterList;
