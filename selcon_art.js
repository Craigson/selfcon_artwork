// Using chrome speech API
// http://shapeshed.com/html5-speech-recognition-api/


// var recording = false;
  
var list = [];
    


var recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";

recognition.continuous = true;
      //recognition.interimResults = true;
      
function startRec(){

          var i = 0;

          recognition.start(); 
          console.log("recording...");
          
          recognition.onresult = function(event) { 
            console.log(event.results)
            for (var i = 0; i < event.results.length; i++){
            var res = event.results[0][i].transcript;
            $('body').append(res + '\n');
            // $('body').append('\n');         
            list.push(res);
            
          }
            // console.log(phrase);  
          }
}

function stopRec(){
  recognition.stop();
}


function printList(){
  console.log(list);
}
  

//record speech
//break it into sections
//run through array and check if it contains certain terms
//run sentiment analysis on sentence
//if it's negative, adjust variable in p5 sketch
//redraw p5 sketch


//below is the p5.js sketch portion

function setup(){
var myCanvas = createCanvas(600, 400);
myCanvas.parent('myContainer');
background(240);
}

function draw(){
fill(122,122,0);
ellipse(50,50,10,10);
}

/* Have different styles:
abstract
minimalist
expressionist

*/
