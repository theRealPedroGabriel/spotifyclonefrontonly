import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./listas.css";
import { Link, useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap";
import { Carousel, ListGroup } from "react-bootstrap";
import axios from "axios";

const dividirArray = (array, tamanho) => {
  const result = [];
  const arrayTemp = [...array];
  while (arrayTemp.length > 0) {
    result.push(arrayTemp.splice(0, tamanho));
  }
  return result;
};

function Listas() {
  const [playlists, setPlaylists] = useState([]);
  const [musicas, setMusicas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [playlistspessoal, setPlaylistspessoal] = useState("");

  useEffect(() => {
    axios
      .get("https://spotifycloneback.onrender.com/playlists")
      .then((res) => setPlaylists(res.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://spotifycloneback.onrender.com/musicas")
      .then((res) => setMusicas(res.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://spotifycloneback.onrender.com/usuarios")
      .then((res) => setUsuarios(res.data));
  }, []);
  console.log(usuarios);
  const itemsCarousel = dividirArray(playlists, 6);
  const { id } = useParams();
  const play = playlists.find((p) => p._id == id);

  const usuarioLogado = localStorage.getItem("usuarioLogado");
  let iduser = JSON.parse(usuarioLogado).id;

  const plai = usuarios.find((x) => x._id == id);

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(
      "https://spotifycloneback.onrender.com/usuarios/" + usuarioLogado.iduser,
      playlistspessoal
    );
    setPlaylistspessoal("");
  }

  console.log(iduser);
  console.log("plai" + plai);
  console.log("play" + play);
  return (
    <>
      <section>
        <Container>
          <h1>Playlists mais ouvidas</h1>
          <Carousel controls={false}>
            {itemsCarousel.map((playlist, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-around">
                  {playlist.map((item) => (
                    <div key={item.id} className="cardp">
                      <Link to={"/playlists/" + item._id}>
                        <Card>
                          <Card.Img variant="top" src={item.capa} />
                          <Card.Body>
                            <Card.Title>{item.nome}</Card.Title>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <br />
        <br />
        <Container>
          <h4>PARA VOCÊ</h4>
          <h2>Músicas em alta</h2>

          <Row>
            <Col>
              <ListGroup>
                {musicas.slice(0, 4).map((m) => (
                  <ListGroup.Item action href="/musicas" variant="dark">
                    {m.nome}
                  </ListGroup.Item>
                ))}{" "}
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                {musicas.slice(4, 8).map((m) => (
                  <ListGroup.Item action href="/musicas" variant="dark">
                    {m.nome}
                  </ListGroup.Item>
                ))}{" "}
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                {musicas.slice(8, 12).map((m) => (
                  <ListGroup.Item action href="/musicas" variant="dark">
                    {m.nome}
                  </ListGroup.Item>
                ))}{" "}
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <Container>
          <h1>Suas musicas</h1>

          <Button variant="light" type="submit" onSubmit={handleSubmit}>
            Criar Playlist
          </Button>

          {play?.playlistspessoal.map((playlist, index) => (
            <div className="d-flex justify-content-around">
              {playlist.map((item) => (
                <div key={item.id} className="cardp">
                  <Link to={"/playlists/" + item.id}>
                    <Card>
                      <Card.Img variant="top" src={item.capa} />
                      <Card.Body>
                        <Card.Title>{item.nome}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          ))}
          {plai?.usuarios.map((item) => (
            <div className="d-flex justify-content-around">
              <div key={item.id} className="cardp">
                <Link to={"/playlists/" + item.id}>
                  <Card>
                    <Card.Img variant="top" src={item.email} />
                    <Card.Body>
                      <Card.Title>{item.nome}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
export default Listas;
