import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";
import "./listas.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, senha });

    axios.get(`http://localhost:5000/usuarios?email=${email}`).then((rest) => {
      const usuario = rest.data;

      if (!usuario) {
        setError("Usuário Inválido");
        return;
      }

      console.log(usuario);

      if (usuario.senha != senha) {
        setError("Dados Inválidos");
        return;
      }

      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      history.push("/lista");
    });

    setTimeout(() => {
      history("/lista");
    }, 3000);
  }

  return (
    <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1>Informe seus dados e comece a curtir.</h1>

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
              <label htmlFor="senha" className="senha-cadastro">
                Informe sua senha.
              </label>
              <input
                type="senha"
                className="form-control"
                id="senha"
                placeholder="Informe sua senha."
                value={senha}
                onChange={(e) => setsenha(e.target.value)}
                required
              />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success">
                Login
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

export default Login;
