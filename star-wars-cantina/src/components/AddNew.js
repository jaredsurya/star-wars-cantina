import React, { useState } from "react";

function AddNew({ handleSubmit, setNewCharacter, newCharacter }) {
  // const [name, setName] = useState("");
  // const [affiliation, setAffilitaion] = useState("");
  // const [power, setPower] = useState("");
  // const [img, setImg] = useState("");
  // const [description, setDescription] = useState("");
  const [newChar, setNewChar] = useState({
    name: "",
    level: "",
    affiliation: "",
    description: "",
    img: "",
  });

  function handleChange(e){
    setNewChar({
      ...newChar,
      [e.target.name]: e.target.value,
    })
    console.log(newChar)
  }

  return (
    <div className="form">
      <form
        className="add-character"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(newChar);
        }}
      >
        <h3>Feeling Creative?</h3>
        <h4>Add another character:</h4>
        <input
          type="text"
          name="name"
          placeholder="Enter character's name"
          className="input-text"
          onChange={handleChange}
        />{" "}
        {/* trying to set new value to name key within stateful newCharacter
        variable */}
        <br />
        <p>Select team affiliation:</p>
        <div onChange={handleChange}>
          <input
            type="radio"
            name="affiliation"
            id="1"
            className="input-text"
            value="neutral"
          />
          <label for="1">Neutral</label>
          <input
            type="radio"
            name="affiliation"
            id="2"
            className="input-text"
            value="Rebel Alliance"
          />
          <label for="2">Rebel Alliance</label>{" "}
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
        <label for="power">Select a power level: </label>
        
        <select
          id="power"
          name="level"
          onChange={handleChange}
        >
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
          placeholder="Enter image URL."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <textarea
          name="description"
          placeholder="Add a description."
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddNew;
