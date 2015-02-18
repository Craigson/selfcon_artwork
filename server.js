var servi = require('servi');
var app = new servi(true);

//new server stuff


//
port(8005);

route('/', requestHandler);

serveFiles("public");
// function requestHandler(request){
// 	request.respond("Hello World");
// }

start();	



//psuedo-code

/*
- open browser and load website
- artwork is drawn to screen
- microphone starts recording
- speech-to-text records 5 sentences
- these 5 sentences are sent to the server
- the server sends a response indicating that it client can start recording again
- client starts recording
- server searches each sentence for keyWords pertaining to the artwork
- if the server finds a keyword in a sentence, example "colour", it runs sentiment analysis on that sentiment, if not it returns null
- the array is sent back to the client
- client receives new array of objects containing keywords and sentiments
- client loops through array and adjusts variables linked to keywords
- p5 adjusts sketch based on new variables


*/