//all global variables here
var list = [];
var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false; //this allowsus to append to the array at every pause
recognition.start();
 

function createList(){

    //get the function to return an array
    if (arr.length < 5){

      recognition.onresult = function(event) { 

          for (var i = 0; i < 5; i++) {
              if (event.results[i].isFinal) {
                var res = event.results[i][0].transcript;
                  $('#topics').append(res);
                  // $('body').append('\n');         
                  arr.push(res);            
              }
          }
      } 
    } else {
        list = arr;
        arr.length = 0;
      }

}


recognition.onend = function {

  //possibly send the data to the server
}          



function printList(){
  console.log(list);
  console.log(list.length);
}
  


// //this part handles the request to the server
// function server()
// {
//    xmlhttp = new XMLHttpRequest();
//    xmlhttp.open("GET","http://localhost:8001/getSentiment", true);
//    xmlhttp.onreadystatechange=function(){
//          if (xmlhttp.readyState==4 && xmlhttp.status==200){
//            string=xmlhttp.responseText;
//          }
//    }
//    xmlhttp.send();
// }

// $.ajax({
//   type: 'GET',
//   url:'/getSentiment',
//   success: function(data){
//     console.log('success', data);
//      this code cycles through the array of data and executes a function, where i is the index
//     $.each(data, function(i,data){
//       //send this data as variables to p5
//     });
    
//   },
//   error: function(){
//     alert('no data returned');
//   }
// });

// var action = {
//   category: $category.val(), //this determines which variable to change, ie composition or palette etc
//   rating: $rating.val() //is it positive or negative?
// };

// $.ajax({
//   type: 'POST',
//   url: '/getSentiment',
//   data: action,
//   success: function(newAction){
//     //perform necessary action
//   },
//   error: function(){
//     alert('no data');
//   }

// });



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
