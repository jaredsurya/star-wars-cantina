import '../App.css';
import React, {useState, useEffect} from "react"
import CharacterList from "./CharacterList"
import Footer from "./Footer"
import Header from "./Header"
import AddNew from "./AddNew"

function App() {
  const [characters, setCharacters] = useState([])
  const blankStateObj = {
    name: "",
    level: "",
    affiliation: "",
    description: "",
    img: ""
  }
  const [newCharacter, setNewCharacter] = useState(blankStateObj)

  useEffect(() => {
    fetch("http://localhost:9000/characters")
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])
  //console.log(characters)

  function handleSubmit(e){
    e.preventDefault()
      fetch("http://localhost:9000/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCharacter),
      })
      .then(r => r.json())
      .then(/* onAddCharacter */)
  }

  return (
    <div className="App">
      <Header />
      <AddNew handleSubmit={handleSubmit} newCharacter={newCharacter} setNewCharacter={setNewCharacter}/>
      <CharacterList characters={characters}/>
      <Footer />
    </div>
  );
}

export default App;
