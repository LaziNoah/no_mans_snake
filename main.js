function setup(){
  createCanvas(400, 400);
}
function random(min,max){

  return  Math.random() * (max - min) + min;
}
var round = Math.round;
var o = 0;
var x = 0;
var r = 0;
var lose = 0;
var score = 0;
//var font = createFont("monospace");
//var font2 = createFont("batang");
//var font3 = createFont("fantasy");
var speedX = 10;
var speedY = 0;
var tick = 0;
var snakePiece = {x:0, y:0};
var snakePieces = [{x:200, y:0},

    {
        x: snakePiece.x + speedX,
        y: snakePiece.y + speedY,

    },{
        x: snakePiece.x + speedX * 2,
        y: snakePiece.y + speedY * 2,

    }];





// Keep score
var scoreCount = function(){
    textAlign(CENTER, CENTER);
    fill(171, 171, 171);
    //textFont(font2);
    textSize(40);
    text("YOUR SCORE IS", 200, 75);
    textSize(65);
    text(score, 200, 135);
};
// Snake Function


var snakeCol = function(snake1,snake2){
  return snake1.x === snake2.x &&  snake1.y === snake2.y;
};


var drawSnake = function(snakeSize) {
    for(var i = 0 ; i<snakePieces.length ; i++ ){
        fill(252, 98, 203, 155);
        rect(snakePieces[i].x, snakePieces[i].y, snakeSize, snakeSize);
    }
};

// Snake Position
var changeSnakePosition = function() {
    snakePieces.unshift({x:snakePieces[0].x+speedX,y:snakePieces[0].y+ speedY});
    snakePieces.pop();
};

// Everything that has to do with the snake
var wholeSnake = function(){

    background(255, 255, 255);

    scoreCount();
    changeSnakePosition();

    drawSnake(10);

    if (keyIsPressed && keyCode === UP_ARROW && speedY !== 10){
        speedY = -10;
        speedX = 0;
    }

    if (keyIsPressed && keyCode === DOWN_ARROW && speedY !== -10){
        speedY = 10;
        speedX = 0;
    }

    if (keyIsPressed && keyCode === LEFT_ARROW && speedX !== 10){
        speedX = -10;
        speedY = 0;
    }

    if (keyIsPressed && keyCode === RIGHT_ARROW && speedX !== -10){
        speedX = 10;
        speedY = 0;
    }

};


// All Food
var food = {x:round(random(0,39))*10,y
:round(random(0,39))*10};

var drawFood = function(){
    fill(0, random(100,255), 0);

    rect(food.x, food.y,10,10);



 if(snakePieces[0].x === food.x && snakePieces[0].y === food.y){
    snakePieces.push ({x:snakePieces[0].x+speedX,y:snakePieces[0].y+speedY});
    //playSound(getSound("retro/coin"));
    food.x = round(random(0,39))*10;
    food.y = round(random(0,39))*10;
    score +=1;

}
};
var mine = {x:round(random(0,36))*10,y
:round(random(0,36))*10};
var drawMine = function(){
    if(snakePieces[0].x === mine.x &&   snakePieces[0].y === mine.y){
snakePieces.shift ({x:snakePieces[0].x+speedX,y:snakePieces[0].y+speedY});

    //playSound(getSound("retro/boom2"));
    mine.x = round(random(0,36))*10;
    mine.y = round(random(0,36))*10;
    background(255, 0, 0);
    fill(0, 0, 0);
    //textFont(font2, 60);
    text("BOOM!", 200,200);
    fill(255, 255, 255);
    text("BOOM!", 200,197);
   }

   fill(184, 184, 184);
   rect(mine.x, mine.y, 20,20);
   noStroke();
   fill(random(0,255), 0, 0);
   rect(mine.x+6, mine.y+6, 9,9);
   fill(120, 120, 120);
   rect(mine.x+1, mine.y+1, 5,5);
   rect(mine.x+15, mine.y+1, 5,5);
   rect(mine.x+1, mine.y+15, 5,5);
   rect(mine.x+15, mine.y+15, 5,5);
   fill(184,184,184);
   rect(mine.x+13, mine.y+13, 2,2);
   rect(mine.x+6, mine.y+13, 2,2);
   rect(mine.x+6, mine.y+6, 2,2);
   rect(mine.x+13, mine.y+6, 2,2);
   stroke(255, 255, 255);
};

var loseScreen1 = function(y){
    noStroke();
    //textFont(font);
    fill(0, 34, 255);
    rect(0,0,500,500);
    textAlign(CENTER, CENTER);
    fill(204, 204, 204);
    rect(155,y+100,90,25);
    textSize(20);
    fill(0, 34, 255);
    text("Snake",200,y+112);
    fill(204, 204, 204);
    textSize(15);
    textAlign(LEFT, BOTTOM);
    textSize(13);
    text("You have lossed in Snake again. You suck",30, y+155);
    textSize(15);
    text("Error: YOU_ARE_REALLY_BAD", 30, y+190);
    textSize(13);
    textAlign(LEFT, BOTTOM);
    text("If you suck as much as you do, follow these steps", 30, y+226);
    text("* Get good", 30, y+246);
    text("* Try again", 30, y+266);
    text("* Give up forever", 30, y+286); //textFont(font);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("Press the CTRL key to restart _", 200, y+338);
    //playSound(getSound("retro/hit2"));

};



