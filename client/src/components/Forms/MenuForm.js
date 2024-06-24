import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./MenuForm.module.css";

const MenuForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [categories, setCategories] = useState([]);
  const [category_id, setcategory_id] = useState(categories[0]?.id || null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setCategories(response.data);
        setcategory_id(response.data[0]?.id);
      })
      .catch((error) => {
        console.error("Não foi possivel recuperar os dados!", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category_id", category_id);
    formData.append("image", image);

    axios
      .post("http://localhost:5000/menu", formData)
      .then((response) => {
        console.log(response.data);
        setName("");
        setPrice("");
        setDescription("");
        setImage(null);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={Styles.pageContainer}>
      <form onSubmit={handleSubmit} className={Styles.formContainer}>
        <div className={Styles.titleContainer}>
          <h1>Cadastrar prato no Cardapio</h1>
        </div>
        <div className={Styles.inputContainer}>
          <br />
          <div>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className="input-group">
            <label>
              Preço:
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className={Styles.imputImg}>
            <label>
              Imagem:
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <br />
          <div className="input-group">
            <label>
              Descrição:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div className={Styles.categoriesContainer}>
            <div className="input-group">
              <label>
                Categoria:
                <select
                  value={category_id}
                  onChange={(e) => setcategory_id(Number(e.target.value))}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <br />
            <div className={Styles.idLabel}>
              <label>
                ID:
                <input type="text" value={category_id} disabled />
              </label>
            </div>
          </div>
          <br />
        </div>
        <input type="submit" value="Enviar" className={Styles.submitBtn} />
      </form>
    </div>
  );
};

export default MenuForm;
