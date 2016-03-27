//TESTERS AND LOGS
//click the lis they will disappear

$('li').on('click', function() {
  $(this).removeClass( "alive" ).animate(500);
});

function die() {
  console.log("die fiunction activated")
  $(this).removeClass( "alive" ).animate(500);
}

//get the mouse pos on the page
$(this).on("mousemove", function(event) {
  $("#mousePosition").text("pageX: " + event.pageX + ", pageY: " + event.pageY );
});

//get the key that has been pressed
$(this).on("keydown", function( event ) {
  $("#log").html(event.type + ": " +  event.which );
});


var game = game || {};

var collision = game.bullet - game.bad1Pos;

game.start = function(){
  this.delayFire      = 0;
  this.player1Score   = 0;
  this.player2Score   = 0;
  this.player         = $("#player");
  this.baddies        = $(".baddie");
  this.baddiesLeft    = []; // needs to be an array with all baddies left positions - FILL USING LOOP
  this.baddiesTop     = []; // needs to be an array with all baddies top positions - FILL USING LOOP
  this.baddies        = $(".baddies").offset;
  this.bulletLeft     = $('#bullet').offset().left;
  this.bulletTop      = $('#bullet').offset().top;
  this.bad1           = $('#1')
  this.findOffset     = function(a){ return $(a).offset(); }
  
  // this.bad1Pos        = $(i).offset();
  this.diffX          ;
  this.diffY          ;
  this.collisionTol   = 10;
  this.baddiePositions;
  this.detectCollision;
}

// get the top of each baddie
// get the left of each baddie
// get the centre halfway top of each baddie
// get the centre left of each baddie

// do the same for the bullet


//Thought about using pythag but don't need to as only want collision in 2 planes x and y
// function detectCollision(){
//   if (getDistance() < 10){
//     return console.log("collision detected")
//   } 
// }

// function getDistance(x1, y1, x2, y2){
//   var a = difference(x1, x2);
//   var b = difference(y1, y2);
//   return Math.sqrt( a*a + b*b );
// }

// //find the difference between the bullet and the baddies in a straight line
// function difference(p1, p2){
//  return p1 - p2;
// }

// //must be able to handle the entire array of baddies
// function setupCoords(elem){
//   getDistance(
//       this.bulletLeft,
//       this.bulletTop,
//       elem.left,
//       elem.top
//     )
//   detectCollision();
// }

//COLLISION DETECTOR
function detectCollision(elem1, elem2, tolerance){
  tolerance = game.collisionTol;
  if (getDiffX(elem1, elem2) < tolerance && getDiffY(elem1, elem2) < tolerance){
    kill(elem2);
    return console.log("COLLISION DETECTED");
  } else return console.log("no collision detected")
}
// 

//gets the distance between two elements in the x axis
function getDiffX(elem1, elem2){
  game.diffX = getOffsetX(elem1) - getOffsetX(elem2);
  return game.diffX;
}

//and diff in the y axis
function getDiffY(elem1, elem2){
  game.diffY = getOffsetY(elem1) - getOffsetY(elem2);
  return game.diffY;
}

//gets the position of an element and returns its top left point
function getOffsetX(elem){ 
  return getOffset(elem).left;
}

function getOffsetY(elem){ 
  return getOffset(elem).top;
}

function getOffset(elem){
  return $(elem).offset();
}



// pythagoras to get the distance from the centre of the bullet and the centre of the baddie
// repeat this for each baddie on a loop.
// interval to run the loop 100 times as soon as the bullet is fired.

//need to pass this function the value of top x and left y of EACH baddie 
//I am setting the value of each baddie size... so I know that the 

function findCentreXRect(x){
  var x1 = (x + 50);
  console.log(x + (width/2));
};

function findCentreYRect(y){
  var y1 = (y + 25);
  console.log(y + (height/2));
}



function getTopLeftBaddie(){

}
// function findCentreRect(x,y){
//   var centreX = (x + (width/2));
//   console.log(x + (width/2));
//   var centreY = (y + (height/2));
//   console.log(y + (height/2));
// };

// function draw(){
//  //from basicCanvas.html
//  var canvas = document.getElementById("canvas");
//  if (canvas.getContext){
//   var ctx = canvas.getContext('2d');
//   ctx.fillStyle = "#FF0000";
//   ctx.fillRect(0, 0, 500, 50);
//  } // end if
//  } // end draw


//GET BADDIE POSITIONS
//get an array of all the baddies on the page
//use loop to store left positions in another array
game.baddiePositions = function (){
  for (var i = 0; i < game.baddies.length; i++) {
    this.baddies[i].innerHTML = game.findOffset(bad1.left)
    // this.baddiesLeft.push(($("li"))
    // this.baddies[i].setAttribute("class", "clear");
  }
}




//BADDIE MOVEMENT
gridDown = function () {
 $(".grid").animate({
   "top": "+=50px" }, 800);

 console.log("dropdown")
}

