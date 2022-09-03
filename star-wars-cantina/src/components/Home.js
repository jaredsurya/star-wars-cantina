import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="header">
      <h1>STAR WARS Cantina!</h1>
      <h3>See your favorite characters here.</h3>
      <div className="nav" >
        <Link className="links" to="characters">
          Character Page
        </Link>
        <Link className="links" to="addnew">
          Add New Character
        </Link>
        <Link className="links" to="about">
          About Page
        </Link>
      </div>
    </div>
  );
}

export default Home;
