import React, { useState } from "react";
import { Link } from "react-router-dom";

// event.target.reset()

function AddNew({ handleSubmit, setNewChar, newChar }) {
  function handleChange(e) {
    setNewChar({
      ...newChar,
      [e.target.name]: e.target.value,
    });
   }

  return (
    <div className="form">
      <form
        className="add-character"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(newChar);
          e.target.reset();
          alert("NEW CHARACTER SUBMITTED!");
        }}
      >
        <h2>Feeling Creative?</h2>
        <h4>Add another character:</h4>
        <input
          type="text"
          name="name"
          placeholder="Enter character's name:"
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <p>
          <b>Select character allegiance:</b>
        </p>
        <div onChange={handleChange} className="radio">
          <input
            type="radio"
            name="affiliation"
            id="1"
            className="input-text"
            value="Rebel Alliance"
          />
          <label for="1">Rebel Alliance</label>
          <input
            type="radio"
            name="affiliation"
            id="2"
            className="input-text"
            value="Neutral"
          />
          <label for="2">Neutral</label>{" "}
          <input
            type="radio"
            name="affiliation"
            id="3"
            className="input-text"
            value="Galactic Empire"
          />
        </div>
        <label for="3">Galactic Empire</label>
        <br />
        <label for="power">
          <b>Select their power level: </b>
        </label>

        <select id="power" name="level" onChange={handleChange}>
          <option value="0">---</option>
          <option value="10">10</option>
          <option value="9">9</option>
          <option value="8">8</option>
          <option value="7">7</option>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <br />
        <input
          type="text"
          name="img"
          placeholder="Enter an image URL:"
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Add a description!"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" className="submit" />
      </form>
      <div className="nav">
        <Link className="links" to="/">
          Home Page
        </Link>
        <Link className="links" to="../characters">
          See the Characters
        </Link>
        <Link className="links" to="../about">
          About Page
        </Link>
      </div>
    </div>
  );
}

export default AddNew;
