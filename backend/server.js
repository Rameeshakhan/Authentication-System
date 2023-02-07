const express = require("express")
const morgan = require("morgan")
//middle ware function

const app = express();

app.get("/", (req,res) => {
    res.status(200).json({ message: "Server syas Hello"})
})

//parses data of requests
app.use(express.json());
// log details of api requests
app.use(morgan("dev"))
const port = 5002;

app.get("/", (req,res) => {
    res.status(200).json({ message: "Server syas Hello"})
})

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})