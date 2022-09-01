import React, {useState} from "react";
import Character from "./Character";
import { Link } from "react-router-dom";

function CharacterList({ characters, onDelete, onSearch }) {
  const [search, setSearch] = useState('')
  
  const filteredChar = characters.filter((character) => {
    let lowercase = character.name.toLowerCase()
    return lowercase.includes(search)
  })
  
  const charList = filteredChar.map((character) => (
    <Character character={character} onDelete={onDelete} key={character.id} />
  ));
  
  return (
    <div className="App">
      <Link className="links" to="/">
        Home Page
      </Link>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Type here to search."
          className="input-text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </form>
      {charList}
      <div className="navlink">
        <Link className="links" to="/">
          Home Page
        </Link>
        <Link className="links" to="../addnew">
          Add New Character
        </Link>
        <Link className="links" to="../about">
          About Page
        </Link>
      </div>
    </div>
  );
}

export default CharacterList;
