import React from "react";

function NewCharacterForm() {
  return (
    <div className="form">
      <form className="add-character" onSubmit={null}>
        <h3>Feeling Creative?</h3>
        <h4>Add another character:</h4>
        <input
          type="text"
          name="name"
          placeholder="Enter character's name"
          className="input-text"
        />
        <br />
        <p>Select character affiliation:</p>
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
        <label for="3">Galactic Empire</label>
        <br />
        <label for="power">Select power level: </label>
        <select id="power" name="powerlevel">
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
       {/* wanting to add in a submit button here */}
      </form>
    </div>
  );
}

export default NewCharacterForm;
