import React from "react";

function Character({ character, onDelete }) {
  const { name, img, affiliation, level, description, id } = character;
  console.log(character)
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
      <p>Affiliation: {affiliation}</p>
      <p>Power Level: {level}</p>
      <p>{description}</p>
      <button className="del-btn" onClick={handleDeleteClick}>
        REMOVE THIS CHARACTER
      </button>
    </div>
  );
}

export default Character;
