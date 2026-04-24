// src/services/course.service.js
import * as courseModel from "../models/course.model.js";

export const getCourses = async () => {
  return await courseModel.getAllCourses();
};