import React from "react";

function Character({ character, onDelete }) {
  const { name, img, affiliation, level, description, id } = character;
  //console.log(character)
  function handleDeleteClick() {
    fetch(`http://localhost:9000/characters/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDelete(character);
      });
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt={name} className="picture" />
      <p className="char-text">Affiliation: {affiliation}</p>
      <p className="char-text">Power Level: {level}</p>
      <p className="char-text">{description}</p>
      <button className="del-btn" onClick={handleDeleteClick}>
        REMOVE THIS CHARACTER
      </button>
    </div>
  );
}

export default Character;
