const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const alumnos = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" }
];

app.get("/ms-usuario/alumno/:id", (req, res) => {
  const alumno = alumnos.find(a => a.id == req.params.id);
  res.json(alumno);
});

app.listen(3000, () => {
  console.log("ms-usuario corriendo en puerto 3000");
});