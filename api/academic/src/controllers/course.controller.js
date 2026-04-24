// src/controllers/course.controller.js
import * as courseService from "../services/course.service.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await courseService.getCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};