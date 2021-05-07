const http = require('http')
const url = require('url')

module.exports=http.createServer((req, res)=> {
    // console.log(req)
    // console.log("_______________-printing res_______________")
    // console.log(res)

    var service = require('../service/service');
    var reqUrl = url.parse(req.url, true)

    if(reqUrl.pathname == '/user' && req.method=='GET'){
        service.getUser(req, res)
    } else if (reqUrl.pathname == '/user' && req.method=='POST'){
        console.log("In post req")
       service.addUser(req, res)
    }else{
        service.invalidRequest(req,res)
    }
}
)