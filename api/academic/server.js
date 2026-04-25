const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const inscripciones = [
  { userId: 1, materia: "Algoritmos" },
  { userId: 1, materia: "BD" }
];

app.get("/academic/usuario/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    
    const user = await axios.get(
      `https://users-api-rmm5.onrender.com/users/alumno/${userId}`
    );
    if(!userRedsponse.data){
      return res.status(404).json({
        error: "Usuario no encontrado"
      });
    }

    const materias = inscripciones.filter(i => i.userId == userId);

    res.json({
      usuario: user.data,
      materias: materias
    });

  } catch (error) {
    res.status(500).json({
      error: "Error conectando con users-service"
    });
  }
});

// 🔵 IMPORTANTE PARA RENDER
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("academic corriendo en puerto", PORT);
});