import React from "react";
import styles from "./MenuItems.module.css";

<<<<<<< Updated upstream
const MenuItem = ({ item }) => (
  <div className={styles["menu-item"]} key={item.id}>
    <div className={styles["item-info"]}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className={styles.price}>R$ {item.price}</p>
    </div>
    <div className={styles["item-image-container"]}>
      {item.image ? (
        <img src={item.image} alt={item.name} />
      ) : (
        <p>SEM IMAGEM CORRESPONDENTE</p>
      )}
    </div>
  </div>
);
=======
const MenuItem = ({ item }) => {
  const imagePath = item.image;
  console.log(imagePath);

  return (
    <div className={styles["menu-item"]} key={item.id}>
      <div className={styles["item-info"]}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className={styles.price}>R$ {item.price}</p>
      </div>
      <div className={styles["item-image-container"]}>
        {item.image ? (
          <img src={imagePath} alt={item.name} />
        ) : (
          <p>SEM IMAGEM CORRESPONDENTE</p>
        )}
      </div>
    </div>
  );
};
>>>>>>> Stashed changes

const MenuItems = ({ menuItems, categoryId }) => (
  <div className={styles["menu-items-container"]}>
    {menuItems
      .filter((item) => item.category_id === categoryId)
      .map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
  </div>
);
export default MenuItems;
