import {Schema, model} from "mongoose";

const studentSchema = new Schema ({
    name: String,
    registerNumber: String,
    mailId: String,
    contactNumber: String,
    course: String,
    department: String
})

const Student = model("student", studentSchema);

export default Student;