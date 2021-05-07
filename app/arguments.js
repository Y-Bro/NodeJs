// function print()
// {
//     console.log(arguments);
// }

// print("beer",12,false);
// console.log("---------------------------------");
// console.log(arguments);
console.log("arguments.js has been eexx");
exports.name = "Broot";
exports.age = 21;
console.log(exports);

module.exports=
{
    isEven:(x) =>{
        if(x%2===0)
        {
            console.log("even");
        }
        else{
            console.log("odd");
        }
    }
}

