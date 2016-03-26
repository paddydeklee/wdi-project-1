$(function(){

  var game = game || {};

  var bullet;
  var delay = 0;
  var startAnim = function () {
      $(".grid").animate({
          "top": "+=50px" }, 1000)
      console.log("dropdown")
  }
  


  setInterval(startAnim, 10000)


  

  // $(function () {
  //     // var firstMeasurements = {
  //     //     top: $(".grid").css('top'),
  //     //     height: $(".grid").css('width')
          
  //     // }
  //     var startAnim = function () {
  //         $(".grid").animate({
  //             "top": "+=100px" }, 1000, startAnim)
  //         console.log("two")
  //     }
  //     startAnim();
  //     // var resetAnim = function () {
  //     //     $(".grid").css({
  //     //         "top": firstMeasurements.width,
  //     //         "height": firstMeasurements.height
              
  //     //     });
  //     //     startAnim();
  //     //     console.log("four")
  //     // }
  //     // startAnim()
  //     // console.log("five")
  // });

  $(function () {
      var firstMeasurements = {
          top: $("ul").css('top')
      }
      var startAnim = function () {
          $("ul").animate({
              "top": "10px;"
          }, 5000, startAnim)
      }
      var resetAnim = function () {
          $("ul").css({
              "width": firstMeasurements.width,
              "height": firstMeasurements.height
          });
          startAnim();
      }
      startAnim()
  });


  // setInterval(bulletPos, 500)


  // function bulletPos() {
  // //   bullet = "hello";
  // //   return bullet;
  // console.log("bulletPos")
  // }



  var player = {
    score: 0,
    position: 0
  }

    //FUNCTION 6 lis in position and disappear when collision with bullet
        //first make the collision event a click
        //PROBLEM 1! Hiding the elements results in the others moving into their place
          //SOLUTION 1 - Remove class alive
          $('li').on('click', die);

          function die() {
                      console.log("die fiunction activated")
                      $(this).removeClass( "alive" ).animate(500);
                    }

          function kill(shot) {
                      console.log("kill fiunction activated")
                      $(shot).removeClass( "alive" ).animate(500);
                    }

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

      if (delay > 0){
        delay -= 1;
      }

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
        if (delay == 0){
        if (direction == 38) {

          

            //PROBLEM the bullet is still attached to the position of the player
            //SOLUTION this should create a div called bullet and append it to the main area div
            //Then this should move up the page and the its position should be recorded
            //then it should detect collision
            //maybe delay the collision
            
            var ulBottom = $('.grid').offset();
            // var hit = bullet.left - bad1Pos.left;
            var baddie = $('#bad5')
            console.log("Top of the bad guys" + ulBottom.top)
            
            
            // console.log(bullet.left - bad1Pos.left)
            

            //if the bullet intercepts with any of the divs then it should explode
            //

            $("#bullet").animate({top: "-520"}, 500);
            $("#bullet").animate({width: "+=10", height: "+=10", color:"red", opacity:"0.5"}, 50)
            var bullet = $('#bullet').offset();
            var bad1Pos = $('#bad1').offset();
            console.log(bullet);
            console.log(bad1Pos);
            var hit = bullet.left - bad1Pos.left;

            if( hit > 400){
              console.log("direct hit!")
              kill(baddie);
            } 
            console.log(hit)
            $("#bullet").animate({width: "10", height: "10", color:"orange"}, 0)
            $("#bullet").animate({top: "0"}, 0)
            
            delay = 40;


          }

            // var playerPos = $('#player').position();
            // return playerPos
          }
          var playerPos = $('#player').position(); 
        }
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



          // $(function () {
          //     var firstMeasurements = {
          //         width: $(".grid").css('width'),
          //         height: $(".grid").css('width')
          //     }
          //     var startAnim = function () {
          //         $(".grid").animate({
          //             "width": "0px", "height": "0px"
          //         }, 5000, resetAnim)
          //     }
          //     var resetAnim = function () {
          //         $(".grid").css({
          //             "width": firstMeasurements.width,
          //             "height": firstMeasurements.height
          //         });
          //         startAnim();
          //     }
          //     startAnim()
          // });

