import React from "react";
import { useParams } from "react-router-dom";

function Parametro() {
  let { id } = useParams();

  return (
    <>
      <p>ID: {id}</p>
    </>
  );
}

export default Parametro;
