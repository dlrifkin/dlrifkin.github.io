var cage = document.getElementById("cage");
var pinkyPic = document.getElementById("pinky");
var brainPic = document.getElementById("brain");
var wheelPic = document.getElementById("wheel");
var runPic = document.getElementById("pinky-wheel");
var waterPic = document.getElementById("water");
var drinkPic = document.getElementById("brain-water");
var foodPic = document.getElementById("food");
var eatPic = document.getElementById("brain-food");
var winPic = document.getElementById("breaking-pinky-brain");

var mice {
	hasExercised: false;
	hasDrunk: false;
	hasEaten: false;	
};

var posLeft = 0;
var posTop = 0;

document.onkeydown = function move(m) {
 		//left, up, right, down
    if(m.keyCode === 37){
		if(posLeft > 0){
     	   posLeft -= 50;
		   brainPic.style.left = posLeft + "px";
		   pinkyPic.style.left = posLeft + "px";
          }
        }
    if(m.keyCode === 38){
        if(posTop > 0){
        	posTop -= 50;
        	brainPic.style.top = posTop + "px";
        	pinkyPic.style.top = posTop + "px";
    		}
		}
    if(m.keyCode === 39){
        if(posLeft < 650){
        	posLeft += 50;
			brainPic.style.left = posLeft + "px";
        	pinkyPic.style.left = posLeft + "px";
        	}
        }
    if(m.keyCode === 40){
          if(posTop < 450){
            posTop += 50;
            brainPic.style.top = posTop + "px";
	    	pinkyPic.style.top = posTop + "px";
	    	}
		}
    play()
}

function play() {
	ran();
	ate();
	drank();
	win();
}


function ran(){
	if (posTop === 200 && posLeft === 100){
		
		wheelPic.style.visibility = 'hidden';
		runPic.style.visibility = 'visible';
		brainPic.style.visibility = 'visible';
		pinkyPic.style.visibility = 'hidden';
 	
 	mice.hasExercised = true;
  	}
 	
 }

// function swap(){
// 	if (mice.hasExercised === true){
// 	alert("Now help Brain eat and drink.")
	

function drank(){
	if (mice.hasExercised === true && posTop === 100 && posLeft === 450) {

 			waterPic.style.visibility = 'visible';
			drinkPic.style.visibility = 'hidden';

 			mice.hasDrunk = true;
 	
 	}
}

function ate(){
	if (mice.hasExercised === true && posTop === 400 && posLeft === 150){
			
			foodPic.style.visibility = 'hidden';
			eatPic.style.visibility = 'visible';

	 		mice.hasEaten = true;
 		
 	}
}

// function win(){
// 	if (mice.hasDrunk === true && mice.hasEaten === true){
// 		// alert("Brain is perfectly nourished. Go take over the world!");
// 		cage.style.visibility = 'hidden';
// 		winPic.style.visibility= 'visible';
// 		}
// }
