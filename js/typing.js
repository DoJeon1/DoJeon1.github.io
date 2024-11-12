/**
 * Typewriter effect code for "index.html"
 */
var i = 0;
var txt = 'OUTDOOR & INDOOR ENTHUSIAST';
var speed = 140;
var backspace = false

function typeWriter() {
    document.getElementById("intro__text").innerHTML = txt.substring(0, i);
    if (!backspace) {
        i++;
    }
    if (backspace) {
        //i--;
    }
    if (i == txt.length) {
        backspace = true;
        clearTimeout(content);
    }
    if (i == 0) {
        backspace = false;
    }
    content = setTimeout(typeWriter, speed)
}

typeWriter();