import React from "react"
import { Link } from "react-router-dom"


function About() {
  return(
    <div className="footer">
      <Link className="links" to="/">Home Page</Link>
      <p>This single page app was brought to you by Flatiron School, STARWARS.COM, and Jared Dietz.</p>
    </div>
  )
}

export default About