import express from "express";
import studentRouts from "./routes/students.route.js"
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

// DB connection
connectDB();


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