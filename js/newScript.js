// General 
var pacman;
var ghostsNumber;
var ghosts = [];
var windowHeight = $(window).height();
var windowWidth = $(window).width();

// Character constructor
function Character(id, speed, x, y) {
	this.left = x || $(id).offset().left;
	this.top = y || $(id).offset().top;
	this.name = id;
	this.height = $(id).height();
	this.width = $(id).width();
	this.speed = speed;
	this.move = function(nx, ny) {
		this.left += nx;
		this.top += ny;
	};
	this.build = function() {
		$(id).offset(this);
	};
	this.size = function() {
		$(id).offset(this.height += nhw);
		$(id).offset(this.height += nhw);
	}
}
// Pacman init
var pacman = new Character('#pacman', 20);

// Ghost init
for (var i = 1; i < ghostsNumber; i++) {
	var ghost = new Character('#ghost' + i, 20);
	ghosts.push(new Character(ghost, 20));
}
// Pacman  event handler
$('body').on('keydown', function(event) {
	var key = event.keyCode;
	if (key == 38 || key == 87) {
		up(pacman, pacman.speed).build();
	} else if (key == 40 || key == 83) {
		down(pacman, pacman.speed).build();
	} else if (key == 37 || key == 65) {
		toLeft(pacman, pacman.speed).build();
	} else if (key == 39 || key == 68) {
		toRight(pacman, pacman.speed).build();
	}
})

// Movement
function up(character, speed) {
	return character.move(0, -speed);
}
function down(character, speed) {
	return character.move(0, speed);
}
function toLeft(character, speed) {
	return character.move(-speed, 0);
}
function toRight(character, speed) {
	return character.move(speed, 0);
}
// function Pacman(horizontalPosition, verticalPosition) {
// 	var element = document.getElementById('pacman');
// 	this.left = horizontalPosition;
// 	this.top = verticalPosition;
// 	var pacman = {
//     x: horizontalPosition,
//     y: verticalPosition
//   	};
// 	this.moveEventHandler = function(event) {
// 		var key = event.keyCode;
// 		if (key == 38 || key == 87) {
// 			element.style.top = this.up() + 'px';
// 			element.style.transform = "rotate(270deg)";
// 		} else if (key == 40 || key == 83) {
// 			element.style.top = this.down() + 'px';
// 			element.style.transform = "rotate(90deg)";
// 		} else if (key == 37 || key == 65) {
// 			element.style.left = this.toLeft() + 'px';
// 			element.style.transform = "rotate(180deg)";
// 		} else if (key == 39 || key == 68) {
//       element.style.left = this.toRight() + 'px';
//       element.style.transform = "rotate(0deg)";
//     }
// 	};
// 	this.up = function() {
// 	  pacman.y -= 20;
//     return pacman.y;
// 	};
// 	this.down = function (){
// 	  pacman.y += 20;
//     return pacman.y;
//   	};
//   	this.toRight = function() {
// 	  pacman.x += 20;
//     return pacman.x;
// 	};
// 	this.toLeft = function() {
// 	  pacman.x -= 20;
//     return pacman.x;
// 	};
// 	this.build = function() {
// 		$('#pacman').offset(this);
// 	};
// 	this.init = function() {
// 		this.moveEventHandler('onkeydown');
// 		this.build();
// 		Pacman(pacman.x, pacman.y);
// 	};
// }
// var pacman = new Pacman(500, 250);
// pacman.init();
// function Pacman(horizontalPosition, verticalPosition, id) {
// 	var pacman = document.getElementById('pacman');
// 	this.left = horizontalPosition;
// 	this.top = verticalPosition;
// 	this.name = id;
// 	this.init = function() {
// 		this.moveEventHandler('onkeydown');
// 		this.build();
// 		Pacman();
// 	};
// 	this.moveEventHandler = function(event) {
// 		var key = event.keyCode;
// 		if (key == 38 || key == 87) {
// 			pacman.style.top = this.up() + 'px';
// 		} else if (key == 40 || key == 83) {
// 			pacman.style.top = this.down() + 'px';

// 		} else if (key == 37 || key == 65) {
// 			pacman.style.left = this.toLeft() + 'px';

// 		} else if (key == 39 || key == 68) {
// 	    	pacman.style.left = this.toRight() + 'px';

// 	    }
// 	};
// 	this.up = function() {
//         pacman.style.transform = "rotate(270deg)";
//         return parseInt(getComputedStyle(pacman).top) - 20;
// 	};
// 	this.down = function (){
//         pacman.style.transform = "rotate(90deg)";
//         return parseInt(getComputedStyle(pacman).top) + 20;
//     };
//     this.toRight = function() {
//     	pacman.style.transform = "rotate(0deg)";
//     	return parseInt(getComputedStyle(pacman).left) + 20;
// 	};
// 	this.toLeft = function() {
// 		pacman.style.transform = "rotate(180deg)";
// 		return parseInt(getComputedStyle(pacman).left) - 20;
// 	};
// 	this.build = function() {
// 		$('#pacman').offset(this);
// 	};
// }

// var pacman = new Pacman(500, 250, '#pacman');
// pacman.init();

// Ghost constructor
// function Ghost(id_counter) {
//     this.name = id_counter;
// 	this.create = function() {
// 		var ghostImg = jQuery('<img>', {
// 			src: 'img/ghost.png',
// 			class: 'ghost',
//    			id: id_counter,
//             style: 'width:50px;position:fixed;left:' + this.x + 'px;top:' + this.y + 'px'
//         }).appendTo('body');
// 	};
// 		this.build = function() {
// 		$(id_coiunter).offset(this);
// 	};
// 	this.makeNewPosition = function() {
//     	var h = $('body').height() - 50;
//     	var w = $('body').width() - 50;
//     	var nh = Math.floor(Math.random() * h);
//     	var nw = Math.floor(Math.random() * w);
//     	return [nh,nw];    
//     };
//     this.ghostMove = function(){
//     	var newq = this.makeNewPosition();
//     	var oldq = $('#ghost').offset();
//     	var speed = this.calcSpeed([oldq.top, oldq.left], newq);
//     	$('#ghost').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       	ghostMove();     
//     	});
// 	};
//     this.calcSpeed = function(prev, next) {
//     	var x = Math.abs(prev[1] - next[1]);
//     	var y = Math.abs(prev[0] - next[0]);
//     	var greatest = x > y ? x : y;
//     	var speedModifier = 0.2;
//     	var speed = Math.ceil(greatest/speedModifier);
//     	return speed;
// 	};
// 	this.init = function() {
// 		this.create();
// 		this.build();
// 		this.ghostMove();
// 		Ghost();
// 	};
// }
// // First ghosts init
// var ghosts = [];
// for (var i = 1; i < 5; i++) {
// 	var ghost = new Ghost('ghost' + i);
// 	ghosts.push(new Ghost(ghost));
// 	ghost.create();
// 	Ghost();
// }
// // Ghosts loop
// var timer = setInterval(function() {
// 	for (var i = 1; i < 5; i++) {
//     	var ghost = new Ghost('ghost' + i);
//     	ghosts.push(new Ghost(ghost));
//     	ghost.create();
//     }
// }, 15000);




