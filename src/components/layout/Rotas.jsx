import { Routes, Route } from "react-router-dom";
import About from "../../views/examples/About";
import Home from "./Conteudo2";
import Myplaylist from "./Myplaylist";
import Listas from "./Listas";
import Perfil from "./Perfil";
import Musicas from "./Musicas";
import Musicas2 from "./Musicas2";
import Cadastro from "./Cadastro";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Api from "../../connection/Api";
import axios from "axios";

const Rotas = (props) => (
  useEffect(() => {
    Api.get("usuarios").then((res) => {
      console.log(res.data);
    });
  }, []),
  (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/myplaylist" element={<Myplaylist />} />
      <Route path="/lista" element={<Listas />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/playlists/:id" element={<Musicas />} />
      <Route path="/musicas/:nome" element={<Musicas2 />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
);
export default Rotas;
