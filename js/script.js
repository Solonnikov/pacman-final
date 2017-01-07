// Ghosts object
var ghosts = {};

// Ghost init
function Ghost (id_counter) {
  var x = Math.round(Math.random() * (1000 - 100) + 100);
  var y = Math.round(Math.random() * (400 - 100) + 100);
  var ghost_img = document.createElement("img");
  ghost_img.setAttribute('src', 'img/ghost.png');
  ghost_img.setAttribute('class', 'ghost');
  ghost_img.setAttribute('id', id_counter.toString());
  ghost_img.setAttribute('style', 'width:50px;position:absolute;top:' + y + 'px;left:' + x + 'px;');
  document.body.appendChild(ghost_img);
  ghosts[id_counter] = {ghostx: x, ghosty: y};
  }

 // Ghosts counter
 var ghostCount = 0;
 var result = 0;
  var title = document.createElement('p');
  var titleText = document.createTextNode('Get 50 ghosts');
  title.setAttribute('style', 'position:absolute;top:0px;left:45%;font-weight:bold;font-size:30px;');
  document.body.appendChild(title);
  title.appendChild(titleText);

// Score title
  var p = document.createElement('p');
  var t = document.createTextNode('Score:' + result.toString());
  p.setAttribute('id', 'view_result');
  p.setAttribute('style', 'position:absolute;top:10%;left:50%;font-weight:bold;font-size:20px;');
  document.body.appendChild(p);
  p.appendChild(t);

// Start title
  var start = document.createElement('p');
  var readyGo = document.createTextNode('Ready! Go!');
  start.setAttribute('style', 'position:absolute;top:30%;left:35%;font-weight:bold;font-size:70px;color:green;text-decoration:blink;');
  document.body.appendChild(start);
  start.appendChild(readyGo);

// Blinking
toggleItem = function(){
    var el = document.getElementsByTagName('p')[2];
    if (el.style.display === 'block') {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }
}
setInterval(toggleItem, 500);

// Game over title
  function gameover() {
  var gameover = document.createElement('p');
  var gameoverText = document.createTextNode('You win!');
  gameover.setAttribute('style', 'position:absolute;top:30%;left:40%;font-weight:bold;font-size:70px;color:green;');
  document.body.appendChild(gameover);
  gameover.appendChild(gameoverText);
  }

// Ghost loop 
var timer = setInterval (function() {
  for (var i = 0; i < 5; i++) {
    readyGo.remove();
  Ghost('ghost' + i.toString());
  console.log(ghosts);
  }
  if (result >= 50) {
    clearInterval(timer);
        $('.ghost').remove();
    gameover();

  }
}, 5000);

// Pacman init
function PacmanMove () {
  pacman_img = document.createElement("img");
  pacman_img.setAttribute('src', 'img/pacman.png');
  pacman_img.setAttribute('id', 'pacman');
  pacman_img.setAttribute('style', 'width:50px;position:absolute;top:0px;left:0px;');
  document.body.appendChild(pacman_img);

// Pacman movement
  var keys = {};
      keys.UP = 38;
      keys.LEFT = 37;
      keys.RIGHT = 39;
      keys.DOWN = 40;

  var pacman = {
    x: 100,
    y: 100,
    speedMultiplier: 20,
    element: document.getElementById("pacman")
  };

  document.body.onkeyup = document.body.onkeydown = function(e) {
    var kc = e.keyCode || e.which;
      keys[kc] = e.type == 'keydown';
    };

  var movePacman = function(dx, dy) {
    pacman.x += (dx||0) * pacman.speedMultiplier;
    pacman.y += (dy||0) * pacman.speedMultiplier;
    pacman.element.style.left = pacman.x + 'px';
    pacman.element.style.top = pacman.y + 'px';
    for (var key in ghosts) {
      if (!((pacman.x > ghosts[key]['ghostx'] + 50) || (pacman.y > ghosts[key]['ghosty'] + 50) || (ghosts[key]['ghostx'] > pacman.x + 50) || (ghosts[key]['ghosty'] > pacman.y + 50))) {
      document.getElementById(key).remove();
      delete ghosts[key];
      result += 1;
      document.getElementById('view_result').innerHTML = 'Score: ' + result.toString();
      }
    }
  };

  var detectMovement = function() {
    if ( keys[keys.LEFT] ) {
      movePacman(-1, 0);
      pacman.element.style.transform = "rotate(180deg)";
    }
    if ( keys[keys.RIGHT] ) {
      movePacman(1, 0);
      pacman.element.style.transform = "rotate(0deg)";
    }
    if ( keys[keys.UP] ) {
      movePacman(0, -1);
      pacman.element.style.transform = "rotate(270deg)";
    }
    if ( keys[keys.DOWN] ) {
      movePacman(0, 1);
      pacman.element.style.transform = "rotate(90deg)";
    }

  };

  movePacman();

  setInterval(function() {
    detectMovement();
    ghostCount += 1;
  }, 1000/24);
}
PacmanMove();