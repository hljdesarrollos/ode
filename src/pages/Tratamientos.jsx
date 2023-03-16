import React from "react";
import { Link, useParams } from "react-router-dom";

function Tratamientos() {
  let { nombre } = useParams();

  let nombretrata = [
    "implantesdentales",
    "protesisdentales",
    "ortodoncia",
    "blanqueamiento",
  ];

  return (
    <div>
      <ul>
        {nombretrata.map((trata) => (
          <li key={trata}>
            <Link to={`/tratamientos/${trata}`}>{trata}</Link>
          </li>
        ))}
      </ul>
      <h2>tratamiento: {nombre}</h2>
    </div>
  );
}

export default Tratamientos;
