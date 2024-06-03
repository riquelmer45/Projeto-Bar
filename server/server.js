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

//configuração para tratamento das imagens
const multer = require("multer");
const path = require("path");

const dir = path.join(__dirname, "../client/public/Image/Menu");

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
    req.tempFilePath = path.join(dir, uniqueSuffix); // Armazenar o caminho temporário no objeto req
  },
});

const upload = multer({ storage }); // Import the 'upload' variable

// configuração express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Servidor BACKEND rodando!");
});

//configuração para recuperar as informações do banco de dados
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

// Rota para adicionar item ao menu

app.post("/menu", upload.single("image"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  try {
    const { name, price, description, category_id } = req.body;
    const image = path.join("/Image/Menu", path.basename(req.file.path)); // Transforma o caminho absoluto em um caminho relativo
    console.log(req.body.category_id);
    const category_idNumber = category_id ? Number(category_id) : null;
    const newItem = await Menu.create({
      name,
      price,
      description,
      image,
      category_id: category_idNumber,
    });
    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao adicionar item ao menu" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
