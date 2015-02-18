//create keywords for identifying variables inside the p5 sketch
var keywords = ['color','composition'];

var paletteMult;
var r = [];
var g = [];
var b = [];
var rad = [];
var numCircles;
var x = [];
var y = [];

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US'; 
recognition.start();


//when speech is detected, 
recognition.onspeechstart = function(event){
console.log("speech has started");
go();
};


function go(){

  console.log("go() being called");
  var i = 0;


  recognition.onresult = function(event){

    var res = event.results[i][0].transcript;
    var sentiment = 0;
    
    //create object containing parameters for AlchemyAPI request
    var params = {
      text: res,
      apikey: '0a6f695b7fd0be6f448bd17293560398eb8890fe',
      outputMode: 'json'
    }

    var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';

    console.log("making api call");
    $.getJSON(url, params, function(data) {
      sentiment = data.docSentiment.score;
      // console.log("text: " + res);
      // console.log("sentiment: "+ sentiment);
      if (res.indexOf('color') !== -1 && sentiment < 0.3){
        console.log("changing color of artwork");
        changeColor();
      } else if (res.indexOf('composition') !== -1 && sentiment < 0.3){
        console.log("changing composition of artwork");
        changeComp();
       } else {
          console.log("No keywords detected in: "+ res);
      }
    });



    i++;
  };
}

function stopRec(){
  recognition.stop();
}
 
function setup(){
  var myCanvas = createCanvas(800, 600);
  myCanvas.parent('myContainer');
  numCircles = 30;
  paletteMult = Math.floor((Math.random() * 5)+1);

  for (var i = 0; i < numCircles; i++){
    r[i] = Math.floor((Math.random() * 51));
    g[i] = Math.floor((Math.random() * 51));
    b[i] = Math.floor((Math.random() * 51));
    rad[i] = Math.ceil((Math.random() * 60));
    x[i] = Math.ceil((Math.random() * (width-rad[i])) + rad[i]);
    y[i] = Math.ceil((Math.random() * (height-rad[i])) + rad[i]);
  }
console.log(paletteMult);
}
// console.log(r);
// console.log(g);
// console.log(b);
// console.log(rad);
// console.log(x);
// console.log(y);


function draw(){
background(255);
  for (var j = 0; j < numCircles; j++){
    fill(r[j] * paletteMult, g[j] * paletteMult, b[j] * paletteMult);
    ellipse(x[j], y[j], rad[j], rad[j]);
  }
}

function changeColor(){
paletteMult = Math.floor((Math.random() * 5)+1);
}

function changeComp(){
  numCircles = Math.floor((Math.random() * 50));
  console.log(numCircles);
    for (var i = 0; i < numCircles; i++){
    rad[i] = Math.ceil((Math.random() * 60));
    x[i] = Math.ceil((Math.random() * (width-rad[i])) + rad[i]);
    y[i] = Math.ceil((Math.random() * (height-rad[i])) + rad[i]);
  }
}



