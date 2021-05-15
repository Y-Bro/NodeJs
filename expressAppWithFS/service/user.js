import fs from 'fs';

export const getUserData = () =>{
    const jsonData = fs.readFileSync("C:\\Users\\yerru\\OneDrive\\Desktop\\NodeJs\\expressAppWithFS\\dataFiles\\users.json");
    // console.log(jsonData);
    // console.log(JSON.parse(jsonData));
    return JSON.parse(jsonData);

}

export const saveUserData = (data) =>{

        // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",data);
        const stingifiedData = JSON.stringify(data);
        // console.log(stingifiedData);
        fs.writeFileSync("C:\\Users\\yerru\\OneDrive\\Desktop\\NodeJs\\expressAppWithFS\\dataFiles\\users.json",stingifiedData);
}