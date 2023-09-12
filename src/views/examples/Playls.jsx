import React from "react";
import { Routes, Route } from "react-router-dom";
import Playlsts from "./Playlsts";
//import Playlsts from "../../views/examples/Playlsts";
import Playlistdetalhe from "./Playlistdetalhe";
import { Link } from "react-router-dom";

function Playls() {
  const exibicaoPlayls = Playlsts.map((playlist) => {
    return (
      <Link to={"Playlsts /" + playlist.id}>
        <div>
          <h3>{playlist.id}</h3>
          <img src={playlist.capa} />
        </div>
      </Link>
    );
  });
  return <>{exibicaoPlayls}</>;
}
export default Playls;
