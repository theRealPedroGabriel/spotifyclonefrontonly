import { useNavigate } from "react-router-dom";
import "./listas.css";
import "./Cadastro.css";
import React, { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, emailConf, username, password });

    if (email !== emailConf) {
      setError("Os e-mails não correspondem");
      return;
    }

    axios.post("http://localhost:5000/usuarios", {
      nome: username,
      email: email,
      senha: password,
    });

    setEmail("");
    setEmailConf("");
    setUsername("");
    setPassword("");
    setError("");
    setError("Cadastro Realizado com Sucesso");

    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }

  return (
    <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1>Inscreva-se grátis e comece a curtir.</h1>

            <div className="form-group mb-3">
              <label htmlFor="email" className="email-cadastro">
                Qual o seu e-mail?
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Insira seu e-mail."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email-confirmacao" class="email-confirmacao">
                Confirme seu e-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="emailConf"
                placeholder="Insira o e-mail novamente."
                value={emailConf}
                onChange={(e) => setEmailConf(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password" className="password-cadastro">
                Crie uma senha.
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Crie uma senha."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="username" className="username-cadastro">
                Como devemos chamar você?
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Insira um nome de perfil."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success">
                Inscrever-se
              </button>
              {error && (
                <p
                  className={
                    error.includes("não correspondem")
                      ? "error-message"
                      : "success-message"
                  }
                >
                  {error}
                </p>
              )}
            </div>
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
    </div></section>
  );
}

export default Cadastro;
