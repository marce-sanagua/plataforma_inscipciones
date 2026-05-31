const express = require("express");
const axios = require("axios");

const router = express.Router();


const inscripciones = [
  { userId: 1, materia: "Algoritmos" },
  { userId: 1, materia: "BD" }
];

router.get("/usuario/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await axios.get(
        `https://users-api-rmm5.onrender.com/usuarios/${userId}`
    );

    const materias = inscripciones.filter(i => i.userId == userId);

    res.json({
      usuario: user.data,
      materias
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;