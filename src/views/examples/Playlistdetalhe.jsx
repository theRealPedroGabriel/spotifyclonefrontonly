import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function Playlistdetalhe() {
  const { id } = useParams();
  return (
    <>
      <div>{id}</div>
    </>
  );
}
export default Playlistdetalhe;
