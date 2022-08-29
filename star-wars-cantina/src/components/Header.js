import React from "react"
import { Link } from "react-router-dom"

function Header({displayChar, setDisplayChar, displayForm, setDisplayForm}) {
  return (
    <div className="header">
      <h1>STAR WARS Cantina</h1>
      <h3>Find your favorite character below.</h3>
      <button className="headerbtn" onClick={() => setDisplayChar(!displayChar)}>{displayChar ? "Hide Characters" : "Show Characters"}</button>
      <button className="headerbtn" onClick={() => setDisplayForm(!displayForm)}>{displayForm ? "Hide new character form" : "Add a new character! "}</button>
      <Link to="characters">Characters</Link>
      <Link to="addnew">Create New Character</Link>
      <Link to="about">About Page</Link>
    </div>
  )
}

export default Header