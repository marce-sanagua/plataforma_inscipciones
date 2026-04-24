// src/app.js
import express from "express";
import courseRoutes from "./routes/course.routes.js";

const app = express();

app.use(express.json());
app.use("/courses", courseRoutes);

export default app;