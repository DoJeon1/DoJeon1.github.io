/**
 * Typewriter effect code for "norae.html"
 */ 
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


 typeWriter();

