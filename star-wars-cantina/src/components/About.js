import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div>
        <Link className="links" to="/">
          Home Page
        </Link>
        <Link className="links" to="../characters">
          Character Page
        </Link>
        <Link className="links" to="../addnew">
          Add New Character
        </Link>
      </div>
      <p className="char-text">
        This single page app was brought to you by{" "}
        <a href="https://flatironschool.com/">Flatiron School</a>,{" "}
        <a href="https://www.starwars.com/databank">STARWARS.COM</a>, and Jared
        Dietz. <br />
        Jared is a student from upstate New York who made this app during Phase
        2 of the Flatiron School cirriculum. He enjoys the outdoors, good movies
        like Star Wars, and free time with his friends and family.
        <br />
        Inspiration for this page came from the Flatiron School cirriculum and
        the Star Wars movies.
        <br />
        This page is made using <a href="https://reactjs.org/">React</a>.
      </p>
    </div>
  );
}

export default About;
