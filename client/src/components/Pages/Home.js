import React, { useEffect } from "react";
import styles from "./Home.module.css";
import LinkButton from "../Layouts/LinkButton.js"; // Add the missing import statement

function Home() {
  useEffect(() => {
    // Adiciona a classe 'homepage' ao body quando o componente Home montar
    document.body.classList.add("homepage");

    // Adiciona a div de overlay da home apenas na página inicial (home)
    if (window.location.pathname === "/") {
      const overlayHomeDiv = document.createElement("div");
      overlayHomeDiv.classList.add("overlayHome");
      document.body.appendChild(overlayHomeDiv);
    }

    // Remove a classe 'homepage' do body quando o componente Home desmontar
    return () => {
      document.body.classList.remove("homepage");
      // Remove a div de overlay quando o componente Home desmontar
      const overlayHomeDiv = document.querySelector(".overlayHome");
      if (overlayHomeDiv) {
        overlayHomeDiv.remove();
      }
    };
  }, []);

  return (
    <section className={styles.home_container}>
      <div className={styles.content}>
        <p className={styles.slogan}>
          A melhor experiência em drinks e petiscos!
        </p>
        <button className={styles.link_button}>Reserve Já</button>
        <LinkButton to="/reservar" text="Reservar Mesa" />
      </div>
    </section>
  );
}

export default Home;
