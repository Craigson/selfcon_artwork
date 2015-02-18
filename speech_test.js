
// var list = [];
// var recognition = new webkitSpeechRecognition();
// recognition.continuous = true;
// recognition.start(); 
// var size = 0;

// var counter = 0;
//    var i = 0;

// function getSpeech(){
// list.length = 0;

//   recognition.onresult = function(list) { 
 
//     console.log(event.results)
//     var res = event.results[i][0].transcript;
//     $('body').append(res);
//     list.push(res);
//     i++;
//   }
//   counter++;
//   console.log("repeating " + counter)
//   size = event.results
//   setTimeout(printArr,10000);
// }

// function printArr(){
//   if (recognition.Alternatives === 10){
//     console.log("this shit is full");
//   }
// }

// getSpeech();

var list = [];
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
var corpus = '';
var recognizing = false;
 recognition.lang = 'en-US'; 
recognition.start();

recognition.onstart = function(){
 //start recording the results
go();
};

recognition.onend = function(){
  console.log("ending recording");
  console.log(corpus);
  //save all of this into an array
  go();
};

function go(){
  recognition.onresult = function(event){
    var text = '';
    console.log("starting recording")
    // Assemble the transcript from the array of results
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            text += event.results[i][0].transcript;
            corpus += text;
        }
    }

    console.log("final:    " + corpus);
    list.push(text);
  };
}

/*
function start(){
go(); 
}

*/
// var list = [];

// var recognition = new webkitSpeechRecognition();
// recognition.continuous = true;

// recognition.maxAlternatives = 10;

// recognition.onresult = function(event) {

//   if (event.results.length > 0) {
//     var result = event.results[0];

//     for (var i = 0; i < result.length; ++i) {
//       var text = result[i].transcript;
//       list[i] = text;
//     }
//   }
// }

// function start() {
//   recognition.start();
// }

