var i = 0;
var j = 0;
var txt = 'STUDENT, ASPIRING DEV';
var speed = 70;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro__text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    if (i == txt.length) {
        setTimeout(backspace, 500);
    }
}

function backspace() {
    if (j < length) {
        document.getElementById("intro__text").innerHTML -= txt.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
backspace();