import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./musicas.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import axios from "axios";
function Musicas2() {
  
 const [musicas, setMusicas] = useState([]);
const { nome } = useParams();

  useEffect(async () => {
       const response = await axios.get(
        "http://localhost:5000/musicas?nome=" + nome
      );
      musicas = response.data;
  }, []);
  
 useEffect(() => {
   axios
     .get("http://localhost:5000/musicas")
     .then((res) => setMusicas(res.data));
 }, []);


  
  const play = musicas.find((p) => p.nome == nome);

  return (
    <div className="bodys">
      <Container>
         <ListGroup>
        <ListGroup.Item className="d-flex align-items-center">
              <img src={play.capa} className="capinha" />
              <b>{play.nome}</b>
              <audio src={play.arquivo} controls></audio>
            </ListGroup.Item></ListGroup>
        {musicas?.map((m) => (
          <ListGroup>
            
            <ListGroup.Item className="d-flex align-items-center">
              <img src={m.capa} className="capinha" />
              <b>{m.nome}</b>
              <audio src={m.arquivo} controls></audio>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </div>
  );
}
export default Musicas2;
