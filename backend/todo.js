const express = require("express");
const app = express();
 
app.use(express.urlencoded( {extended: true }));
app.use(express.json());
 
 
let todos = [{
    id:1,
    text:"I need to learn nodeJS",
    status:false, //not DONE
    timestamp: new Date()
},{
    id:2,
    text:"I need to learn reactJS",
    status:true, // DONE
    timestamp: new Date()
}];
 
app.get("/todos",(req,res)=>{
    res.send(todos);
})
 
 
app.delete("/todo/:todoID",(req,res)=>{
    console.log(req.params.todoID);
    todos = todos.filter(e => e.id !== parseInt(req.params.todoID));// id to delete from todos
    console.log(todos);
    res.sendStatus(200);
})
//update
app.put("/todo/:todoID",(req,res)=>{
    console.log(req.params);
    
})
 
 
 
 
app.get("/todo",(req,res)=>{
    console.log("this is running");
    // res.send(200);
    console.log("checkout the params: ",req.params);
    res.sendStatus(200);
})
 
// app.put()
 
app.post("/todo",(req,res)=>{
    const newTodo = req.body;
    newTodo.timestamp = new Date();
    newTodo.id = todos[todos.length - 1].id + 1;
    todos.push(newTodo);
    console.log(todos);
    res.status(201).send(todos);
})
 
app.listen(8000, ()=>{
    console.log("the server is runnning!");
});