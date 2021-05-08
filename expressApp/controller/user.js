import {v4 as uuid} from 'uuid';
let users = [
   
];

export const getUsers = (req,res) =>{
    res.status(200).send(users);
}

export const postUsers = (req,res) =>{
    let newUser = req.body;
    let id = uuid();
    users.push({...newUser,id : id});
    res.status(201).send(id);
}

export const getUserById = (req,res) =>{
    let id = req.params.id;
    console.log(id);
    const user = users.find(user =>{
        return user.id === id;
    })
    res.status(200).send(user);
}

export const deleteUserById = (req,res) => {
    users = users.filter(user =>{
       return user.id!==req.params.id;
    })
    res.sendStatus(201);
}

export const patchNameById = (req,res) =>{
    const user = users.find(x =>{
        return x.id === req.params.id;
    })
    user.Name = req.body.name;
    res.sendStatus(201);
}

export const updateById = (req,res) =>{
    users = users.map(e=>{
        if(e.id === req.params.id)
        {
            e.Name = req.body.Name;
            e.Age = req.body.age;
            e.Engineer = req.body.Engineer;
            e.hobbies = req.body.hobbies;
        }
        return e;
    })

    res.sendStatus(201);
}