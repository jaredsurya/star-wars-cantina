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
      <div className="navlink">  
        <Link className="links" to="/">Home Page</Link>
        <Link className="links" to="../addnew">Add New Character</Link>
        <Link className="links" to="../about">About Page</Link>
      </div>
    </div>);
}

export default CharacterList;
