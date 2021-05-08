import express from "express";
import bodyParser from "body-parser";
import userRouting from "./router/user.js";

const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Landing Page");
}) 

app.use("/user",userRouting);


app.listen(port,()=>{
    console.log("server start");
})