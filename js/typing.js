
var i = 0;
var txt = 'Django Based Music Player';
var speed = 140;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("about__project").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
    /*
    if (i == txt.length) {
        setTimeout(backspace, 500);
    }
    
}

function backspace() {
    if (i > 0) {
        document.getElementById("intro__text").innerHTML = txt.substring(0, i-1);
        i--;
        setTimeout(backspace, speed);
    }
    if (i == 0) {
        typeWriter();
    }
}

*/

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