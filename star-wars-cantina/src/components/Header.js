import React from "react"


function Header({displayChar, setDisplayChar, displayForm, setDisplayForm}) {
  return (
    <div className="header">
      <h1>STAR WARS Cantina</h1>
      <h3>Find your favorite character below.</h3>
      <button onClick={() => setDisplayChar(!displayChar)}>{displayChar ? "Hide Characters" : "Show Characters"}</button>
      <button onClick={() => setDisplayForm(!displayForm)}>{displayForm ? "Hide new character form" : "Add a new character! "}</button>

    </div>
  )
}

export default Header