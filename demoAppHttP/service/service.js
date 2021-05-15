const url = require('url')
exports.getUser= function(req, res){
    const reqUrl= url.parse(req.url, true);
    var userName="Govind"
    var response = {
        "text": "Hello" + userName
    }
    res.statusCodes=200;
    res.setHeader('Content-Type','application/json')
    res.write("--------------Inside service getUser---------------");
    res.end(JSON.stringify(response))
};
exports.addUser=function (req, res){
    console.log("HERE 14");
    body=''
    console.log("HERE 16");
    console.log(body+"body 17 empty");
    req.on('data', function(chunk){
        console.log("HERE 19");
        console.log(body+"body 20");
        console.log(chunk+"chunk 21");
        body+=chunk;
        console.log("HERE 4");
        
        
    })
    console.log("HERE 5");
    req.on('end',function(){
        console.log("HERE 7");
        console.log("asdasd");
        postBody = JSON.parse(body);
        console.log("HERE 8");
        
        var response={
            "text": "Post response value is "+ postBody.value
        }
        console.log("HERE 9");
        res.statusCodes=201;
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify(response))
    });
}
exports.invalidRequest=function(req,res){
    res.statusCodes=404;
    res.setHeader('Content-Type','text/plain');
    res.end('Invalid Request')
}