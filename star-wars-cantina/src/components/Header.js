import React from "react"
import { Link } from "react-router-dom"

function Header({displayChar, setDisplayChar, displayForm, setDisplayForm}) {
  return (
    <div className="header">
      <h1>STAR WARS Cantina!</h1>
      <h3>See your favorite characters here.</h3>
      {/* <button className="headerbtn" onClick={() => setDisplayChar(!displayChar)}>{displayChar ? "Hide Characters" : "Show Characters"}</button>
      <button className="headerbtn" onClick={() => setDisplayForm(!displayForm)}>{displayForm ? "Hide new character form" : "Add a new character! "}</button> */}
      <Link className="links" to="characters">Character Page</Link>
      <Link className="links" to="addnew">Add New Character</Link>
      <Link className="links" to="about">About Page</Link>
    </div>
  )
}

export default Header