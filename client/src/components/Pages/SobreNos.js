import React, { useEffect } from "react";
import devImg from "../../img/riquelmer_modesto.jpeg";
import Styles from "./SobreNos.module.css";
import { FaReact, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";

function SobreNos() {
  useEffect(() => {
    document.body.classList.add("sobrenospage");

    if (window.location.pathname === "/sobre") {
      const overlaySobreNosDiv = document.createElement("div");
      overlaySobreNosDiv.classList.add("overlaySobreNos");
      document.body.appendChild(overlaySobreNosDiv);
    }
    return () => {
      document.body.classList.remove("sobrenospage");
      const overlaySobreNosDiv = document.querySelector(".overlaySobreNos");
      if (overlaySobreNosDiv) {
        overlaySobreNosDiv.remove();
      }
    };
  });

  return (
    <div className={Styles.mainContainer}>
      <h1>Sobre Nós</h1>
      <p>Bem-vindo à nossa página "Sobre Nós"!</p>
      <p>
        Este é um projeto de um crud para portfolio, aplicando estudos de
        javascript, react, bibliotecas do node e sql.
      </p>
      <div className={Styles.cardContainer}>
        <img src={devImg} alt="Riquelmer Modesto" />
        <p>Desenvolvedor</p>
        <div className={Styles.Conhecimentos}>
          <FaJs />
          <FaReact />
          <FaNodeJs />
          <FaDatabase />
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
