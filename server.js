var servi = require('servi');
var app = new servi(true);

port(8005);

route('/', requestHandler);

serveFiles("public");
// function requestHandler(request){
// 	request.respond("Hello World");
// }

start();