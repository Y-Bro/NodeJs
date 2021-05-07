const hostname = "127.0.0.1";
const port = 8080;

const server = require("./controller/controller");

server.listen(port,hostname,()=>{
    console.log(`Server started at port: ${port} and url: ${hostname}`);
})