gridSwitch1 = function(){
  $(".outer").animate({
    "left": "+10px" }, 0);
  $(".middle").animate({
    "left": "-10px" }, 0);
  $(".lower").animate({
    "left": "+10px" }, 0);
}

gridSwitch2 = function(){
  $(".outer").animate({
    "left": "-10px" }, 0);
  $(".middle").animate({
    "left": "+10px" }, 0);
  $(".lower").animate({
    "left": "-10px" }, 0);
}

setInterval(gridDown, 100000)
// setInterval(gridSwitch1, 1500)
// setInterval(gridSwitch2, 3000)
// setInterval(gridSwitch2, 4500)
// setInterval(gridSwitch1, 6000)
// setInterval(gridSwitch1, 7500)

//SET UP KEYS
var keys = {}
//assign property keyCode to keys when key is down
$(this).keydown(function(e) {
  keys[e.keyCode] = true;
});

//this lets me move the player more than once by deleting the keys property
$(this).keyup(function(e) {
  delete keys[e.keyCode];
});

//MOVE PLAYER
setInterval(movePlayer, 15)

function movePlayer() {
  for (var direction in keys) {
    //only continue if the keys object does not have a direction property
    if (!keys.hasOwnProperty(direction)) continue;
    if (direction == 37) {
      $("#player").animate({left: "-=5"}, 0);
      player.position -= 5;                
    }

    if (direction == 39) {
      $("#player").animate({left: "+=5"}, 0);  
      player.position += 5;  
    }
    var playerPos = $('#player').position(); 
  }
}

//FIRE BULLET
setInterval(fireBullet, 20)
setInterval(fireBazooka, 50)

function fireBullet() {

  for (var direction in keys) {
      //only continue if the keys object does not have a direction property
      if (!keys.hasOwnProperty(direction)) continue;

      if (game.delayFire > 0) {
        game.delayFire-- ;
      } if (game.delayFire === 0){
       if (direction == 38) {

         $("#bullet").css("background-color", "blue");
         $("#bullet").animate({top: "-520", backgroundColor: "rgb(0,191,255)"}, 600);
         var bulletOffset = $('#bullet').offset();
         var bulletOffsetLeft = bulletOffset.left;
         $("#bullet").animate({width: "+=5", height: "+=5", color:"blue", opacity:"1"}, 50)
         $("#bullet").animate({width: "10", height: "10", color:"orange"}, 0)
         $("#bullet").animate({top: "0"}, 0)

         game.delayFire = 40;
       }}}};


//DIFFERENT WEAPONS!
  function fireBazooka() {

  for (var direction in keys) {
      //only continue if the keys object does not have a direction property
      if (!keys.hasOwnProperty(direction)) continue;

      if (game.delayFire > 0) {
        game.delayFire-- ;
      } if (game.delayFire === 0){
       if (direction == 32) {

      $("#bullet").css("background-color", "red");
      $("#bullet").animate({top: "-320", backgroundColor: "red", width: "+=30", height: "+=30"}, 500);
      $("#bullet").animate({color:"red", opacity:"0.5"}, 100)
      $("#bullet").animate({width: "10", height: "10", color:"orange"}, 0)
      $("#bullet").animate({top: "0"}, 0)

      game.delayFire = 20;

      }}}};




// if( hit > 400){
//   console.log("direct hit!")
//   kill(baddie);
// } 



// var ulBottom = $('.grid').offset();
// // var hit = bullet.left - bad1Pos.left;
// var baddie = $('#bad5');
// console.log("Top of the bad guys" + ulBottom.top)
   
// Object {top: 581.4375, left: 658.3333740234375}
// Object {top: 51.4375, left: 613.3333740234375}

// console.log(bullet.left - bad1Pos.left)


//if the bullet intercepts with any of the divs then it should explode

