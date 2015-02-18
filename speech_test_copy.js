var list = [];

// var keyWords = [{
//     key: 'color',
//     sentiment: 0
//   },
//   {
//     key: 'composition',
//     sentiment: 0
//   }];

var keywords = ['color','composition'];

var changeComp = false;
var changePalette = false;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
var corpus = '';
recognition.lang = 'en-US'; 
recognition.start();

//create object containing parameters for AlchemyAPI request
var params = {
  text: '',
  apikey: '0a6f695b7fd0be6f448bd17293560398eb8890fe',
  outputMode: 'json'
}

recognition.onspeechstart = function(event){
console.log("speech has started");
go();
};

recognition.onspeechend = function(event){
  console.log("it's over");
go();
};

function go(){

  console.log("go() being called");
  var i = 0;


  recognition.onresult = function(event){

    var res = event.results[i][0].transcript;
    var sentiment = 0;
    
    var params = {
      text: res,
      apikey: 'YOUR_KEY',
      outputMode: 'json'
    }

    var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';

    console.log("making api call");
    $.getJSON(url, params, function(data) {
      // $('body').append(res+' ('+data.docSentiment.type+':'+data.docSentiment.score+')<br>');
      sentiment = data.docSentiment.score;
      console.log("text: " + res);
      console.log("sentiment: "+ sentiment);
    });

    if (res.indexOf('color') !== -1 && sentiment < 0){
        changePalette = true;
        console.log("changing color of artwork");
      } else if (res.indexOf('composition') !== -1 && sentiment < 0){
        changeComp = true;
        console.log("changing composition of artwork");
    }

    i++;
  };
}

 
    
/*

  console.log("was: " + changePalette + " " + changeComp + " " + list.length)
  changeVariables();
  changePalette = false;
  changeComp = false;
  console.log("is now: " + changePalette + " " + changeComp + " " + list.length)
*/


function changeVariables(){
//code in here to change p5 sketch
console.log("changing the painting now");

}

