import Container from "react-bootstrap/Container";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import "./perfil.css";
function Perfil() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usuarioLogado = localStorage.getItem("usuarioLogado");

  const navigate = useNavigate();

  let userid = JSON.parse(usuarioLogado)._id;

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .patch("http://localhost:5000/usuarios/" + userid, {
          nome: name,
          email: email,
          senha: password,
        })
        .then((res) => {
          const usuarioAtualizado = res.data;
          localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuarioAtualizado)
          );
          navigate("/lista");
        });
      console.log("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error);
    }
  };
  return (
    <>
      <section>
        <Container>
          <h1>Editor de Perfil</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Digite o nome"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Digite o email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Nova Senha</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Digite a nova senha"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
}
export default Perfil;
