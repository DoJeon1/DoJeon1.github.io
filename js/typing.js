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
       // i--;
    }
    if (i >= txt.length) {
        backspace = true;
    }
    if (i == 0) {
        backspace = false;
    }
    setTimeout(typeWriter, speed)
}

typeWriter();