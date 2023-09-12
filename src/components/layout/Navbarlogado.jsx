import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbarStyle.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ColorSchemesExample() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [musicas, setMusicas] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // Verificar se a música corresponde ao termo de pesquisa

      if (musicas) {
        navigate("/musicas/"+ searchTerm);
      } else {
        console.log("Nenhuma playlist encontrada.");
      }
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    }
  };

  const usuarioLogado = localStorage.getItem("usuarioLogado");
  let user = "no";
  let home = "/"
  if (usuarioLogado) {
    user = JSON.parse(usuarioLogado).nome;
    home = "/lista"
  } else user = "Login/Cadastrar";

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("usuarioLogado");
    navigate("/");
  }
 
 
  return (
    <>
      <Navbar fixed="top" bg="" variant="dark" className="navbar-transparente">
        <Container>
          <Navbar.Brand href={home}>
            <img src="/imagens/spotify.svg" width="142" />
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
              <Button variant="outline-success" type="submit">
                Buscar
              </Button>
            </Form>

            <NavDropdown title={user} id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/cadastro">Cadastre-se</NavDropdown.Item>
              <NavDropdown.Item href="/perfil">Seu perfil</NavDropdown.Item>
              <NavDropdown.Item href="/about">Ajuda</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleSubmit} href="/">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
