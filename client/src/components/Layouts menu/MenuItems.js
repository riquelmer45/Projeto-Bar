import React from "react";
import styles from "./MenuItems.module.css";

const MenuItem = ({ item }) => {
  const imagePath = item.image;
  console.log(imagePath);

  return (
    <div className={styles.menuItem} key={item.id}>
      <div className={styles.itemInfo}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className={styles.price}>R$ {item.price}</p>
      </div>
      <div className={styles.itemImageContainer}>
        {item.image ? (
          <img src={imagePath} alt={item.name} />
        ) : (
          <p>SEM IMAGEM CORRESPONDENTE</p>
        )}
      </div>
    </div>
  );
};

const MenuItems = ({ menuItems, categoryId }) => (
  <div className={styles.menuItemsContainer}>
    {menuItems
      .filter((item) => item.category_id === categoryId)
      .map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
  </div>
);
export default MenuItems;
