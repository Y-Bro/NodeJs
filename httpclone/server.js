let port = 8080;
let hostname = "127.0.0.1";

var server = require("./controller/controller.js");

server.listen(port,hostname,()=>{
    console.log(`${hostname}:${port} Server start`)
})
