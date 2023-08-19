import React from "react";
export function User({ name, age, image }) {
  return (
    <li className="people">
      <img src={image} alt={name} />
      <div className="info">
        <h4>{name}</h4>
        <p>{`${age} years old`}</p>
      </div>
    </li>
  );
}
