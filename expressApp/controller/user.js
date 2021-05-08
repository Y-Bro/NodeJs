let users = [];

export const getUsers = (req,res) =>{
    res.status(200).send(users);
    console.log("INISDE getUsers");
}