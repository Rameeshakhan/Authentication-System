const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const appError = require("../backend/utils/appError")
const globalErrorController = require("./controllers/globalError")

//middle ware function

const app = express();
dotenv.config({path: "./config.env"})

const db = process.env.DATABASE_URI.replace("<PASSWORD>",process.env.DATABASE_PASSWORD)

//connect to database
mongoose.connect(db).then(() =>{
    console.log("Databse Connected")
})

//parses data of requests
app.use(express.json());
// log details of api requests like "GET / 200 8.627 ms - 31"
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}

const port = process.env.PORT || 5003;


//routes
const userRoute = require("./routes/userRoutes")
app.use("/api/v1/Users", userRoute);

app.get("/", (req,res) => {
    res.status(200).json({ message: "Server syas Hello"})
})

//handle unhandled routes
//all represents all post get delete put
// * represents all routes
app.all("*",(req,res,next)=> {
   
    // const err = new Error(`Cant find routes ${req.originalUrl}`)
    // err.statusCode = 404,
    // err.status = "Fail"

    next( new appError(`Cant find routes ${req.originalUrl}`,404));
})

//global error handler
app.use(globalErrorController)

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})