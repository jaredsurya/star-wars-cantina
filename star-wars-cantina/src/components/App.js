import "../App.css";
import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import About from "./About";
import Header from "./Header";
import AddNew from "./AddNew";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// build out link routing and decorate links. add links to top of other pages.

function App() {
  const [characters, setCharacters] = useState([]);
  const [newChar, setNewChar] = useState({});
  const [displayChar, setDisplayChar] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9000/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  function handleSubmit(newChar) {
    fetch("http://localhost:9000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChar),
    })
      .then((r) => r.json())
      .then((data) => setCharacters([...characters, data]));
  }
  function onDelete(charToDelete) {
    const updatedCharList = characters.filter(
      (character) => character.id !== charToDelete.id
    );
    setCharacters(updatedCharList);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route
            path="/addnew"
            element={
              <AddNew
                handleSubmit={handleSubmit}
                newChar={newChar}
                setNewChar={setNewChar}
              />
            }
          />
          <Route
            path="/characters"
            element={
              <CharacterList characters={characters} onDelete={onDelete} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
