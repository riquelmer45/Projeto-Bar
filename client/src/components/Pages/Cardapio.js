import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItems from "../Layouts menu/MenuItems";
import styles from "./Cardapio.module.css";

const Cardapio = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Não foi possivel recuperar os dados!", error);
      });

    axios
      .get("http://localhost:5000/menu")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("Não foi possivel recuperar os dados!", error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles["cardapio-nav"]}`);
      if (window.pageYOffset > 0) {
        navbar.classList.add(`${styles["sticky"]}`);
      } else {
        navbar.classList.remove(`${styles["sticky"]}`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["cardapio-container"]}>
      <nav>
        <ul className={styles["cardapio-nav"]}>
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`#category-${category.id}`}>{category.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {categories &&
        categories.map((category) => (
          <div id={`category-${category.id}`} key={category.id}>
            <div className={styles["cardTitle"]}>
              <h2>{category.name}</h2>
            </div>
            <div className={styles["menuItems"]}>
              <MenuItems menuItems={menuItems} categoryId={category.id} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cardapio;
