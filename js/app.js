console.log('Hello')

//Function 3
//Animate player to move left on left key  press
  //First get the lis in position and disappear on click
    //PROBLEM 1! Hiding the elements results in the others moving into their place
      //SOLUTION 1 - Remove class alive and css alive will have alive design

  $(function(){


  this.setInterval = (moveDown, 500)

    var moveDown = function () {
                $("ul").animate({
                    top: "100px"
                }, 500)
            }
    //PROBLEM 2! Make the ul move down every 5 seconds!!
      //SOLUTION 2


      $('li').on('click', moveDown)



      $('li').on('click', function() {

        $(this).removeClass( "alive" ).animate(slow);
        // $(this).hide();

      });





    });



        // var startAnim = 
        //make enemies disappear
        //make player move on key press
        //Bullet Fire 
        //Read position of bullet

