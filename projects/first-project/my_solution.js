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

var mice {
	hasExercised: false;
	hasDrunk: false;
	hasEaten: false;	
}
//   function pickKey(event) {                    
//     switch (event.keyCode) {
//         case 37:
//             leftArrow();
// 	        break;

// 		case 39:
//             rightArrow();
//             break;

//         case 38:
//             upArrow();
//             break;

//         case 40:
//             downArrow();
//             break;
//         }
// }

// function leftArrow(){
// 	if(posLeft > 0){
//  		posLeft -= 50;
// 		brainPic.style.left = posLeft + "px";
// 		pinkyPic.style.left = posLeft + "px";	
// 	}       
// }

// function rightArrow(){
//     if(posLeft < 500){
//     	posLeft += 50;
// 		brainPic.style.top = posLeft + "px";
//     	pinkyPic.style.top = posLeft + "px";
// 	}
// }

// function upArrow(){
// 	if(posTop > 0){
// 		posTop -= 50;
//     	brainPic.style.top = posTop + "px";
//     	pinkyPic.style.top = posTop + "px";
// 	}
// }

// function downArrow(){
// 	if(posTop < 500){
//         posTop += 50;
//       	brainPic.style.top = posTop + "px";
//     		pinkyPic.style.top = posTop + "px";
//     }
// }

function move(m) {
 		//left, up, right, down
    else if(m.keyCode === 37){
		if(posLeft > 49){
     	   posLeft -= 50;
		   brainPic.style.left = posLeft + "px";
		   pinkyPic.style.left = posLeft + "px";
          }
        }
    else if(m.keyCode === 38){
        if(posTop > 49){
        	posTop -= 50;
        	brainPic.style.top = posTop + "px";
        	pinkyPic.style.top = posTop + "px";
        }
    else if(m.keyCode === 39){
        if(posLeft < 500){
        	posLeft += 50;
			brainPic.style.top = posLeft + "px";
        	pinkyPic.style.top = posLeft + "px";
        }
    else if(m.keyCode === 40){
          if(posTop < 500){
            posTop += 50;
            brainPic.style.top = posTop + "px";
	    	pinkyPic.style.top = posTop + "px";
	    }
    play()
    ran();
    ate();
    drank();
    win();
}

document.onkeydown = move();

function ran(){
	if (posTop === 200 && posLeft === 100){
		
		wheelPic.style.visibility = 'hidden';
		runPic.style.visibility = 'visible';

 	mice.hasExercised = true;
 	}
 	swap()
}

function swap(){
		alert("Now help Brain eat and drink.")
		brainPic.style.visibility = 'visible';
		pinkyPic.style.visibility = 'hidden';
}

function drank(){
	if (mice.hasExercised === true) {
		if (posTop === 100 && posLeft === 450){
 		
 			waterPic.style.visibility = 'visible';
			drinkPic.style.visibility = 'hidden';

 			mice.hasDrunk = true;
 		}
 	}
}

function ate(){
	if (mice.hasExercised === true){
		if (posTop === 400 && posLeft === 150){
			
			foodPic.style.visibility = 'hidden';
			eatPic.style.visibility = 'visible';

	 		mice.hasEaten = true;
 		}
 	}
}

function win(){
	if (mice.hasDrunk === true && mice.hasEaten === true){
		alert("Brain is perfectly nourished. Go take over the world!");
		cage.style.visibility = 'hidden';
		winPic.style.visibility= 'visible';
		}
}
