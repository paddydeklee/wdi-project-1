console.log('Hello')

//Function 3
//Animate player to move left on left key  press
  //First get the lis in position and disappear on click
    //PROBLEM 1! Hiding the elements results in the others moving into their place
      //SOLUTION 1 - Remove class alive and css alive will have alive design

  $(function(){


  var pos = function(){
    var p = $('#playerPosition');
    var playerPosition = p.position();
    console.log = ("posiion")
    $( ".playerPosition" ).text( "left: " + playerPosition.left + ", top: " + playerPosition.top );
  }



  this.setInterval = (moveDown, 500)

    var moveDown = function () {
                $("ul").animate({
                    top: "100px"
                }, 500)
            }
    //PROBLEM 2! Make the ul move down every 5 seconds!!
      //SOLUTION 2 ....


      $('li').on('click', moveDown)



      $('li').on('click', function() {

        $(this).removeClass( "alive" ).animate(slow);
        // $(this).hide();

      });

      //Move the player left and right
            setInterval(movePlayer, 20);
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
                    }
                    // if (direction == 38) {
                    //     $("#player").animate({top: "-=5"}, 0);  
                    // }
                    if (direction == 39) {
                        $("#player").animate({left: "+=5"}, 0);  
                    }
                    // if (direction == 40) {
                    //     $("#player").animate({top: "+=5"}, 0);  
                    // }
                }
            }


            //record the position of player

    });



        // var startAnim = 
        //make enemies disappear
        //make player move on key press
        //Bullet Fire 
        //Read position of bullet

