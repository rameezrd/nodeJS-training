
var http = require('http');

function onRequest(request,response){
    console.log("A user made Request" + request.url);
    response.writeHead(200,{"Context-type": "text/plain"});
    response.write("Here is your data");
    response.end();
}
http.createServer(onRequest).listen(3000);
console.log("Server is running...");
