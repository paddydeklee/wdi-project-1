$(function(){

var game = game || {};

var player = {
  score: 0,
  position: 0
}

        //FUNCTION 6 lis in position and disappear when collision with bullet
        //first make the collision event a click
        //PROBLEM 1! Hiding the elements results in the others moving into their place
          //SOLUTION 1 - Remove class alive and css alive will have alive design
      $('li').on('click', function() {
        $(this).removeClass( "alive" ).animate(500);
      });

      //FUNCTION 3
      //Animate player to move left on left key  press
        //Player needs to have bounds on left and right
          //Max widths! Switch off the left key when at width1 switch off the right key when at width2


            

            setInterval(movePlayer, 20)
            
            var keys = {}

            $(this).keydown(function(e) {
                keys[e.keyCode] = true;
            });

            //this lets me move the player more than once!
            $(this).keyup(function(e) {
                delete keys[e.keyCode];
            });

            

            function movePlayer() {
                
                for (var direction in keys) {
                    if (!keys.hasOwnProperty(direction)) continue;
                    if (direction == 37) {
                        $("#player").animate({left: "-=5"}, 0);
                        player.position -= 5;                
                    }

                    if (direction == 39) {
                        $("#player").animate({left: "+=5"}, 0);  
                        player.position += 5;  
                    }

                    if (direction == 38) {
                        $("#bullet").animate({top: "-500"}, 500);
                        $("#bullet").animate({top: "0"}, 0)

                    }

                    // var playerPos = $('#player').position();
                    // return playerPos
                }
                  var playerPos = $('#player').position();
                  //  
                   console.log(playerPos)
                
            }

    });


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



        // var startAnim = 
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
