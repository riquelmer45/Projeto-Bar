import { FaInstagram } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Message from "../Layouts/Message";
import Styles from "./Contato.module.css";

function Contato() {
  useEffect(() => {
    // Adiciona a classe 'contatopage' ao body quando o componente Contato montar
    document.body.classList.add("contatopage");

    // Adiciona a div de overlay da Contato apenas na página inicial (Contato)
    if (window.location.pathname === "/contato") {
      const overlayContatoDiv = document.createElement("div");
      overlayContatoDiv.classList.add("overlayContato");
      document.body.appendChild(overlayContatoDiv);
    }

    // Remove a classe 'contatopage' do body quando o componente Contato desmontar
    return () => {
      document.body.classList.remove("contatopage");
      // Remove a div de overlay quando o componente Contato desmontar
      const overlayContatoDiv = document.querySelector(".overlayContato");
      if (overlayContatoDiv) {
        overlayContatoDiv.remove();
      }
    };
  }, []);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o email aqui
    console.log("Email enviado:", nome, email, mensagem);
    // Limpar os campos após o envio
    setNome("");
    setEmail("");
    setMensagem("");
    setEnviado(true);
    setErro(false);
  };

  return (
    <div className={Styles.contatoContainer}>
      <div className={Styles.contatoTitulo}>
        <h1>Deseja falar conosco?</h1>
        <p>
          Envie sua mensagem abaixo ou entre em contato por nossos canais de
          comunicação:
        </p>
      </div>
      <div className={Styles.contatoConteudo}>
        <div className={Styles.contatoCardContainer}>
          <div className={Styles.contatoCard}>
            <h3>Instagram:</h3>
            <FaInstagram
              className={Styles.instagramIcon}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/riquelmermodesto.dev/",
                  "_blank"
                )
              }
            />
            <p className={Styles.pInstragram}>RMODESTO BAR</p>
          </div>
          <div className={Styles.contatoCard}>
            <h3>Telefone:</h3>
            <p>(XX) XXXX-XXXX</p>
          </div>
        </div>

        {enviado && <Message type="success" message="Email enviado" />}
        {erro && <Message type="error" message="Erro ao enviar o email" />}

        <div className={Styles.contatoFormContainer}>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Preencha seu nome aqui"
              />
            </label>
            <br />
            <label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email..."
              />
            </label>
            <br />
            <label className={Styles.mensagem}>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Digite a mensagem..."
              />
            </label>
            <br />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
