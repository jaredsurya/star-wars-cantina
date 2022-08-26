import '../App.css';
import React, {useState, useEffect} from "react"
import CharacterList from "./CharacterList"
import Footer from "./Footer"
import Header from "./Header"
import NewCharacterForm from "./NewCharacterForm"

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch("http://localhost:9000/characters")
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])
  console.log(characters)
  return (
    <div className="App">
      <Header />
      <NewCharacterForm />
      <CharacterList characters={characters}/>
      <Footer />
    </div>
  );
}

export default App;
