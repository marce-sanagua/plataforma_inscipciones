require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const verifyToken = require("./src/middlewares/verifyToken");

const app = express();
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'https://plataforma-inscripciones-frontend.vercel.app',
    'https://academic-api-oj98.onrender.com',
    'https://frontend-plataforma-one.vercel.app'
  ]
}));
app.use(express.json());

const authRoutes = require("./src/routes/auth.routes");
app.use("/auth", authRoutes);

const getUsuarios = () => {
  const filePath = path.join(__dirname, "src/data/usuarios.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

// GET público
app.get("/usuarios", (req, res) => {
  res.status(200).json(getUsuarios());
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = getUsuarios().find(u => u.id == req.params.id);
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  res.status(200).json(usuario);
});

// POST protegido con JWT
app.post("/usuarios", verifyToken, (req, res) => {
  const { nombre, email, password, rol } = req.body;
  const usuarios = getUsuarios();
  const nuevo = { id: usuarios.length + 1, nombre, email, password, rol };
  usuarios.push(nuevo);
  const filePath = path.join(__dirname, "src/data/usuarios.json");
  fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
  res.status(201).json(nuevo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("users corriendo en puerto", PORT));