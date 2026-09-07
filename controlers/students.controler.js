import Student from "../model/students.model.js";

export const studentList = (req, res) => {
    res.send("This is students list");
};

export const cresteStudent = async (req, res) => {
    // name, registerNunber, mailId, contactNumber, course, department
    const newStudent = new Student({
        name: req.body.name,
        registerNumber: req.body.registerNumber,
        mailId: req.body.mailId,
        contactNumber: req.body.contactNumber,
        course: req.body.course,
        department: req.body.department
    })

    try {
        const student = await newStudent.save();
        return res.status(201).json(student);
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

export const updateStudent = (req, res) => {
    res.send("Student data updated");
}

export const deleteStudent = (req, res) => {
    res.send("Student data deleted");
}