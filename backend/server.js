const express = require("express");
const app = express();
const students = {
    "stud1" : {
        "name" : "Bharath",
        "age" : "21"
    },
    "stud2": {
        "name" : "Loree",
        "age" : "22"
    },
    "stud3" : {
        "name" : "BL",
        "age" : "69"
    },
}


app.get("/",(req,res) =>{
    res.status(403).send("wowowwowoowoowowo");
})

app.get("/pathA",(req,res)=>{
    res.send(students.stud1);
})

app.get("/pathB",(req,res)=>{
    res.send(students.stud3);
})

app.listen(8080,()=> console.log("Express app is running"));