/**
 * Typewriter code
 */
var i = 0;
var txt = 'STUDENT, ASPIRING DEV';
var speed = 140;
var backspace = false

function typeWriter() {
    document.getElementById("intro__text").innerHTML = txt.substring(0, i);
    if (!backspace) {
        i++;
    }
    if (backspace) {
        i--;
    }
    if (i >= txt.length) {
        backspace = true;
    }
    if (i == 0) {
        backspace = false;
    }
    setTimeout(typeWriter, speed)
}



/* 
var i = 0;
var txt = 'STUDENT, ASPIRING DEV';
var speed = 70;
var backspace = false;

var outputElem = document.getElementById("intro__text");
function typeWriter() {
  outputElem.textContent = txt.substring(0, i);

  if (i > txt.length) backspace = true;
  if (i == 0) backspace = false;
  i += (backspace ? -1 : 1);
  
  setTimeout(typeWriter, speed);
}

*/

typeWriter();