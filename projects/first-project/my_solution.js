var cage = document.getElementById("cage")
var pinkyPic = document.getElementById("pinky")
var brainPic = document.getElementById("brain")
var wheelPic = document.getElementById("wheel")
var runPic = document.getElementById("pinky-wheel")
var waterPic = document.getElementById("water")
var drinkPic = document.getElementById("brain-water")
var foodPic = document.getElementById("food")
var eatPic = document.getElementById("brain-food")
var winPic = document.getElementById("breaking-pinky-brain")

var posTop = 0
var posLeft = 0

var start {
	brainPic.style.visibility = 'hidden';
	runPic.style.visibility = 'hidden';
	eatPic.style.visibility = 'hidden';
	drinkPic.style.visibility = 'hidden';
	winPic.style.visibility = 'hidden';	
}

var mice {
	var hasExercised = false;
	var hasDrunk = false;
	var hasEaten = false;	
}

document.onkeydown = move;

function move(m) {
 		//left, up, right, down
    if(m.keyCode === 37){
		if(posLeft > 0){
     	   posLeft -= 50;
		   brainPic.style.left = posLeft + "px";
		   pinkyPic.style.left = posLeft + "px";
          }
        }
    if(m.keyCode === 38){
        if(posTop < 0){
        	posTop -= 50;
        	brainPic.style.top = posTop + "px";
        	pinkyPic.style.top = posTop + "px";
        }
    if(m.keyCode === 39){
        if(posLeft < 500){
        	posLeft += 50;
			brainPic.style.top = posLeft + "px";
        	pinkyPic.style.top = posLeft + "px";
        }
      if(m.keyCode === 40){
          if(posTop < 500){
            posTop += 50;
            brainPic.style.top = posTop + "px";}
	    	pinkyPic.style.top = posTop + "px";}
	    }
    ran();
    ate();
    drank();
    win();
}

var ran = function(){
	if (posTop === 200 && posLeft === 100){
		
		wheelPic.style.visibility = 'hidden';
		runPic.style.visibility = 'visible';

 	mice.hasExercised = true;
 	}
 	swap()
}

var swap = function(){
		alert("Now help Brain eat and drink.")
		brainPic.style.visibility = 'visible';
		pinkyPic.style.visibility = 'hidden';
}

var drank = function(){
	if (mice.hasExercised === true) {
		if (posTop === 100 && posLeft === 450){
 		
 			waterPic.style.visibility = 'visible';
			drinkPic.style.visibility = 'hidden';

 			mice.hasDrunk = true;
 		}
 	}
}

var ate = function(){
	if (mice.hasExercised === true){
		if (posTop === 400 && posLeft === 150){
			
			foodPic.style.visibility = 'hidden';
			eatPic.style.visibility = 'visible';

	 		mice.hasEaten = true;
 		}
 	}
}

var win = function(){
	if (mice.hasDrunk === true && mice.hasEaten === true){
		alert("Brain is perfectly nourished. Go take over the world!");
		cage.style.visibility = 'hidden';
		winPic.style.visibility= 'visible';
		}
}
