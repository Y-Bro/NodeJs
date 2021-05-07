const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

let toDoList = [
    {
        "task" : "create get",
        timestamp : new Date(),
        "id" : 1,
        "status" : true,
        "info" : "u succc"
    },
    {
        "task" : "create post and make task3",
        timestamp : new Date(),
        "id" : 2,
        "status" : false,
        "info" : "u really succccc"
    }   
]


app.get("/toDoList",(req,res)=>{
    
    res.send(toDoList);
    console.log("inside Get",req.params);
    
})

app.post("/createTask",(req,res)=>
{
    let newTask = req.body;
    newTask.timestamp = new Date();
    newTask.id = toDoList[toDoList.length-1].id + 1;
    console.log(newTask);
    toDoList.push(newTask);
    res.sendStatus(201).send(toDoList);

})

app.delete("/deleteTask/:id",(req,res)=>{
    console.log("inside delete", req.params.id);
    toDoList = toDoList.filter(e =>{
        return e.id !== parseInt(req.params.id);
    });
    res.sendStatus(201)
})

app.put("/updateTask/:id",(req,res)=>{
    toDoList = toDoList.map(e =>{
        if(e.id === parseInt(req.params.id))
        {
            e.task = req.body.task;
            e.timestamp = new Date();
            e.status = true;
            e.info = req.body.info;
        }
        return e;
    })
    res.sendStatus(201);
})

app.listen(8012,()=>{
    console.log("toDoList is running");
})