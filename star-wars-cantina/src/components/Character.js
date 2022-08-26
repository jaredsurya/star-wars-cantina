import React from "react";

function Character({ character }) {
  const {name, img, affiliation, level, description} = character
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={img} alt={name} className="picture" />
      <p>Affiliation: {affiliation}</p>
      <p>Power Level: {level}</p>
      <p>{description}</p>
    </div>
  );
}

export default Character;
