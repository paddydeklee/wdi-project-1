$(function(){
  $("body").keyup(keyAction);
  createBaddies();
  startSequence();
  window.addEventListener("keydown", function(e) {
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);
});

function startSequence(){
  $(".baddie").fadeOut(0);
  $("#incoming").fadeOut(0);
  $("#ties").fadeOut(0);
  $("p").fadeOut(0);
  $("#player").fadeOut(0);
  $("h1").fadeOut(0);
  $("#star").fadeOut(0);
  $("#wars").fadeOut(0);
  $(".mainArea").fadeOut(0);
  $("#scoreboard").fadeOut(0);

  var audio = new Audio('./sounds/ThemeSong.ogg');
  audio.play();
  $("#star").fadeIn(2000).fadeOut(5000);
  $("#wars").fadeIn(2000).fadeOut(5000);
  $("#title").fadeIn(4000).fadeOut(3000);
  enterGame();
}

function enterGame(){
  $("#star").fadeOut(2000);
  $("#wars").fadeOut(2000);
  $(".mainArea").fadeIn(2000);
  $("#scoreboard").fadeIn(15000);
  $("#title2").fadeIn(15000);
  $(".mainArea").fadeIn(2000);
  setTimeout(enterPlayer, 5000);
  setTimeout(tiesIncoming, 10000);
  $("#continue").fadeOut(0)
}

function enterPlayer(){
  $("#player").fadeIn(2000);

  $("#player").animate({
    left: "400"
  }, 1000);
  $("#player").animate({
    left: "0"
  }, 1000);
  $("#player").animate({
    left: "250"
  }, 1500);
  playKesslRun();
}

function tiesIncoming(){
  ($("#ties").fadeIn(1000).fadeOut(1000));
  ($("#incoming").fadeIn(1000).fadeOut(1000));
  $(".baddie").fadeIn(7000);
  playTieFighter();
  resetGame();
}

//COLLISION DETECTION
function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

function blasterCollision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1 + 20;
  var r1 = x1 + w1 + 20;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2 + 20;
  var r2 = x2 + w2 + 20;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

  var game = game || {};

game.start = function(){
  this.player         = $("#player")
  this.highScore      = 0;
  this.player1Score   = $("#player1Score")
  this.player1HighScore;
  this.player2Score   = $("#player2Score")
  this.player2HighScore;
  this.gameOver       = false;
  this.playerTurn     = false;
  this.moveCount      = 0;
  this.baddiesMove    = 0;
  this.gunFires       = false;
  this.currentPlayer  = 0;
  this.currentScore   = 0;
  this.playerHealth   = $("#playerHealth")
  this.shield         = 5;
  this.blasters       = $("#blasters");
  this.blastersLeft   = 5;
  this.dropBombs      = false;
  this.grid           = $(".grid");
  this.gridPosition   = $(".grid").position();
  this.baddiesLeft    = $(".baddie").length
}

function clearBaddies(){
  $(".baddie").remove();
}

function createBaddies(){

  var numberOfBaddies = 50;
  var container = $(".mainArea");
  var left = 0;
  var top  = 0;
  for (var i = 0; i < numberOfBaddies; i++) {
    var $baddie = $("<li class='baddie'><img src='http://www.afewmaneuvers.com/uploads/emoticons/default_TIE%20Bomber.gif'></li>");

    $baddie
      .css("left", left)
      .css("top", top);
    $(".grid").append($baddie);

    left += 50;
    if (left > container.width() - 10) {
      left = 0;
      top += 30;
    }
    if(top > 20){
    $($baddie).addClass("midLayer")
  } if (top > 40){
    $($baddie).addClass("lowLayer")
  }
  }
}

//BADDIE MOVEMENT
function gridDown() {
  if(game.baddiesMove === true){
  $(".grid").animate({
    "top": "+=100px" }, 1000);
    gameOver();
  } else {$(".grid").stop().clearQueue()}
  };

  gridSwitch1 = function(){
    $(".grid").animate({
      "left": "+10px"
    }, 100);
    $(".midLayer").animate({
      "left": "=-10px"
    }, 100);
    $(".lowLayer").animate({
      "left": "=+10px"
    }, 100);
  };

  gridSwitch2 = function(){
    $(".grid").animate({
      "left": "-10px"
    }, 100);
    $(".midLayer").animate({
      "left": "=+10px"
    }, 100);
    $(".lowLayer").animate({
      "left": "=-10px"
    }, 100);
  };

  //IN-PLAY TIMERS
  setInterval(gridDown, 5000);
  setInterval(dropBombs, 1000);
  setTimeout(gridSwitch1, 1500)
  setInterval(gridSwitch2, 3000)
  setInterval(gridSwitch2, 4500)
  setInterval(gridSwitch1, 6000)
  setInterval(gridSwitch1, 7500)

  //SET UP KEYS
  function keyAction(){
    startSettings();
    var keycode = event.keyCode || event.which;
    event.preventDefault();

    switch(keycode) {
      case 38: // up key
        fireBazooka();       
        break;
      case 32 : // space
      if (game.blastersLeft >= 1){
        fireBlaster();     
        }  else {
          messageAmmo();
          playChewyRoar();
          console.log("no blasters left!")
        }
        break;
      case 37:
        movePlayer(keycode); // left;
        break;
      case 39:
        movePlayer(keycode); // right;
        break;
    }
  }

  //MOVE PLAYER
  function movePlayer(direction) {
    $("#player").stop();

    if (direction == "37") {
      $("#player").animate({
        left: "-=50"
      }, 100);
      player.position -= 5;
    }

    if (direction == "39") {
      $("#player").animate({
        left: "+=50"
      }, 100);
      player.position += 5;
    }
    var playerPos = $('#player').position();
    console.log(Number(playerPos.left));
  }


  //WEAPONS
  function messageAmmo(){
    var $noMoreAmmo = $("<p id='noMoreAmmo'>We're out of blasters!</p>");
    $(".grid").append($noMoreAmmo);
    $("#noMoreAmmo").fadeOut(1000)
  }


  function createBullet() {
    var bullet = $("<div class='bullet'></div>");
    $("#gun").append(bullet);
    return bullet;
  }

  function fireBazooka() {
    var $bullet = createBullet();
    playLaser();
    $bullet.css("background-color", "#1affff");

    $bullet.animate({
      top: "-800",
      backgroundColor: "#1affff",

      width: "+=5",
      height: "+=5"
    }, {
      duration: 2000,
      step: function(){
        $(".baddie").each(function(index, baddie) {
          var $baddie = $(baddie);
          if (collision($bullet, $baddie)) {
            $bullet.remove();
            $baddie.remove();
            // game.currentScore++;
            var score = parseFloat(game.player1Score.html());
            score++;
            game.player1Score.html(score);
          } 
          // var $bullet = $(bullet);
          // setTimeout(
          //   $bullet.remove(), 2000);
        });
      }
    });
        game.delayFire = 150;
  }

  function createBlaster() {
    var blaster = $("<div class='blaster'></div>");
    $("#gun").append(blaster);
    return blaster;
  }

  function fireBlaster() {

      var $blaster = createBlaster();
      playBlasterRelease2();

      var blasters = parseFloat($("#blasters").html());
      blasters--;
      game.blastersLeft--;
      game.blasters.html(blasters); 


      $blaster.css("background-color", "green");

      $blaster.animate({
        top: "-600",
        backgroundColor: "#red",
        
        width: "+=20",
        height: "+=20"
      }, {
        duration: 3000,
        step: function(){
          $(".baddie").each(function(index, baddie) {
            var $baddie = $(baddie);
            if (blasterCollision($blaster, $baddie)) {
              playBlasterImpact();
              // $blaster.remove();
              $baddie.addClass("explode")
              setTimeout($baddie.remove(), 1000);
              // game.currentScore++;
            } 

            setTimeout(function() {
              $blaster.remove()
            }, 2000);
          });
        }
      });

      game.delayFire = 150;

  }


  function createBomb() {
    var bomb   = $("<li class='bomb'></li>");
    var bomber = $('li').get(Math.floor(Math.random() * 50))
    $(bomber).append(bomb);
    return bomb;
    }
  
  function dropBombs(){
    if(game.dropBombs == true){
    var $bomb = createBomb();
    playBlasterRelease();
    $bomb.css("color", "red");
    $bomb.animate({
      top: "+800"
    }, {
    duration: 4000, 
    step: function(){
        var $player = $(player);
        if (collision($bomb, $player)) {
          $bomb.remove();
          $player.fadeOut(500);
          $player.fadeIn(300);
          //Remove Health
          var playerHealth = parseFloat(game.playerHealth.html());
          playerHealth--;
          game.shield--;
          game.playerHealth.html(playerHealth);

          gameOver();
        } setTimeout(function() {$bomb.remove()}, 4000);
      }
    })
   }
  }
  

//GAMEPLAY CONTROLS
function gameOver (){
  $(".baddie").each(function(index, baddie) {
    var $player = $(player);
    var $baddie = $(baddie);
    var $grid   = $(".grid");

     if (collision($player, $baddie) || game.shield < 0) {
       $(".grid").stop().clearQueue()
       game.gameOver = true;
       $player.fadeOut(1000); 
       $grid.fadeOut(1000);
       gameOver2();

       $(".baddie").each(function(index,baddie){
         $baddie.fadeOut(1000)
         }) 
       }
     });
   };

 function pauseSettings() {
   game.dropBombs      = false;
   game.baddiesMove    = false;
   $("#continue").fadeIn(50);
 }

 function startSettings (){
   game.baddiesMove    = true;
   game.gunFires       = true;
   game.dropBombs      = true;
   $("#continue").fadeOut(50);
 }

function gameOver2(){
  if(game.gameOver == true) {
    playDarth();
    var $gameOverMessage  = $("<li class='gameOverMessage'>GAME OVER</li>");
    $(".mainArea").append($gameOverMessage).fadeIn(1000);
    //play darth noise
    $gameOverMessage.fadeOut(3000);
    gameOverSettings();
    setTimeout(resetGame, 3000);
  }
}

function gameOverSettings(){
  game.baddiesMove = false;
  game.dropBombs   = false;
}

//RESETS
function resetGame(){
  game.gameOver = 0;
  resetBaddies();
  resetWeapons();
  resetPlayerHealth(); 
  resetPlayerScore();
  pauseSettings();
}

function resetBaddies(){
   game.blastersLeft   = 5;
   clearBaddies();
  createBaddies();
  game.player.fadeIn(3000);
  game.grid.fadeIn(3000);
  var left = 0;
  var top  = 0;
  
  var $grid = $(".grid");
  
  $grid
    .css("left", left)
    .css("top", top);
  
  $(".gameOverMessage").remove();
  $(".score").remove();
  };

function resetWeapons(){
  var blasters = parseFloat($("#blasters").html());
  blasters = 5;
  game.blastersLeft = 5;
  game.blasters.html(blasters); 
}

function resetPlayerHealth(){
  var playerHealth = parseFloat(game.playerHealth.html());
  playerHealth = 5;
  game.shield = 5;
  game.playerHealth.html(playerHealth)
}

function resetPlayerScore(){
  var score = parseFloat(game.player1Score.html());
  score = 0;
  game.player1Score.html(score);
}

//SOUNDS
function playLaser(){
  var audio = document.getElementById("audio");
  audio.src = ("./sounds/blaster-firing.wav");
  audio.play();
  }

function playDarth(){
  var audio = document.getElementById("audio");
  audio.src = ("./sounds/ALL2EASY.WAV");
  audio.play();
  }

function playBlasterImpact(){
  var audio = document.getElementById("audio");
  audio.src = ("./sounds/Blaster_Impact.wav");
  audio.play();
  }

function playBlasterRelease3(){
  var audio = document.getElementById("audio");
  audio.src = ("./sounds/Laser2.wav");
  audio.play();
  }

function playBlasterRelease(){
  var audio = document.getElementById("audio");
  audio.src = ("./sounds/Blaster_Release.wav");
  audio.volume=0.5;
  audio.play();
  }

function playBlasterRelease2(){
  var audio = document.getElementById("audio");
  audio.src = ("./sounds/Blaster_Release2.wav");
  audio.play();
  }


function playChewyRoar(){
  var audio = document.getElementById("audio3");
  audio.src = ("./sounds/chewy_roar.wav");
  audio.play();
  }

function playKesslRun(){
  var audio = document.getElementById("audio4");
  audio.src = ("./sounds/kesslrun.wav");
  audio.play();
  }

function playTieFighter(){
  var audio = document.getElementById("audio2");
  audio.src = ("./sounds/tie_fighter.wav");
  audio.play();
  }


document.addEventListener("DOMContentLoaded", function(){
  game.start();
});
