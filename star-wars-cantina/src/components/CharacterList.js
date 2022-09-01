import React, {useState} from "react";
import Character from "./Character";
import { Link } from "react-router-dom";

function CharacterList({ characters, onDelete, onSearch }) {
  const [search, setSearch] = useState('')
  //console.log(search)
  const filteredChar = characters.filter((character) => {
    character.name.toLowerCase().includes(search.toLowerCase)
  })
  console.log(filteredChar)
  const charList = characters.map((character) => (
    <Character character={character} onDelete={onDelete} key={character.id} />
  ));
  function handleSearch(e) {
    e.preventDefault()
    console.log(search)
    e.target.reset()
  }
  
  return (
    <div className="App">
      <Link className="links" to="/">
        Home Page
      </Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="name"
          placeholder="Search by name:"
          className="input-text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <input type="submit" className="submit" />
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
