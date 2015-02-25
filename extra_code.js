//geometric art
//classic paintings with textures
//abstract expressionism


function render(x,y){
  console.log("rendering");
    var bumpy = Math.ceil((Math.random() * 10));
    var bumpy2 = Math.floor((Math.random() * 50));
    //stroke(random(200, 255), random(200, 255), random(200, 255));
    stroke(0, 155);
    strokeWeight(10/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    line(prevX, prevY, x, y);

    stroke(207, 195, 169, 155);
    strokeWeight(5/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    line(prevX+bumpy, prevY+bumpy, x+bumpy, y+bumpy);

    stroke(255, 85, 17, 155);
    strokeWeight(3/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    translate(bumpy2, bumpy2);
    line(prevX+bumpy, prevY+bumpy, x+bumpy, y+bumpy);

    stroke(250, 197, 33, 155);
    strokeWeight(5/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    //translate(random(50),random(50));
    line(prevX, prevY+bumpy, x+bumpy, y+bumpy);
    
    stroke(254, 253, 255, 155);
    strokeWeight(5/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    line(prevX, prevY, x, y);
    
    stroke(38, 31, 23, 100);
    strokeWeight(8/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    line(prevX, prevY, x, y);
    
    stroke(56, 74, 110, 100);
    strokeWeight(5/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    line(prevX, prevY, x, y);
    
    stroke(251, 255, 198, 100);
    strokeWeight(5/dist(mouseX+prevX, mouseY+prevY, pmouseX+x, pmouseY+y));
    line(prevX, prevY, x, y);

}

function step(){
console.log("stepping");
    var tx;
    var ty;
    var x;
    var y;

    var something = (function() {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
 tx = 0;
ty = 10000;
  x = map(noise(tx), 0, 1, 0, width);
 y = map(noise(ty), 0, 1, 0, height);
        }
    };
})();

    tx += 0.01;
    ty += 0.01;

    x = map(noise(tx), 0, 1, 0, width);
    y = map(noise(ty), 0, 1, 0, height);

    prevX = x;
    prevY = y;
    //Speed of step

}

c = color(0,0,0);
  var tx = 0;
  var ty = 10000;
  var x = map(noise(tx), 0, 1, 0, width);
  var y = map(noise(ty), 0, 1, 0, height);


  for(var i = 0; i < 2000; i++){
    step();
    console.log(x + " " + y );
    render(step.x,step.y);
  }


      for (var i = 0; i < keywords.length; i++){

        if (res.indexOf(keywords[i]) !== -1 && sentiment < 0.3){
          switch(keywords[i]){
            case 'color':
              changeColor();
              break;
            case 'composition':
            case 'layout':
              changeComp();
              break;
            case 'bright':
            case 'brightness':
              makeDarker()
              break;
            default:
              console.log("No keywords detected in: "+ res);
          }
        }
      }
    });

      