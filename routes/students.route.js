import express from "express";
import {
    studentList, 
    cresteStudent, 
    updateStudent, 
    deleteStudent
} from "../controlers/students.controler.js"
const router = express.Router();

router.get("/list", studentList) // R - To read a students lists
router.post("/create", cresteStudent) // C - To create a student
router.put("/update/:id", updateStudent) // U - To update the student record
router.delete("/delete/:id", deleteStudent) // D - to delete a student record

export default router;