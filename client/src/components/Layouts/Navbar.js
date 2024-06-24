import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "./Container.js";
import styles from "./Navbar.module.css";
import logo from "../../img/Logo_RMBARv2-sem fundo-preview.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
      <Container>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="RM-Bar" className={styles.logo} />
          </Link>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cardapio">Cardápio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre Nós</Link>
          </li>
          <li className={styles.item}>
            <Link to="/fotos">Fotos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/enderecos">Endereços</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
          <li className={styles.itemReserva}>
            <Link to="/reserva" className={styles.reservaLink}>
              Reserva
            </Link>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <div
            className={
              isOpen ? `${styles.line1} ${styles.open1}` : `${styles.line1}`
            }
          ></div>
          <div
            className={
              isOpen ? `${styles.line2} ${styles.open2}` : `${styles.line2}`
            }
          ></div>
          <div
            className={
              isOpen ? `${styles.line3} ${styles.open3}` : `${styles.line3}`
            }
          ></div>
          {isOpen && (
            <ul className={styles.listHamburger}>
              <li className={styles.item}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.item}>
                <Link to="/cardapio">Cardápio</Link>
              </li>
              <li className={styles.item}>
                <Link to="/sobre">Sobre Nós</Link>
              </li>
              <li className={styles.item}>
                <Link to="/fotos">Fotos</Link>
              </li>
              <li className={styles.item}>
                <Link to="/enderecos">Endereços</Link>
              </li>
              <li className={styles.item}>
                <Link to="/contato">Contato</Link>
              </li>
              <li className={styles.item}>
                <Link to="/reserva">Reserva</Link>
              </li>
            </ul>
          )}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
