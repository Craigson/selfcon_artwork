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

recognition.onend = function(event){
  console.log(list);
  //save all of this into an array
  go();
};

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
  recognition.onresult = function(event){

    var text = '';
    console.log("starting recording")
    // Assemble the transcript from the array of results
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            text += event.results[i][0].transcript;
            // corpus += text;
        }
    }

    console.log("adding to array");
    list.push(text);
    if (list.length > 4){
    console.log("it's full");
      getSentiment(list);
    }
  };
}

//not sure on using list parameter here
function getSentiment(list){

console.log("making api call");
/*
  var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';
  var obj = {};

  for (var i = 0; i < list.length; i++){
    params.text = list[i];

    $.getJSON(url, params, function(data) {
      console.log(typeof data);
      obj = data;
      console.log(typeof obj);
      console.log(data);
      // $('body').append(res+' ('+data.docSentiment.type+':'+data.docSentiment.score+')<br>');
      var sentiment = data.docSentiment.score;
    });

 
    
    if (res.indexOf('color') !== -1 && sentiment < 0){
        changePalette = true;
      } else if (res.indexOf('composition') !== -1 && sentiment < 0){
        changeComp = true;
      }
  }

  console.log("was: " + changePalette + " " + changeComp + " " + list.length)
  changeVariables();
  changePalette = false;
  changeComp = false;
  list.length = 0;   
  console.log("is now: " + changePalette + " " + changeComp + " " + list.length)

  */
}

function changeVariables(){
//code in here to change p5 sketch
console.log("changing the painting now");

}

