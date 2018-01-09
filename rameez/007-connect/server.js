var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response, next){
    console.log("User requested profile");
    next();
}

function About(request, response, next) {
    console.log("User requested About");
    next();
}
app.use('/profile', profile);
app.use('/About', About);

http.createServer(app).listen(3000);
console.log("Server is Running...");
