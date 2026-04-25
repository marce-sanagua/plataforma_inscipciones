# Plataforma de Inscripciones

Sistema para gestión de usuarios y sus inscripciones académicas.

---

## 🟢 Users Service

Servicio que gestiona los alumnos.

- URL:
  https://users-api-rmm5.onrender.com

- Endpoint:
  GET /users/alumno/:id  
  → Devuelve un alumno por su ID

Ejemplo:
https://users-api-rmm5.onrender.com/users/alumno/1

Respuesta:
```json
{
  "id": 1,
  "nombre": "Juan"
}
🟢 Academic Service

Servicio que consulta usuarios y devuelve sus materias inscriptas.

URL:
https://academic-api-oj98.onrender.com
Endpoint:
GET /academic/usuario/:id
→ Devuelve usuario + materias

Ejemplo:
https://academic-api-oj98.onrender.com/academic/usuario/1

Respuesta:

{
  "usuario": {
    "id": 1,
    "nombre": "Juan"
  },
  "materias": [
    { "userId": 1, "materia": "Algoritmos" },
    { "userId": 1, "materia": "BD" }
  ]
}
 Casos de prueba
ID 1 → usuario con materias
ID 2 → usuario sin materias
ID 3 → usuario no encontrado

 Tecnologías
Node.js
Express
Axios
CORS
Render
GitHub