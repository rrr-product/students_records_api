import express from "express";

const app = express();


app.get("/",(req, res) => {
    res.json({
        msg: "Hello Everyone"
    })
})

app.listen(6969, () => {
    console.log(`Server is running in http//localhost:${6969}`)
})