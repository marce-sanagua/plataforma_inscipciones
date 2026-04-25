const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const alumnos = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" }
];

app.get("/users/alumno/:id", (req, res) => {
  const alumno = alumnos.find(a => a.id == req.params.id);
  res.json(alumno);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("users corriendo en puerto", PORT);
});