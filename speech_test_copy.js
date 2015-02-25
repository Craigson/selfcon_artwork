//create keywords for identifying variables inside the p5 sketch
var keywords = ['color','composition','layout','bright','brightness','dark','saturated'];

var paletteMult;
var r = [];
var g = [];
var b = [];
var rad = [];
var numCircles;
var x = [];
var y = [];
var selector;

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
          } else if ((res.indexOf('composition') !== -1 || res.indexOf('layout') !== -1) && sentiment < 0.3){
            console.log("changing composition of artwork");
            changeComp();
           } else {
              console.log("No keywords detected in: "+ res);
          }
    });

    i++;
  }
}

function stopRec(){
  recognition.stop();
}
 
function setup(){
  var myCanvas = createCanvas(640, 480);
  myCanvas.parent('myContainer');
  devicePixelScaling(false);
  numCircles = 30;
  paletteMult = Math.floor((Math.random() * 5)+1);

  selector = Math.floor((Math.random() * 3) + 1);

console.log(selector);
  for (var i = 0; i < numCircles; i++){
    r[i] = Math.floor((Math.random() * 40));
    g[i] = Math.floor((Math.random() * 40));
    b[i] = Math.floor((Math.random() * 40));
    rad[i] = Math.ceil((Math.random() * 100));
    x[i] = Math.ceil((Math.random() * (width-rad[i])) + rad[i]);
    y[i] = Math.ceil((Math.random() * (height-rad[i])) + rad[i]);
    if (selector == 1){
      r[i] += 50;
    } else if (selector == 2){
      g[i] += 50;
    } else {
      b[i] += 50;
    }
  }
//console.log(paletteMult);
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
    noStroke();
    ellipse(x[j], y[j], rad[j], rad[j]);
  }
  strokeWeight(12);
  stroke(80);
line(0,0,width,0);
line(width,0,width,height);
line(width,height,0,height);
line(0,height,0,0);
}

//change the color of the composition. by passing the sentiment as a selector, we can make the 
//change more drastic for a higher score, ie. < -0.5
function changeColor(a){
paletteMult = Math.floor((Math.random() * 5)+1);
    // for (var i = 0; i < numCircles; i++){
    //   if (selector == 1){
    //     r[i] -= 100;
    //   } else if (selector == 2){
    //     g[i] -= 100;
    //   } else {
    //     b[i] -= 100;
    //   }
    // }
}

function makeDarker(){
  for (var i = 0; i < numCircles; i++){
    r[i] -= 50;
    g[i] -= 50;
    b[i] -= 50;
  }
}

function changeComp(a){
  numCircles = Math.floor((Math.random() * 50));
  console.log(numCircles);
    for (var i = 0; i < numCircles; i++){
    rad[i] = Math.ceil((Math.random() * 100));
    x[i] = Math.ceil((Math.random() * (width-rad[i])) + rad[i]);
    y[i] = Math.ceil((Math.random() * (height-rad[i])) + rad[i]);
  }
}



