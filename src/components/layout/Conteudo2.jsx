import Container from "react-bootstrap/Container";
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";
import "./conteudoStyle.css";
function Home() {
  return (
    <div className="bodyconteudo">
      
      <Container className="home">
        <Row className="justify-content-md-center ">
          <Row>
            <Col md={12} className="capa">
              <h1 className="text-center">Música para todos</h1>
              <Stack gap={2} className="col-md-5 mx-auto">
                <Button className="btn-roxo btn-custom" size="lg">
                  Aproveite o Spotify Free
                </Button>
                <Button
                  variant="light"
                  className=" btn-custom btn-branco"
                  size="lg"
                >
                  Obter Spotify Premium
                </Button>
              </Stack>
            </Col>
          </Row>
        </Row>
      </Container>
      <section id="servicos" className="caixa">
        <Container>
          <Row>
            <Col md={6}>
              <Row className="albuns">
                <Col md = {6}>
                <Link to ="/lista"><img src="imagens/img1.jpg" className="img-fluid"/></Link>
                
                </Col>
                <Col md = {6}>
                <Link to ="/lista"><img src="imagens/img2.jpg" className="img-fluid"/></Link>
                </Col>
              </Row>
              <Row className="albuns">
                <Col md = {6}>
                <Link to ="/lista"><img src="imagens/img3.jpg" className="img-fluid"/></Link>
                </Col>
                <Col md = {6}>
                <Link to ="/lista"><img src="imagens/img4.jpg" className="img-fluid"/></Link>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <h2>O que o Spotify tem?</h2>

              <h3>Músicas</h3>
              <p>
                O Spotify tem milhões de músicas. Escute seus sons favoritos,
                descubra novas músicas e reúna seus favoritos em um só lugar.
              </p>

              <h3>Playlists</h3>
              <p>
                No Spotify você encontra uma playlist para cada momento. Todas
                feitas por fanáticos e especialistas da música.
              </p>

              <h3>Novos lançamentos</h3>
              <p>
                Escute os novos lançamentos de singles e álbuns da semana e veja
                o que está bombando no Top 50.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="recursos" class="caixa">
        <Container>
          <Row>
            <Col md={4}>
              <h2>Fácil</h2>
              <h3>Buscar</h3>
              <p>Já sabe o que quer escutar? É só procurar e apertar o play.</p>

              <h3>Navegar</h3>
              <p>
                Veja os novos lançamentos, o que está bombando nas paradas e as
                melhores playlists para o seu momento.
              </p>

              <h3>Descobrir</h3>
              <p>
                Curta músicas novas toda segunda-feira com uma playlist
                personalizada pra você. Ou relaxe e curta uma das rádios.
              </p>
            </Col>
            <Col md={8}>
              <Row className="rotacionar">
                <Col md={6}>
                  <img
                    src="imagens/iphone1.png"
                    className="img-fluid rounded"
                  />
                </Col>
                <Col md={6}>
                  <img
                    src="imagens/iphone2.png"
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
