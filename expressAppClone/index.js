import express from "express";
import bodyParser from "body-parser";
import movieRoute from "./router/movie.js"

const PORT = 8000;
const app = express();
app.use(bodyParser.json());

app.get("/",(req,res)=>
{
    res.send("Landing Da");
})

app.use("/movie",movieRoute)

app.listen(PORT,()=>
{
    console.log("Server started");
})