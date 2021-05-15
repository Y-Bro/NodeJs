import express from "express";
import bodyParser from "body-parser";
import userRouter from "./Router/user.js";

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get("/",(req,res) =>
{
    res.send("Home Bruh");
})

app.use("/user",userRouter);

app.listen(port,()=>
{
    console.log("Server Has started");
})