// var playerPos = $('#player').position();
// return playerPos



       function kill(shotElement) {
        console.log("kill fiunction activated")
        $(shotElement).removeClass( "alive" ).animate(500);
      }



      document.addEventListener("DOMContentLoaded", function(){
        game.start();
      });


      // OBJECT ORIENTATION
      // TTT.start = function(){
      //   this.boxes = document.getElementsByTagName("li");
      //   this.turnText = document.querySelector(".playerTurn");
      //   this.reset = document.getElementById("reset");
      //   console.log(this)
      //   this.winCombos = [
      //                      [0,1,2],[3,4,5],[6,7,8], // Horizontal
      //                      [0,3,6],[1,4,7],[2,5,8], // Vertical
      //                      [0,4,8],[2,4,6]          // Diagonal
      //                    ];
      //   this.moveCount  = 1;
      //   this.oMoves     = [];
      //   this.xMoves     = [];
      //   this.bindEvents()
      // }

      // TTT.bindEvents = function (){
      //   this.addXandOListener();
      //   this.addResetListener();
      // }

      // TTT.addXandOListener = function(){
      //   for (var i = 0; i < this.boxes.length; i++) {
      //     this.boxes[i].addEventListener("click", function(){
      //       TTT.play();
      //     })
      //   }
      // }

      // TTT.play = function(){
      //   if (event.target.innerHTML.length > 0) return false;
      //   if (this.moveCount % 2 === 0) {
      //     this.playMove(this.oMoves, "O");
      //   } else {
      //     this.playMove(this.xMoves, "X");
      //   }
      //   this.checkForDraw();
      // }

      //FUNCTION 6 lis in position and disappear when collision with bullet
          //first make the collision event a click
          //PROBLEM 1! Hiding the elements results in the others moving into their place
            //SOLUTION 1 - Remove class alive

      //FUNCTION 3
      //Animate player to move left on left key  press
        //Player needs to have bounds on left and right
          //Max widths! Switch off the left key when at width1 switch off the right key when at width2


      //FIRING BULLET
      //PROBLEM the bullet is still attached to the position of the player
      //SOLUTION this should create a div called bullet and append it to the main area div
      //Then this should move up the page and the its position should be recorded
      //then it should detect collision
      //maybe delay collision


// var livePosition = function (){
//     var playerPos = $('#player').position();
//     return playerPos
//   }


//game start should set up varables
// start = function () {
//   game.bad1 = $('#bad1');
//   game.p = $('#player');
//   game.playerPosition = p.position();
//   // console.log = (game.playerPosition)
//   // console.log = ("Hellllloo")
// $("#player").text( "left: " + playerPosition.left + ", top: " + playerPosition.top )
// }


//FUNCTION 7! Record the position of player
// var pos = function(){
//   var player = $('#player');
//   var playerPosition = player.position();
//   console.log = ("posiion")
//   $( ".playerPosition" ).text( "left: " + playerPosition.left + ", top: " + playerPosition.top );
// }

//PROBLEM 2! Make the ul move down every 5 seconds!!
  //SOLUTION 2 ....



        // var gridDown = 
        //make enemies disappear
        //make player move on key press
        //Bullet Fire 
        //Read position of bullet


//
        // setInterval($("ul").animate({'margin-left':'50px'}, 100).animate({'margin-left':'-50px'}, 100), 1000);

          // this.setInterval = (moveDown, 500)


          // game.moveDown = function () {
          //             $("ul").animate({
          //                 top: "100px"
          //             }, 500)
          //         }


          // function movePlayer() {
          //     for (var direction in keys) {
          //         if (!keys.hasOwnProperty(direction)) continue;
          //         if (direction == 37) {
          //             $("#player").animate({left: "-=5"}, 0);                
          //         }
          //         // if (direction == 38) {
          //         //     $("#player").animate({top: "-=5"}, 0);  
          //         // }
          //         if (direction == 39) {
          //             $("#player").animate({left: "+=5"}, 0);  
          //         }
          //         // if (direction == 40) {
          //         //     $("#player").animate({top: "+=5"}, 0);  
          //         // }
          //     }
          //     $('li').on('click', console.log($('#player').position()))
          // }



          // $(function () {
          //     var firstMeasurements = {
          //         width: $(".grid").css('width'),
          //         height: $(".grid").css('width')
          //     }
          //     var gridDown = function () {
          //         $(".grid").animate({
          //             "width": "0px", "height": "0px"
          //         }, 5000, resetAnim)
          //     }
          //     var resetAnim = function () {
          //         $(".grid").css({
          //             "width": firstMeasurements.width,
          //             "height": firstMeasurements.height
          //         });
          //         gridDown();
          //     }
          //     gridDown()
          // });


          // $(function () {
          //     // var firstMeasurements = {
          //     //     top: $(".grid").css('top'),
          //     //     height: $(".grid").css('width')

          //     // }
          //     var gridDown = function () {
          //         $(".grid").animate({
          //             "top": "+=100px" }, 1000, gridDown)
          //         console.log("two")
          //     }
          //     gridDown();
          //     // var resetAnim = function () {
          //     //     $(".grid").css({
          //     //         "top": firstMeasurements.width,
          //     //         "height": firstMeasurements.height

          //     //     });
          //     //     gridDown();
          //     //     console.log("four")
          //     // }
          //     // gridDown()
          //     // console.log("five")
          // });




          // $(function () {
          //   var firstMeasurements = {
          //     top: $("ul").css('top')
          //   }
          //   var gridDown = function () {
          //     $("ul").animate({
          //       "top": "10px;"
          //     }, 5000, gridDown)
          //   }
          //   var resetAnim = function () {
          //     $("ul").css({
          //       "width": firstMeasurements.width,
          //       "height": firstMeasurements.height
          //     });
          //     gridDown();
          //   }
          //   gridDown()
          // });


          //TALKING POINTS
          //DELAY FIRE FEATURE
          //MOVEMENT OF BADDIES
