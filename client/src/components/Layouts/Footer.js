import {
  FaInstagram,
  FaSnapchatGhost,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <FaInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/riquelmermodesto.dev/",
                "_blank"
              )
            }
          />
        </li>
        <li>
          <FaGithub
            onClick={() =>
              window.open(
                "https://github.com/riquelmer45/Projeto-Bar",
                "_blank"
              )
            }
          />
        </li>
      </ul>
      <p className={style.copy_right}>
        <span>RMODESTO BAR</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
