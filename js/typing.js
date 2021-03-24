var i = 0;
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
/*
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
/*

typeWriter();