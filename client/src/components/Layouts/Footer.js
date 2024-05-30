import { FaInstagram, FaSnapchatGhost, FaFacebook } from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <FaInstagram
            onClick={() =>
              window.open("https://www.instagram.com/seuinstagram", "_blank")
            }
          />
        </li>
        <li>
          <FaSnapchatGhost
            onClick={() =>
              window.open("https://www.snapchat.com/seusnapchat", "_blank")
            }
          />
        </li>
        <li>
          <FaFacebook
            onClick={() =>
              window.open("https://www.facebook.com/seufacebook", "_blank")
            }
          />
        </li>
      </ul>
      <p className={style.copy_right}>
        <span>Nome do seu bar</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
