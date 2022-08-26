import '../App.css';
import React, {useState, useEffect} from "react"
import CharacterList from "./CharacterList"
import Footer from "./Footer"
import Header from "./Header"
import NewCharacterForm from "./NewCharacterForm"

function App() {
  return (
    <div className="App">
      <Header />
      <NewCharacterForm />
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
