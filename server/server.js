const express = require("express");
const cors = require("cors");
const Menu = require("./models/Menu");
const Categories = require("./models/Categories");

const app = express();
const port = 5000;

// configuração de comunicação entre https pelo cors
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// configuração express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Servidor BACKEND rodando!");
});

app.get("/menu", async (_req, res) => {
  try {
    const menu = await Menu.findAll();
    res.json(menu);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Erro ao recuperar os dados de menu de cardapio" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao recuperar os dados de categorias" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
