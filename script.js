// The date we're counting down to with Brasilia timezone
var countDownDate = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date("Mon Oct 10 2022 00:00:00 UTC-0300 (BRT)").getTime();
    
// Find the distance between now and the count down date
var distance = countDownDate - now;
    
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
    
// If the count down is over, write some text 

if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "See you soon"; } }, 1000);

// Video Script

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
} else {
    video.pause();
    btn.innerHTML = "Play";
}
}
