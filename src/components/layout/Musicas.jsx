import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./musicas.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Player from "./Player";

import axios from "axios";
function Musicas() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get("https://spotifycloneback.onrender.com/playlists")
      .then((res) => setPlaylists(res.data));
  }, []);

  const { id } = useParams();
  const play = playlists.find((p) => p._id == id);

  return (
    <div className="bodys">
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
        <div>
          <Player />
        </div>
      </Container>
    </div>
  );
}
export default Musicas;
