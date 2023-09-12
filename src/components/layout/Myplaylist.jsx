import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./musicas.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import axios from "axios";
function Musicas() {
  const [usuarios, setUsuario] = useState([]);
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/usuarios")
      .then((res) => setUsuario(res.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/musicas")
      .then((res) => setMusicas(res.data));
  }, []);
  const { id } = useParams();
  const play = usuarios.find((p) => p.id == id);

  console.log(musicas);

  return (
    <>
      <Container>
        <Row className="capamusicas">
          <Col md={4}>
            <Row>
              {play?.musicas?.slice(0, 1).map((d) => (
                <Col>
                  <img src={d.capa} className="capaplaylist" />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={8}>
            <h2>{play?.nome}</h2>
          </Col>
        </Row>

        {play?.musicas?.map((m) => (
          <ListGroup>
            <ListGroup.Item className="d-flex align-items-center">
              <img src={m.capa} className="capinha" />
              <b>{m.nome}</b>
              <audio src={m.arquivo} controls></audio>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </>
  );
}
export default Musicas;
