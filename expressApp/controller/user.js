
let users = [
    {
        "Name" : "Bharath",
        "Age" : "20",
        "id" : 1
    }
];

export const getUsers = (req,res) =>{
    res.status(200).send(users);
    console.log("INISDE getUsers");
}

export const postUsers = (req,res) =>{
    let newUser = req.body;
    newUser.id = users[users.length-1].id + 1;
    users.push(newUser);
    res.sendStatus(201);
}