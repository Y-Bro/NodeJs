const url = require("url");
exports.getUser= function(req,res){
    const reqUrl = url.parse(req.url,true);
    var userName = "what";
    var response = {
        "Responsetext" : "this response" + userName
    }
    res.statusCodes = 200;
    res.end(JSON.stringify(response));

    
}

exports.postUser = function(req,res){
    let body = "";
    req.on('data',function(chunk){
        body+=chunk;
    })

    req.on('end',function(){
        postBody = JSON.parse(body);

        var response = {
            "fezt" : "response" + postBody.value
        }

        res.statusCodes=201;
        res.end(JSON.stringify(response));
    })

}

exports.invalidRequest = function(req,res){
        res.statusCodes=403;
        res.end("INVALID");
}