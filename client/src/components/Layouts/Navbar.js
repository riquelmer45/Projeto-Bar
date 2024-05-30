import { Link } from "react-router-dom";
import Container from "./Container.js";
import styles from "./Navbar.module.css";
import logo from "../../img/Logo_RMBARv2.png";

function Navbar() {
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
          <li className={styles.item}>
            <Link to="/reserva" className={styles["btn-link"]}>
              Reserva
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
