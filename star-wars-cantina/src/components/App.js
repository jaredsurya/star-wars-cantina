import '../App.css';
import React, {useState, useEffect} from "react"
import CharacterList from "./CharacterList"
import Footer from "./Footer"
import Header from "./Header"
import AddNew from "./AddNew"

function App() {
  const [characters, setCharacters] = useState([])
  const [newChar, setNewChar] = useState({})

  useEffect(() => {
    fetch("http://localhost:9000/characters")
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])
  //console.log(characters)

  function handleSubmit(newChar){
      fetch("http://localhost:9000/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newChar),
      })
      .then(r => r.json())
      .then(/* onAddCharacter */)
  }

  function onDelete(charToDelete) {
    const updatedCharList = characters.filter((character) => character.id !== charToDelete.id)
    setCharacters(updatedCharList)
  }

  return (
    <div className="App">
      <Header />
      <AddNew handleSubmit={handleSubmit} newChar={newChar} setNewChar={setNewChar}/>
      <CharacterList characters={characters} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
