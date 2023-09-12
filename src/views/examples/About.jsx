import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
const About = (prop) => (
  <div className="About">
    <div className="container">
      <section>
        <div>
          <div>
            <div className="col-md-12 capa">
              <h1>Como podemos ajudar?</h1>
              <span>
                <h3 className="text-light text-decoration-none">
                  <Link to="/">Faça login </Link> para ter ajuda mais rápido
                </h3>
              </span>
            </div>

            <form>
              <div className="form-group row">
                <div className="col-sm-10">
                  <input
                    className="form-control mr-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-outline-success ml-2 my-2 my-sm-0 width-auto"
                    type="submit"
                  >
                    <h5 class="mb-0">Buscar</h5>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="opcoes">
        <div class="container align-self-center">
          <div class="row">
            <div class="col-md-4 d-flex justify-content-center">
              <button class="btn btn-primary" type="button">
                Ajuda com pagamentos
              </button>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <button class="btn btn-primary" type="button">
                Ajuda com o plano
              </button>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <button class="btn btn-primary" type="button">
                Ajuda com o app
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 d-flex justify-content-center">
              <button class="btn btn-primary" type="button">
                Ajuda com dispositivos
              </button>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <button class="btn btn-primary" type="button">
                Privacidade e Segurança
              </button>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
              <button class="btn btn-primary" type="button">
                Ajuda com a conta
              </button>
            </div>
          </div>
        </div>
      </section>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Não consigo redefinir a senha</Accordion.Header>
          <Accordion.Body>
            Endereço de e-mail antigo? Você precisa ter acesso ao endereço de
            e-mail cadastrado na sua conta do Spotify para abrir o link de
            redefinição de senha que nós enviamos. Caso você não tenha acesso,
            estas são algumas opções: Recupere o acesso ao endereço de e-mail,
            se possível. Crie uma nova conta e comece do zero.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Tem algo errado com a minha conta</Accordion.Header>
          <Accordion.Body>
            Se notar algo estranho, diferente ou corrompido, é possível que você
            tenha entrado em outra conta do Spotify. Verifique se estão
            faltando: Playlists/músicas curtidas Recursos do Premium Foto de
            perfil Para conferir se você está na conta certa, saia dela e siga
            as etapas abaixo:
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Não lembro minhas informações de login
          </Accordion.Header>
          <Accordion.Body>
            Se você não se lembrar da sua senha, use a página de redefinição de
            senha. Se não se lembrar do seu e-mail ou nome de usuário, acesse a
            página de redefinição de senha e insira os endereços de e-mail que
            você pode ter usado para criar uma conta. Quando o endereço
            registrado no Spotify for inserido, aparecerá uma mensagem dizendo
            que o e-mail de redefinição de senha foi enviado. Observação:
            existem várias maneiras de se inscrever: usando um e-mail, um número
            de telefone, o Facebook, a Apple ou o Google. Tente fazer login
            usando essas opções para localizar sua conta.{" "}
            <a href="">Redefinir sua senha</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
);
export default About;
