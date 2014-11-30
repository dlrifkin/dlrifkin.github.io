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

var ran = false;
var drank = false;
var ate = false;

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
	run();
	drink();
	eat();
	win();
}


function run(){
	if (posTop === 200 && posLeft === 100){
		
		wheelPic.style.visibility = 'hidden';
		runPic.style.visibility = 'visible';
		brainPic.style.visibility = 'visible';
		pinkyPic.style.visibility = 'hidden';
 	
 	ran = true;
  	}
 	
 }

// function swap(){
// 	if (ran === true){
// 	alert("Now help Brain eat and drink.")
	

function drink(){
	if (ran === true && posTop === 100 && posLeft === 450) {

 			waterPic.style.visibility = 'hidden';
			drinkPic.style.visibility = 'visible';

 			drank = true;
 	
 	}
}

function eat(){
	if (ran === true && posTop === 400 && posLeft === 150){
			
			foodPic.style.visibility = 'hidden';
			eatPic.style.visibility = 'visible';

	 		ate = true;
 		
 	}
}

function win(){
	if (drank === true && ate === true){
		// alert("Brain is perfectly nourished. Go take over the world!");
		cage.style.visibility = 'hidden';
		winPic.style.visibility= 'visible';
		}
}
