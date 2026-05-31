require("dotenv").config();
const jwt = require("jsonwebtoken");
const userService = require("../services/user.service");

async function login(req, res) {
  const { email, password } = req.body;
  const user = await userService.login(email, password);

  if (!user) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, rol: user.rol },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ token });
}

async function register(req, res) {
  const { nombre, email, password, rol } = req.body;
  try {
    await userService.register(nombre, email, password, rol);
    res.json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { login, register };