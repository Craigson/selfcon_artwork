//create keywords for identifying variables inside the p5 sketch
var keywords = ['color','composition'];

var changeComp = false;
var changePalette = false;

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
        changeColor();
        console.log("changing color of artwork");
      } else if (res.indexOf('composition') !== -1 && sentiment < 0.3){
        changeComp = true;
        console.log("changing composition of artwork");
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
background(240,125);
c = color(0,0,0);
}

function draw(){
  noStroke();
fill(c);
ellipse(150,150,50,50);
}

function changeColor(){
c = color(Math.floor((Math.random() * 255)),Math.floor((Math.random() * 255)),Math.floor((Math.random() * 255)));
}

function drawInitial(){

  //draw the "original" artwork here
}
