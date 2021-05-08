const http = require("http");
const url = require("url");

module.exports = http.createServer((req,res)=>{
    var reqUrl = url.parse(req.url,true);
    var service = require("../service/service.js");

    if(reqUrl.pathname=="/user" && req.method=="GET")
    {
        service.getUser(req,res);
    }
    else if(reqUrl.pathname =="/user" && req.method == "POST")
    {
        service.postUser(req,res);
    }
    else{
        service.invalidRequest(req,res);
    }
})