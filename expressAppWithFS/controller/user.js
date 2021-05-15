import {v4 as uuid} from "uuid";
import { getUserData, saveUserData } from "../service/user.js";




export const getUsers = (req,res) =>{
    const Userdata = getUserData(); // for fetchin using FS after JSON.parse
    res.send(Userdata);
} 

export const postUser = (req,res) =>{

    const existingUsers = getUserData();// for using fs to save
    let newUser = req.body;
    if(newUser.name==null || newUser.age==null){
        res.status(402).send({
            error : true,
            Message : "Include name and age"
        })
    }

    const findExisting = existingUsers.find(x=> x.name === newUser.name)
    {
        if(findExisting){
            res.status(409).send({
                error: true,
                Message : "Name exists"
            })
        }

        const id = uuid();
        existingUsers.push({...newUser,id}); 
        saveUserData(existingUsers); // for pushing new data into users.json using fs
        res.send(id);
    }
    //this is for when not using fs and using a created array
    // let newUser = req.body;
    // let id = uuid();
    // users.push({...newUser,id});
    // res.status(201).send(id);

}

export const deleteUserById = (req,res) =>
{
//THIS FOR NORMAL 
    // users = users.filter(x =>{
    //    return x.id !==req.params.id
        
    // })

    // res.sendStatus(201);
//THIS FOR USING FS

    let existingusers = getUserData();
    
    existingusers = existingusers.filter(x => x.id!== req.params.id);
    
    saveUserData(existingusers);
    res.sendStatus(201);
}

export const updateUserNameById = (req,res) =>
{
// THIS IS FOR NORMAL
//     users = users.map(x => {
//        if(x.id === req.params.id)
//        {
//            x.name = req.body.name;
//        }
//        return x;
      
        
//     })

    // res.sendStatus(201);
// THIS IS FOR FS
    let existing = getUserData();
    existing = existing.map(x => {
        if(x.id === req.params.id)
        {
            x.name = req.body.name;
        }
        return x;
    })
    saveUserData(existing);
    res.sendStatus(201);
}

//  export const postUsers = (req,res) =>
//  {
//      let newUsers = req.body;
//      users = newUsers.array.forEach(x => {
//          let id = uuid();
//         users.pushh({...x,id});  
//     });

//     res.status(201);
    
//  }

export const getUserById = (req,res) =>
{
    // THIS IS FOR NORMAL EASY EXPRESS APP
        // const user = users.find(x=>{
        //    return x.id===req.params.id;
            
        // })

        // res.send(user);
    
    //THIS IS FOR USING FILESYSTEM

    const existing = getUserData();
    console.log(existing,'ASDASDASDASDASDASDASD');
    const findbyid = existing.find(x => {
        return x.id === req.params.id;
    })
    res.send(findbyid);
}