var loseScreen2 = function(){
 strokeWeight(1);
    fill(59, 179, 43);
    rect(0,0,400,400);
    stroke(0, 255, 9);
    for(var gridX = 0; gridX < 400; gridX+=40){
        line(gridX, 400, gridX,0);
    }
    for(var gridY = 0; gridY < 400; gridY+=40){
        line(400, gridY, 0, gridY);
    }
    textAlign(CENTER,CENTER);
    stroke(255, 255, 255,random(0,255));
    fill(255, 230, 0);
    ellipse(200,80,51,51);
    noStroke();
    fill(0, 0, 0);
    ellipse(190,72,6,12);
    ellipse(210,72,6,12);
    strokeWeight(2);
    stroke(0, 0, 0);
    fill(255, 230, 0,0);
    arc(200, 85, 30, 25, 0, 180);
    line(187,84,182,86);
    line(213,84,218,86);
    fill(0, random(200,255), 9);
    //textFont(font, 38);
    text("WOW YOU DONT SUCK!", 200,147);
    //textFont(font, 28);
    text("DAMN YOU GOT", 200,190);
    //textFont(font, 50);
    text(score,200,235);
    //textFont(font, 15);
    text("CLICK THE FACE", 200,35);

};

var loseScreen3 = function(){
    noStroke();
    fill(0, 0, 0);

    rect(0,0,400,400);
    fill(255,255,0);
    stroke(0, 0, 0);
    strokeWeight(3);
    triangle(236,230,163,230,200,158);
    triangle(130,75,170,168,208,168);
    triangle(260,75,193,168,230,168);
    ellipse(200,163,16,16);
    fill(0, 0, 0,0);
    ellipse(200,163,60,60);
    strokeWeight(338);
    ellipse(200,163,400,400);
    strokeWeight(3);
    stroke(255,255,0);
    fill(255, 255, 0,0);
    ellipse(200,163,65,65);
    fill(255,255, 0);
    //textFont(font,30);
    text("DANGER | DANGER | DANGER", 200,104);
    text(" YOU GOT BLOWN TO BITS", 200,221);
    textSize(20);
     text("Press CTRL To Restart", 200,346);


    textSize(60);
    line(0,205,400,205);
    line(0,238,400,238);
    line(0,120,400,120);
    line(0,89,400,89);

     var rhobus = function(x){
     strokeWeight(4);
    line(x,251,x+25,270);
    line(x+5,251,x+30,270);
    line(x+10,251,x+35,270);
    line(x+15,251,x+40,270);
    line(x+20,251,x+45,270);

     };
   rhobus(2);
   rhobus(60);
   rhobus(120);
   rhobus(180);
   rhobus(240);
  rhobus(300);
  rhobus(360);
      strokeWeight(3);
     stroke(0, 0, 0);
    line(0,250,400,250);
    line(0,270,400,270);


   stroke(153, 153, 153);

};

draw = function(){
stroke(255, 255, 255);
    tick += 1;
    if(tick % 5 === 0){
    wholeSnake();
    drawFood();
    drawMine();
    }



  //loseScreen3();


   /* for(var gridX = 10; gridX < 400; gridX+=10){
        line(gridX, 400, gridX,0);
    }
    for(var gridY = 10; gridY < 400; gridY+=10){
        line(400, gridY, 0, gridY);
    }
   */






 for(var n  = 1; n < snakePieces.length; n++){
  if(snakeCol(snakePieces[0], snakePieces[n])){
      lose = 1;
  }
  }


 if(score === 0 && lose === 1 || score === 1 && lose === 1){
    loseScreen1(-35);

    }

    if(score === 30 && lose === 1 || score > 30 && lose === 1){
    loseScreen2();

    }

   if(snakePieces.length === 0){
       lose = 1;
   }

   if(snakePieces.length === 0 && lose === 1){
    loseScreen3();
   }

   if(snakePieces.length === 0 && lose === 1 && score === 0 || snakePieces.length === 0 && lose === 1 &&     score   === 1){

    loseScreen1(-35);
  }






    if(snakePieces[0].x > 400 || snakePieces[0].x < 0 || snakePieces[0].y > 400 || snakePieces[0].y < 0){

        lose = 1;
    }

    if(lose === 1 && keyIsPressed && keyCode === CONTROL){
        lose = 0;

        stroke(255, 255, 255);
        speedX = 10;
        speedY = 0;
        snakePieces[0].x = 200;
        snakePieces[0].y = 200;
        wholeSnake();
        drawFood();
        //playSound(getSound("retro/whistle1"));
        score = 0;
        food.x = round(random(0,39))*10;
        food.y = round(random(0,39))*10;
    }

};
