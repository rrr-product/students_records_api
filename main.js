import express from "express";
import studentRouts from "./routes/students.route.js"

const app = express();
const PORT = 6969


app.get("/",(req, res) => {
    res.json({
        msg: "Hello Everyone"
    })
})

// CRUD Operation for Students record

app.use("/student", studentRouts);

app.listen(PORT, () => {
    console.log(`Server is running in http//localhost:${PORT}`)
})